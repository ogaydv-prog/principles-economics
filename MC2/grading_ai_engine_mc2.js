/* ==========================================
   grading_ai_engine_mc2.js
   Midterm Control 2 • Grading, Token Compiler, Teacher Audit & Google Sheets Sync
   AlmaU SDTE 2026 • Principles of Economics (5 Tasks × 20 pts = 100 pts)
   ========================================== */

const GOOGLE_SHEET_WEBAPP_URL_MC2 = "https://script.google.com/macros/s/AKfycbwvKlJmY60YN4pUh6HiBHNFxOvWllcQsCbpyOAIwEweJAd7YuuBMJ1LWHLqu622uk65uQ/exec";

// ==========================================
// 1. АВТОРИЗАЦИЯ ПРЕПОДАВАТЕЛЯ
// ==========================================
function verifyTeacherKeyMC2() {
    if (typeof toggleModal === 'function') {
        toggleModal('teacher-modal', false);
    }
    const profPanel = document.getElementById('prof-grade-panel');
    if (profPanel) {
        profPanel.classList.remove('hidden');
        profPanel.scrollIntoView({ behavior: 'smooth' });
    }
    if (typeof notify === 'function') {
        notify(currentLang === 'en' ? "Professor panel unlocked!" : "Панель преподавателя разблокирована!");
    }
}

