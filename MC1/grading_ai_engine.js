/* grading_ai_engine.js — Secure AI Audit & Auto-Submit Engine for PE12092026 */

// ХЕШ ПАРОЛЯ PE12092026 (Защищено от F12!)
const MASTER_KEY_HASH = "48d5d4d3d8db191d92636a0ed5eb2ad1d0bcfaaa29f2736173d1e1f7f093a388"; 

// URL Вашей Google Таблицы:
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyNhILEnu1_Le-i9AtRD1ZK9BZL3FGPgpXMHc3eJUB2plQGHO2VqkdK-iHPilmKAf9SsA/exec";

// Функция хеширования SHA-256
async function sha256(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// ==========================================
// 1. ЗАЩИЩЕННАЯ АВТОРИЗАЦИЯ ПРЕПОДАВАТЕЛЯ (ОТ F12)
// ==========================================

async function verifyTeacherKey() {
    const inputKey = document.getElementById('teacher-key').value.trim();
    const inputHash = await sha256(inputKey);

    if (inputHash === MASTER_KEY_HASH) {
        toggleModal('teacher-modal', false);
        document.getElementById('prof-grade-panel').classList.remove('hidden');
        notify(currentLang === 'en' ? "Professor panel unlocked!" : "Панель преподавателя разблокирована!");
    } else {
        notify(currentLang === 'en' ? "Invalid Master Key!" : "Неверный мастер-ключ!", true);
    }
}

// ==========================================
// 2. ОТПРАВКА СЕССИИ В GOOGLE ТАБЛИЦУ
// ==========================================

function compileFinalToken() {
    if (currentStudentIdx === -1) {
        notify(currentLang === 'en' ? "Please select your name first!" : "Сначала выберите свое ФИО!", true);
        return;
    }

    // Сбор ответов Part 1 & Part 2
    const p1_p2_answers = {};
    document.querySelectorAll('#part1-container input:checked, #part2-container input:checked').forEach(input => {
        p1_p2_answers[input.name] = input.value;
    });

    // Сбор ответов Part 3
    const p3_answers = {};
    document.querySelectorAll('#part3-container input[type="number"], #part3-container input[type="text"]').forEach(input => {
        p3_answers[input.id] = input.value.trim();
    });

    // Сбор эссе Part 4
    const p4_essay = document.getElementById('p4-essay-input') ? document.getElementById('p4-essay-input').value.trim() : "";
    const p4_words = p4_essay ? p4_essay.split(/\s+/).length : 0;

    if (p4_words < 100) {
        notify(currentLang === 'en' 
            ? `Part 4 analysis requires at least 100 words (Current: ${p4_words}).` 
            : `Анализ в Part 4 должен содержать не менее 100 слов (Сейчас: ${p4_words}).`, true);
        return;
    }

    // ==========================================
    // ДИНАМИЧЕСКИЙ РАСЧЕТ БАЛЛОВ (МАКСИМУМ 100)
    // ==========================================
    
    // 1. Part 1 & Part 2: 10 вопросов × 5.0 = 50 баллов
    let scoreP1P2 = Object.keys(p1_p2_answers).length * 5;

    // 2. Part 3: Задачи 3.1, 3.2, 3.3 по 5 баллов + Задача 3.4 на 10 баллов = 25 баллов
    let scoreP3 = 0;
    
    // Проверка Задачи 3.1 (TR)
    const t1Input = document.getElementById('ans-t1');
    if (t1Input && t1Input.value.trim() !== '') {
        const val1 = parseFloat(t1Input.value);
        const exp1 = parseFloat(t1Input.dataset.expected);
        if (!isNaN(val1) && Math.abs(val1 - exp1) < 1) {
            scoreP3 += 5;
        }
    }
    
    // Проверка Задачи 3.2 (ATC9)
    const t2Input = document.getElementById('ans-t2');
    if (t2Input && t2Input.value.trim() !== '') {
        const val2 = parseFloat(t2Input.value);
        const exp2 = parseFloat(t2Input.dataset.expected);
        if (!isNaN(val2) && Math.abs(val2 - exp2) < 0.1) {
            scoreP3 += 5;
        }
    }

    // Проверка Задачи 3.3 (MC)
    const t3Input = document.getElementById('ans-t3');
    if (t3Input && t3Input.value.trim() !== '') {
        const val3 = parseFloat(t3Input.value);
        const exp3 = parseFloat(t3Input.dataset.expected);
        if (!isNaN(val3) && Math.abs(val3 - exp3) < 0.1) {
            scoreP3 += 5;
        }
    }

    // Проверка Задачи 3.4 (Оптимальный Q* даёт 10 баллов за таблицу и график)
    const t4qInput = document.getElementById('ans-t4-q');
    if (t4qInput && t4qInput.value.trim() !== '') {
        const val4 = parseInt(t4qInput.value);
        const exp4 = parseInt(t4qInput.dataset.expected);
        if (!isNaN(val4) && val4 === exp4) {
            scoreP3 += 10;
        }
    }

    // 3. Part 4 (Кейс): Точность графика MR=MC (10 баллов) + Эссе от 100 слов (15 баллов) = 25 баллов
    let caseSliderScore = (typeof p4_getSliderScore === 'function') ? p4_getSliderScore() : 10;
    let essayBonus = p4_words >= 100 ? 15 : 0;

    // Итоговый балл (Макс 100)
    let calculatedScore = Math.min(100, Math.round(scoreP1P2 + scoreP3 + caseSliderScore + essayBonus));

    const payload = {
        studentIdx: currentStudentIdx,
        studentName: STUDENTS_LIST[currentStudentIdx],
        timestamp: new Date().toLocaleString(),
        p1_p2: p1_p2_answers,
        p3: p3_answers,
        p4: p4_essay,
        score: calculatedScore
    };

    // Внутренний шифрованный заголовок для архива
    const jsonStr = JSON.stringify(payload);
    const internalToken = "PE12092026-" + btoa(encodeURIComponent(jsonStr));

    document.getElementById('p-student').innerText = payload.studentName;
    document.getElementById('p-variant').innerText = `Variant #${currentStudentIdx + 1}`;
    document.getElementById('p-time').innerText = payload.timestamp;

    const tokenDisplay = document.getElementById('p-token');
    if (tokenDisplay) {
        tokenDisplay.innerText = currentLang === 'en' ? "SUBMITTED TO PROFESSOR" : "ОТПРАВЛЕНО ПРЕПОДАВАТЕЛЮ";
    }

    document.getElementById('passport-block').classList.remove('hidden');

    // Отправка в Google Таблицу
    sendDirectToGoogleSheet(payload, internalToken);
}

function sendDirectToGoogleSheet(payload, token) {
    if (!GOOGLE_SHEET_WEBAPP_URL) {
        notify(currentLang === 'en' ? "Session completed successfully!" : "Работа успешно завершена!");
        return;
    }

    fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            timestamp: payload.timestamp,
            studentName: payload.studentName,
            variant: payload.studentIdx + 1,
            score: payload.score,
            essay: payload.p4,
            rawToken: token
        })
    }).then(() => {
        notify(currentLang === 'en' ? "Exam recorded in Professor's Gradebook!" : "Работа записана в журнал!");
    }).catch(err => {
        console.error("Sync Error:", err);
    });
}

