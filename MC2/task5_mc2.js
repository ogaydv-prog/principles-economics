/* ==========================================
   MIDTERM CONTROL 2 • TASK 5: LABOR MARKET, POPULATION CLASSIFICATION & UNEMPLOYMENT RATE
   AlmaU SDTE 2026 • Principles of Economics
   21 Students • Personalized Population Groups + Interactive Stacked Bar & Unemployment Input
   Bilingual (EN/RU) • Auto-Grader
   ========================================== */

const mc2Task5State = {};

// Генератор персональных данных по 9 группам населения (в млн чел.) для каждого из 21 студента
function getStudentLaborDataMC2(studentIdx) {
    // 1. Занятые (E): владельцы бизнеса / самозанятые + работающие по найму
    const selfEmployed = Number((14.0 + ((studentIdx % 7) * 0.8)).toFixed(1));       // 14.0 .. 18.8 M
    const companyWorkers = Number((138.0 + ((studentIdx % 5) * 2.4)).toFixed(1));    // 138.0 .. 147.6 M

    // 2. Безработные (U): безработные, активно ищущие работу
    const activeUnemployed = Number((6.4 + ((studentIdx % 6) * 0.5)).toFixed(1));    // 6.4 .. 8.9 M

    // 3. Вне рабочей силы (NILF): отчаявшиеся, домохозяйки/домохозяева, пенсионеры
    const discouraged = Number((1.2 + ((studentIdx % 4) * 0.3)).toFixed(1));         // 1.2 .. 2.1 M
    const homemakers = Number((28.0 + ((studentIdx % 5) * 1.1)).toFixed(1));         // 28.0 .. 32.4 M
    const retirees = Number((54.0 + ((studentIdx % 6) * 1.5)).toFixed(1));           // 54.0 .. 61.5 M

    // 4. Вне обследуемой совокупности (OUT): военнослужащие, заключённые/спецучреждения, дети до 16 лет
    const military = Number((1.3 + ((studentIdx % 3) * 0.2)).toFixed(1));            // 1.3 .. 1.7 M
    const institutionalized = Number((2.1 + ((studentIdx % 4) * 0.2)).toFixed(1));   // 2.1 .. 2.7 M
    const childrenUnder16 = Number((61.0 + ((studentIdx % 5) * 1.2)).toFixed(1));    // 61.0 .. 65.8 M

    const groups = [
        {
            id: 'self_emp',
            val: selfEmployed,
            correctCat: 'E',
            ru: 'Владельцы собственного бизнеса и самозанятые',
            en: 'Business owners and self-employed'
        },
        {
            id: 'emp_workers',
            val: companyWorkers,
            correctCat: 'E',
            ru: 'Работающие по найму в компаниях и по контракту',
            en: 'Company employees and contract workers'
        },
        {
            id: 'unemp_active',
            val: activeUnemployed,
            correctCat: 'U',
            ru: 'Безработные, активно ищущие работу',
            en: 'Unemployed individuals actively seeking work'
        },
        {
            id: 'discouraged',
            val: discouraged,
            correctCat: 'NILF',
            ru: 'Отчаявшиеся работники, прекратившие поиск работы',
            en: 'Discouraged workers who stopped searching for jobs'
        },
        {
            id: 'homemakers',
            val: homemakers,
            correctCat: 'NILF',
            ru: 'Домохозяйки и домохозяева',
            en: 'Homemakers (housewives and househusbands)'
        },
        {
            id: 'retirees',
            val: retirees,
            correctCat: 'NILF',
            ru: 'Пенсионеры (на пенсии)',
            en: 'Retirees'
        },
        {
            id: 'military',
            val: military,
            correctCat: 'OUT',
            ru: 'Военнослужащие на действительной службе',
            en: 'Active-duty military personnel'
        },
        {
            id: 'institutionalized',
            val: institutionalized,
            correctCat: 'OUT',
            ru: 'Содержащиеся в местах заключения и спецучреждениях',
            en: 'Prisoners and institutionalized population'
        },
        {
            id: 'children',
            val: childrenUnder16,
            correctCat: 'OUT',
            ru: 'Дети младше 16 лет',
            en: 'Children under 16 years old'
        }
    ];

    // Детерминированное перемешивание порядка строк для каждого студента
    const order = [0, 3, 6, 1, 4, 7, 2, 5, 8];
    const shift = studentIdx % order.length;
    const rotatedOrder = order.slice(shift).concat(order.slice(0, shift));
    const shuffledGroups = rotatedOrder.map(idx => groups[idx]);

    const trueE = Number((selfEmployed + companyWorkers).toFixed(1));
    const trueU = activeUnemployed;
    const trueL = Number((trueE + trueU).toFixed(1));
    const trueNILF = Number((discouraged + homemakers + retirees).toFixed(1));
    const trueOUT = Number((military + institutionalized + childrenUnder16).toFixed(1));
    const trueTotalPop = Number((trueL + trueNILF + trueOUT).toFixed(1));
    const trueURate = Number(((trueU / trueL) * 100).toFixed(2));

    return {
        groups: shuffledGroups,
        trueE,
        trueU,
        trueL,
        trueNILF,
        trueOUT,
        trueTotalPop,
        trueURate
    };
}