// ==========================================
// 2. ОЦЕНКА ВСЕХ 5 ЗАДАНИЙ (20 × 5 = 100 БАЛЛОВ)
// ==========================================
function evaluateAllTasksMC2(studentIdx) {
    const breakdown = {
        t1: 0,
        t2: 0,
        t3: 0,
        t4: 0,
        t5: 0,
        details: {}
    };

    // --- ЗАДАНИЕ 1: ТЕОРЕТИЧЕСКИЕ ВОПРОСЫ (6 вопросов × 3.333 = 20 баллов MAX) ---
    let t1Correct = 0;
    const t1Answers = {};
    document.querySelectorAll('#task1-container input[type="radio"]:checked').forEach(input => {
        t1Answers[input.name] = input.value;
        if (input.dataset.ans && input.value === input.dataset.ans) {
            t1Correct++;
        }
    });
    breakdown.t1 = Number(((t1Correct / 6) * 20).toFixed(2));
    breakdown.details.t1 = { correct: t1Correct, total: 6, answers: t1Answers };

    // --- ЗАДАНИЕ 2: ВВП (GDP) — 20 баллов MAX (-2 за каждую неверную позицию) ---
    let t2Score = 0;
    let t2Details = {};
    if (typeof gradeTask2MC2 === 'function') {
        const res2 = gradeTask2MC2(studentIdx);
        t2Score = res2.score;
        t2Details = res2;
    } else if (typeof mc2Task2State !== 'undefined' && mc2Task2State[studentIdx]) {
        const st2 = mc2Task2State[studentIdx];
        const items = st2.items || [];
        let errors = 0;
        let answeredCount = 0;
        items.forEach(item => {
            if (item.userCat) answeredCount++;
            if (item.userCat !== item.correctCat) errors++;
        });
        if (answeredCount > 0) {
            t2Score = Math.max(0, 20 - errors * 2);
        }
        t2Details = { errors, answeredCount, userGDP: st2.ansGDP || '' };
    }
    breakdown.t2 = Number(t2Score.toFixed(2));
    breakdown.details.t2 = t2Details;

    // --- ЗАДАНИЕ 3: КЕЙНСИАНСКИЙ КРЕСТ И МОДЕЛЬ СОВОКУПНЫХ РАСХОДОВ — 20 баллов MAX (-2 за каждый параметр) ---
    let t3Score = 0;
    let t3Details = {};
    if (typeof gradeTask3MC2 === 'function') {
        const res3 = gradeTask3MC2(studentIdx);
        t3Score = res3.score;
        t3Details = res3;
    } else if (typeof mc2Task3State !== 'undefined' && mc2Task3State[studentIdx]) {
        const st3 = mc2Task3State[studentIdx];
        const d3 = (typeof getStudentKeynesDataMC2 === 'function') ? getStudentKeynesDataMC2(studentIdx) : null;
        if (d3) {
            let penalty = 0;
            const checkNum = (val, exp, tol) => {
                const n = parseFloat(String(val).replace(',', '.'));
                return !isNaN(n) && Math.abs(n - exp) <= tol;
            };
            if (!checkNum(st3.ansMPC, d3.mpc, 0.02)) penalty += 2;
            if (!checkNum(st3.ansYd, d3.yd, 2)) penalty += 2;
            if (!checkNum(st3.ansC, d3.c, 2)) penalty += 2;
            if (!checkNum(st3.ansI, d3.inv, 2)) penalty += 2;
            if (!checkNum(st3.ansG, d3.gov, 2)) penalty += 2;
            if (!checkNum(st3.ansNX, d3.nx, 2)) penalty += 2;
            if (!checkNum(st3.ansYStar, d3.yStar, 5)) penalty += 4;
            t3Score = Math.max(0, 20 - penalty);
            t3Details = { penalty, state: st3 };
        }
    }
    breakdown.t3 = Number(t3Score.toFixed(2));
    breakdown.details.t3 = t3Details;

    // --- ЗАДАНИЕ 4: КОЛИЧЕСТВЕННАЯ ТЕОРИЯ ДЕНЕГ (MV = PY) — 20 баллов (всё верно = 20, есть попытка/ошибки = 10, пусто = 0) ---
    let t4Score = 0;
    let t4Details = {};
    if (typeof getStudentQTMDataMC2 === 'function' && typeof mc2Task4State !== 'undefined' && mc2Task4State[studentIdx]) {
        const d4 = getStudentQTMDataMC2(studentIdx);
        const st4 = mc2Task4State[studentIdx];

        const parseN = v => parseFloat(String(v || '').replace(',', '.'));
        const p0Ok = !isNaN(parseN(st4.ansP0)) && Math.abs(parseN(st4.ansP0) - d4.P0) <= 0.03;
        const vOk = !isNaN(parseN(st4.ansV)) && Math.abs(parseN(st4.ansV) - d4.V) <= 0.2;
        const p1Ok = !isNaN(parseN(st4.ansP1)) && Math.abs(parseN(st4.ansP1) - d4.P1_constM) <= 0.03;
        const mStabOk = !isNaN(parseN(st4.ansMStable)) && Math.abs(parseN(st4.ansMStable) - d4.M_stable) <= 1.5;
        const mTargOk = !isNaN(parseN(st4.ansMTarget)) && Math.abs(parseN(st4.ansMTarget) - d4.M_target) <= 2.0;

        const rawTxt = String(st4.ansNomGDPText || '').toLowerCase().trim();
        const unchangedRegex = /(не\s*измен|не\s*меня|остал|прежн|без\s*изменен|постоян|констант|unchang|did\s*not\s*change|didn't\s*change|no\s*change|remain|same|constant)/i;
        const sameNumRegex = new RegExp(`${d4.nomGDP0}.*${d4.nomGDP0}`);
        const nomTxtOk = rawTxt.length > 0 && (unchangedRegex.test(rawTxt) || sameNumRegex.test(rawTxt));

        const anyAttempt =
            st4.ansP0 !== '' || st4.ansV !== '' || st4.ansP1 !== '' ||
            st4.ansMStable !== '' || st4.ansMTarget !== '' || rawTxt !== '' ||
            st4.sliderM !== d4.M0 || st4.sliderY !== d4.Y0;

        if (p0Ok && vOk && nomTxtOk && p1Ok && mStabOk && mTargOk) {
            t4Score = 20;
        } else if (anyAttempt) {
            t4Score = 10;
        } else {
            t4Score = 0;
        }

        t4Details = {
            checks: { p0Ok, vOk, nomTxtOk, p1Ok, mStabOk, mTargOk },
            studentAnswers: st4,
            expected: {
                P0: d4.P0,
                V: d4.V,
                P1: d4.P1_constM,
                M_stable: d4.M_stable,
                M_target: d4.M_target
            }
        };
    }
    breakdown.t4 = t4Score;
    breakdown.details.t4 = t4Details;

    // --- ЗАДАНИЕ 5: БЕЗРАБОТИЦА И СОСТАВ НАСЕЛЕНИЯ — 20 баллов (12 за 9 групп + 8 за уровень безработицы u) ---
    let t5Score = 0;
    let t5Details = {};
    if (typeof getStudentLaborDataMC2 === 'function' && typeof mc2Task5State !== 'undefined' && mc2Task5State[studentIdx]) {
        const d5 = getStudentLaborDataMC2(studentIdx);
        const st5 = mc2Task5State[studentIdx];

        let correctGroups = 0;
        d5.groups.forEach(g => {
            if (st5.selections[g.id] === g.correctCat) {
                correctGroups++;
            }
        });
        const groupPts = (correctGroups / d5.groups.length) * 12;

        const uVal = parseFloat(String(st5.ansURate || '').replace(',', '.'));
        const uOk = !isNaN(uVal) && Math.abs(uVal - d5.trueURate) <= 0.15;
        const ratePts = uOk ? 8 : 0;

        t5Score = Number((groupPts + ratePts).toFixed(2));
        t5Details = {
            correctGroups,
            totalGroups: d5.groups.length,
            studentURate: st5.ansURate,
            expectedURate: d5.trueURate,
            selections: st5.selections
        };
    }
    breakdown.t5 = t5Score;
    breakdown.details.t5 = t5Details;

    const totalScore = Math.min(100, Math.round((breakdown.t1 + breakdown.t2 + breakdown.t3 + breakdown.t4 + breakdown.t5) * 10) / 10);
    breakdown.total = totalScore;

    return breakdown;
}

// ==========================================
// 3. СБОРКА ТОКЕНА И ОТПРАВКА В GOOGLE ТАБЛИЦУ
// ==========================================
function compileFinalTokenMC2() {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) {
        if (typeof notify === 'function') {
            notify(currentLang === 'en' ? "Please select your name first!" : "Сначала выберите свое ФИО!", true);
        }
        return;
    }

    const res = evaluateAllTasksMC2(currentStudentIdx);

    const payload = {
        exam: "MC2_PE_2026",
        studentIdx: currentStudentIdx,
        studentName: STUDENTS_LIST[currentStudentIdx],
        variant: currentStudentIdx + 1,
        timestamp: new Date().toLocaleString(),
        scores: {
            t1: res.t1,
            t2: res.t2,
            t3: res.t3,
            t4: res.t4,
            t5: res.t5,
            total: res.total
        },
        details: res.details
    };

    const jsonStr = JSON.stringify(payload);
    const internalToken = "MC2PE2026-" + btoa(encodeURIComponent(jsonStr));

    const pStudent = document.getElementById('p-student');
    const pVariant = document.getElementById('p-variant');
    const pTime = document.getElementById('p-time');
    const pScore = document.getElementById('p-score');
    const tokenDisplay = document.getElementById('p-token');

    if (pStudent) pStudent.innerText = payload.studentName;
    if (pVariant) pVariant.innerText = `Variant #${payload.variant}`;
    if (pTime) pTime.innerText = payload.timestamp;
    if (pScore) pScore.innerText = `${res.total} / 100`;
    if (tokenDisplay) tokenDisplay.innerText = internalToken;

    const passportBlock = document.getElementById('passport-block');
    if (passportBlock) {
        passportBlock.classList.remove('hidden');
        passportBlock.scrollIntoView({ behavior: 'smooth' });
    }

    sendDirectToGoogleSheetMC2(payload, internalToken);
}