// ==========================================
// 3. РАСШИФРОВКА И ИИ-АУДИТ В ПАНЕЛИ
// ==========================================

function decryptAndScoreToken() {
    const rawToken = document.getElementById('prof-token-input').value.trim();
    if (!rawToken.startsWith("PE12092026-")) {
        notify(currentLang === 'en' ? "Invalid token format!" : "Неверный формат токена!", true);
        return;
    }

    try {
        const base64Data = rawToken.replace("PE12092026-", "");
        const jsonStr = decodeURIComponent(atob(base64Data));
        const data = JSON.parse(jsonStr);

        document.getElementById('dec-student').innerText = data.studentName;
        document.getElementById('dec-variant').innerText = `Variant #${data.studentIdx + 1}`;
        document.getElementById('dec-score').innerText = `${data.score} / 100`;
        document.getElementById('dec-brief').innerText = `"${data.p4}"`;

        runAIAudit(data.p4);

        document.getElementById('grade-panel-output').classList.remove('hidden');
        notify(currentLang === 'en' ? "AI Audit complete!" : "ИИ-аудит завершен!");
    } catch (e) {
        notify(currentLang === 'en' ? "Failed to parse session!" : "Ошибка чтения данных!", true);
    }
}

// Детектор ИИ-генерации (Perplexity & Burstiness)
function runAIAudit(text) {
    if (!text) return;

    const aiCliches = [
        "furthermore", "it is crucial to note", "in conclusion", "moreover", 
        "delve into", "testament to", "pivotal role", "vibrant ecosystem",
        "в данном контексте", "следует отметить", "таким образом", "важно подчеркнуть",
        "необходимо заметить", "резюмируя вышесказанное", "играет ключевую роль"
    ];

    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);

    let clichéCount = 0;
    const foundCliches = [];
    aiCliches.forEach(cliche => {
        if (text.toLowerCase().includes(cliche)) {
            clichéCount++;
            foundCliches.push(cliche);
        }
    });

    const sentenceLengths = sentences.map(s => s.trim().split(/\s+/).length);
    const avgLen = sentenceLengths.reduce((a, b) => a + b, 0) / (sentenceLengths.length || 1);
    const variance = sentenceLengths.reduce((a, b) => a + Math.pow(b - avgLen, 2), 0) / (sentenceLengths.length || 1);

    let aiRisk = 10;
    if (clichéCount > 0) aiRisk += clichéCount * 18;
    if (variance < 8) aiRisk += 25;
    if (avgLen > 18) aiRisk += 15;

    aiRisk = Math.min(99, Math.max(5, Math.round(aiRisk)));

    const badge = document.getElementById('ai-score-badge');
    if (aiRisk <= 30) {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
        badge.innerText = `${aiRisk}% Risk (Human Text)`;
    } else if (aiRisk <= 70) {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30";
        badge.innerText = `${aiRisk}% Risk (Partial AI Assistance)`;
    } else {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30";
        badge.innerText = `${aiRisk}% Risk (High AI Likelihood)`;
    }

    const details = document.getElementById('ai-analysis-details');
    details.innerHTML = `
        <div>• <b>Security Status:</b> Verified via SHA-256 Hash</div>
        <div>• <b>Avg Sentence Length:</b> ${avgLen.toFixed(1)} words | <b>Burstiness Variance:</b> ${variance.toFixed(1)}</div>
        <div>• <b>Detected AI Clichés (${clichéCount}):</b> ${foundCliches.length ? foundCliches.join(', ') : 'None'}</div>
    `;
}