function renderTask5MC2(studentIdx, lang) {
    const container = document.getElementById('task5-container');
    if (!container) return;

    const d = getStudentLaborDataMC2(studentIdx);
    const isEn = lang === 'en';
    const unit = isEn ? 'M' : 'млн';

    if (!mc2Task5State[studentIdx]) {
        const initSelections = {};
        d.groups.forEach(g => {
            initSelections[g.id] = '';
        });
        mc2Task5State[studentIdx] = {
            selections: initSelections,
            ansURate: ''
        };
    }
    const st = mc2Task5State[studentIdx];

    const title = isEn
        ? 'Task 5: Population Classification & Unemployment Rate Calculation'
        : 'Задание 5: Классификация групп населения и расчёт уровня безработицы';

    const conditionHTML = isEn ? `
        <div class="space-y-2.5 text-xs md:text-sm text-slate-200 leading-relaxed">
            <p class="font-semibold text-cyan-300">Demographic & Labor Market Data (Variant #${studentIdx + 1}, million people):</p>
            <p class="text-slate-300">
                Assign each population group below to its proper statistical category:
                <span class="text-emerald-400 font-bold">Employed (E)</span>,
                <span class="text-rose-400 font-bold">Unemployed (U)</span>,
                <span class="text-blue-400 font-bold">Not in Labor Force (NILF)</span>, or
                <span class="text-amber-400 font-bold">Outside Survey Universe (OUT)</span>.
                The stacked population chart on the right dynamically updates based on your classification. Then calculate and enter the resulting <strong>Unemployment Rate u (%)</strong>.
            </p>
        </div>
    ` : `
        <div class="space-y-2.5 text-xs md:text-sm text-slate-200 leading-relaxed">
            <p class="font-semibold text-cyan-300">Данные о структуре населения страны (Вариант №${studentIdx + 1}, млн чел.):</p>
            <p class="text-slate-300">
                Отнесите каждую из перечисленных групп населения к соответствующей статистической категории:
                <span class="text-emerald-400 font-bold">Занятые (E)</span>,
                <span class="text-rose-400 font-bold">Безработные (U)</span>,
                <span class="text-blue-400 font-bold">Вне рабочей силы (NILF)</span> или
                <span class="text-amber-400 font-bold">Вне обследуемой совокупности (OUT)</span>.
                Диаграмма состава населения справа автоматически перестраивается согласно вашему выбору. На основе сформированных категорий рассчитайте и впишите итоговый <strong>уровень безработицы u (%)</strong>.
            </p>
        </div>
    `;

    const rowsHTML = d.groups.map((g, idx) => {
        const curCat = st.selections[g.id] || '';
        const btnClass = (cat, activeBg) =>
            curCat === cat
                ? `${activeBg} text-slate-950 font-black border-transparent shadow-md`
                : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white';

        return `
            <div class="bg-slate-950/90 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div class="flex items-center justify-between sm:justify-start gap-3 flex-1">
                    <span class="text-xs font-mono text-slate-500 w-5">${idx + 1}.</span>
                    <span class="text-xs md:text-sm text-slate-200 font-medium">${isEn ? g.en : g.ru}</span>
                </div>
                <div class="flex items-center justify-between sm:justify-end gap-2 shrink-0">
                    <span class="font-mono text-xs md:text-sm font-bold text-white bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg min-w-[72px] text-right">
                        ${g.val.toFixed(1)} ${unit}
                    </span>
                    <div class="grid grid-cols-4 gap-1 font-mono text-[11px]" role="group">
                        <button type="button" onclick="selectTask5Category('${g.id}', 'E')"
                                title="${isEn ? 'Employed (E)' : 'Занятые (E)'}"
                                class="px-2 py-1.5 rounded-md border transition-all ${btnClass('E', 'bg-emerald-400')}">
                            E
                        </button>
                        <button type="button" onclick="selectTask5Category('${g.id}', 'U')"
                                title="${isEn ? 'Unemployed (U)' : 'Безработные (U)'}"
                                class="px-2 py-1.5 rounded-md border transition-all ${btnClass('U', 'bg-rose-400')}">
                            U
                        </button>
                        <button type="button" onclick="selectTask5Category('${g.id}', 'NILF')"
                                title="${isEn ? 'Not in Labor Force (NILF)' : 'Вне рабочей силы (NILF)'}"
                                class="px-2 py-1.5 rounded-md border transition-all ${btnClass('NILF', 'bg-blue-400')}">
                            NILF
                        </button>
                        <button type="button" onclick="selectTask5Category('${g.id}', 'OUT')"
                                title="${isEn ? 'Outside Survey Universe (OUT)' : 'Вне совокупности (OUT)'}"
                                class="px-2 py-1.5 rounded-md border transition-all ${btnClass('OUT', 'bg-amber-400')}">
                            OUT
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <style>
            .t5-brown-outside {
                background: repeating-linear-gradient(
                    45deg,
                    #4a2c2a,
                    #4a2c2a 10px,
                    #2d1918 10px,
                    #2d1918 20px
                );
            }
        </style>
        <div class="space-y-6">
            <!-- Header & Problem Statement -->
            <div class="card p-6 border-t-2 border-cyan-500 space-y-4">
                <div class="flex flex-wrap justify-between items-center gap-3">
                    <span class="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md border border-cyan-500/20 uppercase font-black tracking-widest">
                        ${isEn ? 'Task 5 • Labor Market & Unemployment (20 pts)' : 'Задание 5 • Рынок труда и безработица (20 баллов)'}
                    </span>
                    <span class="text-xs font-mono text-slate-400">
                        ${isEn ? 'Total Population:' : 'Общая численность населения:'} <strong class="text-white">${d.trueTotalPop.toFixed(1)} ${unit}</strong>
                    </span>
                </div>
                <h3 class="text-lg md:text-xl font-bold text-white">${title}</h3>
                ${conditionHTML}
            </div>

            <!-- Interactive Workspace -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                
                <!-- Left Column: 9 Population Groups Classification (7 cols) -->
                <div class="xl:col-span-7 card p-5 space-y-3">
                    <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                            ${isEn ? 'Population Groups Classification (E / U / NILF / OUT)' : 'Распределение групп населения (E / U / NILF / OUT)'}
                        </span>
                        <button type="button" onclick="resetTask5Selections()" class="text-xs text-slate-400 hover:text-rose-400 underline">
                            ${isEn ? 'Clear All' : 'Сбросить выбор'}
                        </button>
                    </div>
                    <div class="space-y-2">
                        ${rowsHTML}
                    </div>
                </div>

                <!-- Right Column: Stacked Population Bar & Unemployment Rate Answer Box (5 cols) -->
                <div class="xl:col-span-5 space-y-4 sticky top-24">
                    
                    <!-- White Stacked Bar Panel -->
                    <div class="bg-white rounded-2xl p-5 border border-slate-300 shadow-2xl text-slate-900 space-y-4">
                        <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span class="text-[11px] font-mono font-bold uppercase text-slate-600">
                                ${isEn ? 'Population Structure (Your Allocation)' : 'Состав населения (по вашему выбору)'}
                            </span>
                            <span id="t5-assigned-badge" class="text-[11px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                                0.0 / ${d.trueTotalPop.toFixed(1)} ${unit}
                            </span>
                        </div>

                        <div class="flex items-center justify-center gap-5 py-2">
                            <!-- Vertical Stacked Bar -->
                            <div class="w-36 h-[300px] rounded-xl overflow-hidden border-2 border-slate-600 bg-slate-100 flex flex-col justify-start shadow-xl">
                                <div id="t5-bar-e" class="bg-emerald-500 text-slate-950 text-[11px] font-mono font-black flex items-center justify-center border-b border-emerald-600 transition-all duration-300 overflow-hidden" style="height: 0%;"></div>
                                <div id="t5-bar-u" class="bg-rose-500 text-white text-[10px] font-mono font-black flex items-center justify-center border-b border-rose-400 transition-all duration-300 overflow-hidden" style="height: 0%;"></div>
                                <div id="t5-bar-nilf" class="bg-blue-600 text-white text-[11px] font-mono font-black flex items-center justify-center border-b border-blue-400 transition-all duration-300 overflow-hidden" style="height: 0%;"></div>
                                <div id="t5-bar-out" class="t5-brown-outside text-white text-[11px] font-mono font-black flex items-center justify-center transition-all duration-300 overflow-hidden" style="height: 0%;"></div>
                                <div id="t5-bar-unassigned" class="bg-slate-200 text-slate-500 text-[10px] font-mono font-bold flex items-center justify-center transition-all duration-300 overflow-hidden" style="height: 100%;">
                                    ${isEn ? 'Unassigned' : 'Не распределено'}
                                </div>
                            </div>

                            <!-- Curly Brace & Totals -->
                            <div class="flex items-center gap-2.5 h-[300px]">
                                <svg class="h-full w-7 text-slate-800 stroke-current shrink-0" viewBox="0 0 50 300" fill="none" preserveAspectRatio="none">
                                    <path d="M 10 5 C 25 5, 25 140, 40 150 C 25 160, 25 295, 10 295" stroke-width="4" stroke-linecap="round" fill="none"/>
                                </svg>
                                <div class="font-mono space-y-2">
                                    <div>
                                        <span class="text-[10px] uppercase text-slate-500 block font-bold">
                                            ${isEn ? 'Total Population:' : 'Всё население:'}
                                        </span>
                                        <div class="text-2xl font-black text-blue-950">${d.trueTotalPop.toFixed(1)} ${unit}</div>
                                    </div>
                                    <div class="text-[11px] space-y-1 pt-2 border-t border-slate-200">
                                        <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"></span> E: <strong id="t5-leg-e">0.0</strong></div>
                                        <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block"></span> U: <strong id="t5-leg-u">0.0</strong></div>
                                        <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block"></span> NILF: <strong id="t5-leg-nilf">0.0</strong></div>
                                        <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-[#4a2c2a] inline-block"></span> OUT: <strong id="t5-leg-out">0.0</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Live Group Sums (L = E + U) -->
                        <div class="p-3 bg-slate-100 rounded-lg border border-slate-300 font-mono text-xs text-slate-700 flex flex-wrap justify-between items-center gap-2">
                            <span>E = <strong id="t5-sum-e" class="text-emerald-700">0.0</strong> ${unit}</span>
                            <span>U = <strong id="t5-sum-u" class="text-rose-700">0.0</strong> ${unit}</span>
                            <span>L = E + U = <strong id="t5-sum-l" class="text-slate-950">0.0</strong> ${unit}</span>
                        </div>
                    </div>

                    <!-- Final Unemployment Rate Input Box -->
                    <div class="card p-5 border-t-2 border-amber-500 space-y-3">
                        <label for="t5-ans-urate" class="text-xs md:text-sm font-bold text-amber-300 block">
                            ${isEn
                                ? 'Calculated Unemployment Rate u (%) — enter your final answer:'
                                : 'Рассчитанный уровень безработицы u (%) — впишите итоговый ответ:'}
                        </label>
                        <div class="flex items-center gap-2">
                            <input type="number" step="0.01" id="t5-ans-urate" value="${st.ansURate}" oninput="saveTask5URate(this.value)"
                                   placeholder="${isEn ? 'e.g. 4.25' : 'например, 4.25'}"
                                   class="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm font-mono font-bold text-white outline-none">
                            <span class="font-mono font-black text-base text-slate-300">%</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;

    updateTask5BarMC2(studentIdx);
}

function selectTask5Category(groupId, cat) {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) return;
    if (!mc2Task5State[currentStudentIdx]) return;
    mc2Task5State[currentStudentIdx].selections[groupId] = cat;
    renderTask5MC2(currentStudentIdx, currentLang);
}

function resetTask5Selections() {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) return;
    const d = getStudentLaborDataMC2(currentStudentIdx);
    const cleared = {};
    d.groups.forEach(g => { cleared[g.id] = ''; });
    mc2Task5State[currentStudentIdx].selections = cleared;
    renderTask5MC2(currentStudentIdx, currentLang);
}

function saveTask5URate(val) {
    if (typeof currentStudentIdx !== 'undefined' && currentStudentIdx !== -1 && mc2Task5State[currentStudentIdx]) {
        mc2Task5State[currentStudentIdx].ansURate = val;
    }
}

function updateTask5BarMC2(studentIdx) {
    const d = getStudentLaborDataMC2(studentIdx);
    const st = mc2Task5State[studentIdx];
    const isEn = currentLang === 'en';
    const unit = isEn ? 'M' : 'млн';

    let sumE = 0, sumU = 0, sumNILF = 0, sumOUT = 0;
    d.groups.forEach(g => {
        const cat = st.selections[g.id];
        if (cat === 'E') sumE += g.val;
        else if (cat === 'U') sumU += g.val;
        else if (cat === 'NILF') sumNILF += g.val;
        else if (cat === 'OUT') sumOUT += g.val;
    });

    sumE = Number(sumE.toFixed(1));
    sumU = Number(sumU.toFixed(1));
    sumNILF = Number(sumNILF.toFixed(1));
    sumOUT = Number(sumOUT.toFixed(1));
    const assigned = Number((sumE + sumU + sumNILF + sumOUT).toFixed(1));
    const unassigned = Math.max(0, Number((d.trueTotalPop - assigned).toFixed(1)));
    const sumL = Number((sumE + sumU).toFixed(1));

    const total = d.trueTotalPop;
    const pct = v => (v / total) * 100;

    const barE = document.getElementById('t5-bar-e');
    const barU = document.getElementById('t5-bar-u');
    const barNILF = document.getElementById('t5-bar-nilf');
    const barOUT = document.getElementById('t5-bar-out');
    const barUn = document.getElementById('t5-bar-unassigned');

    if (barE) {
        barE.style.height = pct(sumE) + '%';
        barE.innerText = pct(sumE) >= 6 ? `${sumE.toFixed(1)}${unit}` : '';
    }
    if (barU) {
        barU.style.height = pct(sumU) + '%';
        barU.innerText = pct(sumU) >= 4.5 ? `${sumU.toFixed(1)}${unit}` : '';
    }
    if (barNILF) {
        barNILF.style.height = pct(sumNILF) + '%';
        barNILF.innerText = pct(sumNILF) >= 6 ? `${sumNILF.toFixed(1)}${unit}` : '';
    }
    if (barOUT) {
        barOUT.style.height = pct(sumOUT) + '%';
        barOUT.innerHTML = pct(sumOUT) >= 6
            ? `<span class="text-white font-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">${sumOUT.toFixed(1)}${unit}</span>`
            : '';
    }
    if (barUn) {
        barUn.style.height = pct(unassigned) + '%';
        barUn.innerText = pct(unassigned) >= 7 ? (isEn ? `Unassigned (${unassigned.toFixed(1)})` : `Остаток (${unassigned.toFixed(1)})`) : '';
    }

    const badge = document.getElementById('t5-assigned-badge');
    if (badge) badge.innerText = `${assigned.toFixed(1)} / ${total.toFixed(1)} ${unit}`;

    document.getElementById('t5-leg-e').innerText = `${sumE.toFixed(1)} ${unit}`;
    document.getElementById('t5-leg-u').innerText = `${sumU.toFixed(1)} ${unit}`;
    document.getElementById('t5-leg-nilf').innerText = `${sumNILF.toFixed(1)} ${unit}`;
    document.getElementById('t5-leg-out').innerText = `${sumOUT.toFixed(1)} ${unit}`;

    document.getElementById('t5-sum-e').innerText = sumE.toFixed(1);
    document.getElementById('t5-sum-u').innerText = sumU.toFixed(1);
    document.getElementById('t5-sum-l').innerText = sumL.toFixed(1);
}

// ==========================================
// ФУНКЦИЯ АВТОМАТИЧЕСКОЙ ОЦЕНКИ ЗАДАНИЯ 5 ДЛЯ ДВИЖКА
// ==========================================
function gradeTask5MC2(studentIdx) {
    const d = getStudentLaborDataMC2(studentIdx);
    const st = mc2Task5State[studentIdx] || { selections: {}, ansURate: '' };
    let correctGroups = 0;

    d.groups.forEach(g => {
        if (st.selections[g.id] === g.correctCat) {
            correctGroups++;
        }
    });

    const uVal = parseFloat(String(st.ansURate || '').replace(',', '.'));
    const uRateOk = !isNaN(uVal) && Math.abs(uVal - d.trueURate) <= 0.1;

    const groupScore = correctGroups * 1.5;
    const rateScore = uRateOk ? 6.5 : 0;
    const score = Number((groupScore + rateScore).toFixed(2));

    return {
        score,
        correctGroups,
        totalGroups: d.groups.length,
        uRateOk,
        studentURate: st.ansURate,
        expectedURate: d.trueURate,
        selections: { ...st.selections }
    };
}