function sendDirectToGoogleSheetMC2(payload, token) {
    if (!GOOGLE_SHEET_WEBAPP_URL_MC2) {
        if (typeof notify === 'function') {
            notify(currentLang === 'en' ? "Session completed!" : "Работа завершена!");
        }
        return;
    }

    fetch(GOOGLE_SHEET_WEBAPP_URL_MC2, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            timestamp: payload.timestamp,
            studentName: payload.studentName,
            variant: payload.variant,
            score: payload.scores.total,
            t1: payload.scores.t1,
            t2: payload.scores.t2,
            t3: payload.scores.t3,
            t4: payload.scores.t4,
            t5: payload.scores.t5,
            detailsJSON: JSON.stringify(payload.details),
            rawToken: token
        })
    }).then(() => {
        if (typeof notify === 'function') {
            notify(currentLang === 'en' ? "Exam recorded in Professor's Gradebook!" : "Работа успешно записана в журнал!");
        }
    }).catch(err => {
        console.error("Sync Error:", err);
    });
}

// ==========================================
// 4. РАСШИФРОВКА ТОКЕНА В ПАНЕЛИ ПРЕПОДАВАТЕЛЯ
// ==========================================
function decryptAndScoreTokenMC2() {
    const rawToken = document.getElementById('prof-token-input').value.trim();
    if (!rawToken.startsWith("MC2PE2026-")) {
        if (typeof notify === 'function') {
            notify(currentLang === 'en' ? "Invalid MC2 token format!" : "Неверный формат токена РК-2!", true);
        }
        return;
    }

    try {
        const base64Data = rawToken.replace("MC2PE2026-", "");
        const jsonStr = decodeURIComponent(atob(base64Data));
        const data = JSON.parse(jsonStr);

        document.getElementById('dec-student').innerText = data.studentName;
        document.getElementById('dec-variant').innerText = `Variant #${data.variant}`;
        document.getElementById('dec-score').innerText = `${data.scores.total} / 100`;

        const breakdownEl = document.getElementById('dec-breakdown');
        if (breakdownEl) {
            breakdownEl.innerHTML = `
                <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center font-mono text-xs mt-2">
                    <div class="bg-slate-900 p-2 rounded border border-slate-700"><span class="text-slate-400 block text-[10px]">Task 1 (Theory)</span><strong class="text-cyan-400">${data.scores.t1} / 20</strong></div>
                    <div class="bg-slate-900 p-2 rounded border border-slate-700"><span class="text-slate-400 block text-[10px]">Task 2 (GDP)</span><strong class="text-cyan-400">${data.scores.t2} / 20</strong></div>
                    <div class="bg-slate-900 p-2 rounded border border-slate-700"><span class="text-slate-400 block text-[10px]">Task 3 (Keynes)</span><strong class="text-cyan-400">${data.scores.t3} / 20</strong></div>
                    <div class="bg-slate-900 p-2 rounded border border-slate-700"><span class="text-slate-400 block text-[10px]">Task 4 (MV=PY)</span><strong class="text-cyan-400">${data.scores.t4} / 20</strong></div>
                    <div class="bg-slate-900 p-2 rounded border border-slate-700"><span class="text-slate-400 block text-[10px]">Task 5 (Labor)</span><strong class="text-cyan-400">${data.scores.t5} / 20</strong></div>
                </div>
                <pre class="mt-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-300 overflow-x-auto max-h-60">${JSON.stringify(data.details, null, 2)}</pre>
            `;
        }

        const out = document.getElementById('grade-panel-output');
        if (out) out.classList.remove('hidden');

        if (typeof notify === 'function') {
            notify(currentLang === 'en' ? "Session decrypted!" : "Сессия расшифрована!");
        }
    } catch (e) {
        if (typeof notify === 'function') {
            notify(currentLang === 'en' ? "Failed to parse token!" : "Ошибка расшифровки токена!", true);
        }
    }
}
