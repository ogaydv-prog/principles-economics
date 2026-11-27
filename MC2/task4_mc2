/* ==========================================
   MIDTERM CONTROL 2 • TASK 4: QUANTITY THEORY OF MONEY & AD CURVE (FISHER)
   AlmaU SDTE 2026 • Principles of Economics
   21 Students • Personalized Parameters + Interactive AD Hyperbola & Y Sliders
   Bilingual (EN/RU) • No Hints • Individual Input Boxes for (a), (b), (c), (d)
   ========================================== */

let mc2QTMChart = null;
const mc2Task4State = {};

// Генератор персональных параметров уравнения обмена MV = PY для каждого из 21 студента
// Все целевые значения M_stable и M_target гарантированно кратны 0.5, а Y1 кратно 10 — точно выставляются на слайдерах!
function getStudentQTMDataMC2(studentIdx) {
    const s = studentIdx + 1;

    // 1. Исходная денежная масса M0 (кратна 50)
    const M0 = 400 + ((studentIdx % 7) * 50); // 400, 450, 500, 550, 600, 650, 700

    // 2. Скорость обращения денег V (целое число, кратное 2)
    const V = 14 + (Math.floor(studentIdx / 3) * 2); // 14, 16, 18, 20, 22, 24, 26

    // 3. Номинальный ВВП текущего года PY0 = M0 * V
    const nomGDP0 = M0 * V;

    // 4. Исходный уровень цен P0 (1.5, 2.0, 2.5)
    const p0Options = [1.5, 2.0, 2.5];
    const P0 = p0Options[studentIdx % 3];

    // 5. Реальный ВВП текущего года Y0 = PY0 / P0
    // Проверяем кратность: если M0*V не делится на P0 нацело с красивым Y0, корректируем M0
    // (400..700 кратно 50, V кратно 2 => M0*V кратно 100; при P0=2.5: 100/2.5 = 40; при P0=1.5: берём M0 кратное 150)
    let cleanM0 = M0;
    if (P0 === 1.5 && (cleanM0 * V) % 3 !== 0) {
        cleanM0 = 450 + ((studentIdx % 3) * 150); // 450, 600, 750
    }
    const cleanNomGDP0 = cleanM0 * V;
    const Y0 = Number((cleanNomGDP0 / P0).toFixed(2));

    // 6. Темп роста реального ВВП gY (%) и целевая инфляция piTarget (%)
    // Выбираем так, чтобы M_stable = M0 * (1 + gY) и M_target = M_stable * (1 + piTarget) были кратны 0.5!
    const growthOptions = [4, 5, 6, 8, 10];
    const gY = growthOptions[studentIdx % growthOptions.length];

    const inflationOptions = [5, 10];
    const piTarget = inflationOptions[(studentIdx + 1) % inflationOptions.length];

    // Точные эталонные ответы для автопроверки
    const Y1 = Number((Y0 * (1 + gY / 100)).toFixed(2));
    const nomGDP1_constM = cleanNomGDP0; // Номинальный ВВП не изменяется при M = const, V = const
    const P1_constM = Number((cleanNomGDP0 / Y1).toFixed(4)); // Уровень цен снижается: P1 = PY0 / Y1
    const M_stable = Number((cleanM0 * (1 + gY / 100)).toFixed(2)); // Чтобы P1 = P0 (инфляция 0%)
    const P_target = Number((P0 * (1 + piTarget / 100)).toFixed(4));
    const M_target = Number((M_stable * (1 + piTarget / 100)).toFixed(2)); // Чтобы инфляция = piTarget%

    return {
        M0: cleanM0,
        V,
        nomGDP0: cleanNomGDP0,
        P0,
        Y0,
        gY,
        piTarget,
        Y1,
        nomGDP1_constM,
        P1_constM,
        M_stable,
        P_target,
        M_target
    };
}

function renderTask4MC2(studentIdx, lang) {
    const container = document.getElementById('task4-container');
    if (!container) return;

    const d = getStudentQTMDataMC2(studentIdx);
    const isEn = lang === 'en';
    const unit = isEn ? 'B' : 'млрд';

    if (!mc2Task4State[studentIdx]) {
        mc2Task4State[studentIdx] = {
            sliderM: d.M0,
            sliderY: d.Y0,
            ansP0: '',
            ansV: '',
            ansNomGDPText: '',
            ansP1: '',
            ansMStable: '',
            ansMTarget: ''
        };
    }
    const st = mc2Task4State[studentIdx];

    const title = isEn
        ? 'Task 4: Quantity Theory of Money, AD Curve & Central Bank Inflation Targeting'
        : 'Задание 4: Количественная теория денег, кривая AD и таргетирование инфляции';

    const conditionHTML = isEn ? `
        <div class="space-y-3 text-xs md:text-sm text-slate-200 leading-relaxed">
            <p class="font-semibold text-cyan-300">Monetary & Macroeconomic Data (Variant #${studentIdx + 1}):</p>
            <p class="text-slate-300">
                In the current year, the money supply in the economy is <span class="text-white font-mono font-bold">M = $${d.M0} ${unit}</span>, Nominal GDP equals <span class="text-white font-mono font-bold">$${d.nomGDP0.toLocaleString()} ${unit}</span>, and Real GDP equals <span class="text-white font-mono font-bold">Y = $${d.Y0.toLocaleString()} ${unit}</span>.
                Forecasts for next year indicate that the velocity of money will remain constant (<span class="text-cyan-300 font-mono font-bold">V = const</span>), while Real GDP will grow by <span class="text-emerald-300 font-mono font-bold">${d.gY}%</span>.
            </p>
            <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-xs text-slate-400">
                <i class="fas fa-chart-line text-cyan-400 mr-1.5"></i>
                <strong>Interactive Graph Instructions:</strong> Use the sliders below to shift the Aggregate Demand hyperbola <code class="text-cyan-300">AD (M × V = P × Y)</code> and the vertical Real Output line <code class="text-emerald-300">Y</code>. Observe how the intersection point <code class="text-amber-300">(Y, P)</code> changes on the graph, perform your calculations, and fill in all answer boxes (a)–(d).
            </div>
        </div>
    ` : `
        <div class="space-y-3 text-xs md:text-sm text-slate-200 leading-relaxed">
            <p class="font-semibold text-cyan-300">Исходные макроэкономические данные (Вариант №${studentIdx + 1}):</p>
            <p class="text-slate-300">
                В текущем году денежная масса в экономике составляет <span class="text-white font-mono font-bold">M = $${d.M0} ${unit}</span>, Номинальный ВВП равен <span class="text-white font-mono font-bold">$${d.nomGDP0.toLocaleString()} ${unit}</span>, а Реальный ВВП составляет <span class="text-white font-mono font-bold">Y = $${d.Y0.toLocaleString()} ${unit}</span>.
                По прогнозу на следующий год скорость обращения денег останется неизменной (<span class="text-cyan-300 font-mono font-bold">V = const</span>), а Реальный ВВП вырастет на <span class="text-emerald-300 font-mono font-bold">${d.gY}%</span>.
            </p>
            <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-xs text-slate-400">
                <i class="fas fa-chart-line text-cyan-400 mr-1.5"></i>
                <strong>Инструкция к графику:</strong> Используйте ползунки ниже, чтобы сдвигать гиперболу совокупного спроса <code class="text-cyan-300">AD (M × V = P × Y)</code> и вертикаль реального выпуска <code class="text-emerald-300">Y</code>. Наблюдайте за изменением точки пересечения <code class="text-amber-300">(Y, P)</code> на графике, выполните расчёты и заполните все поля ответов в пунктах (a)–(d).
            </div>
        </div>
    `;

    container.innerHTML = `
        <div class="space-y-6">
            <!-- Header & Problem Statement -->
            <div class="card p-6 border-t-2 border-cyan-500 space-y-4">
                <div class="flex flex-wrap justify-between items-center gap-3">
                    <span class="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md border border-cyan-500/20 uppercase font-black tracking-widest">
                        ${isEn ? 'Task 4 • Quantity Theory of Money (Fisher)' : 'Задание 4 • Количественная теория денег (И. Фишер)'}
                    </span>
                    <span class="text-xs font-mono text-slate-400">
                        M × V = P × Y
                    </span>
                </div>
                <h3 class="text-lg md:text-xl font-bold text-white">${title}</h3>
                ${conditionHTML}
            </div>

            <!-- Interactive Workspace -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                
                <!-- Left Column: Interactive Sliders & Answer Boxes (a)-(d) (6 cols) -->
                <div class="xl:col-span-6 space-y-4">
                    
                    <!-- Sliders Control Card -->
                    <div class="card p-5 space-y-3.5">
                        <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                                ${isEn ? 'AD Curve & Real Output Sliders' : 'Управление кривой AD и выпуском Y'}
                            </span>
                            <button onclick="resetTask4Sliders()" class="text-xs text-slate-400 hover:text-rose-400 underline">
                                ${isEn ? 'Reset to Base Year' : 'Вернуть к базовому году'}
                            </button>
                        </div>

                        <!-- Slider 1: Money Supply M -->
                        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800 space-y-1.5">
                            <div class="flex justify-between text-xs font-semibold">
                                <span class="text-slate-300">${isEn ? 'Money Supply M (shifts AD curve):' : 'Денежная масса M (сдвиг кривой AD):'}</span>
                                <span id="t4-val-m" class="font-mono font-bold text-cyan-400">$${st.sliderM} ${unit}</span>
                            </div>
                            <input type="range" id="t4-slide-m" min="200" max="1200" step="0.5" value="${st.sliderM}" oninput="updateTask4Chart()" class="w-full accent-cyan-500 cursor-pointer">
                        </div>

                        <!-- Slider 2: Real Output Y -->
                        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800 space-y-1.5">
                            <div class="flex justify-between text-xs font-semibold">
                                <span class="text-slate-300">${isEn ? 'Real GDP Y (shifts vertical Y line):' : 'Реальный ВВП Y (сдвиг вертикали Y):'}</span>
                                <span id="t4-val-y" class="font-mono font-bold text-emerald-400">$${st.sliderY} ${unit}</span>
                            </div>
                            <input type="range" id="t4-slide-y" min="2000" max="10000" step="5" value="${st.sliderY}" oninput="updateTask4Chart()" class="w-full accent-emerald-500 cursor-pointer">
                        </div>

                        <!-- Live Graph Intersection Readout -->
                        <div class="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
                            <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                                <span class="text-[10px] text-slate-400 uppercase block">${isEn ? 'Nominal GDP (M×V)' : 'Номинальный ВВП'}</span>
                                <span id="t4-read-py" class="text-sm font-black text-white">$${d.nomGDP0.toLocaleString()}</span>
                            </div>
                            <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                                <span class="text-[10px] text-slate-400 uppercase block">${isEn ? 'Price Level (P)' : 'Уровень цен (P)'}</span>
                                <span id="t4-read-p" class="text-sm font-black text-amber-400">${d.P0.toFixed(2)}</span>
                            </div>
                            <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                                <span class="text-[10px] text-slate-400 uppercase block">${isEn ? 'Price Change vs P₀' : 'Изменение P к P₀'}</span>
                                <span id="t4-read-inf" class="text-sm font-black text-cyan-400">0.00%</span>
                            </div>
                        </div>
                    </div>

                    <!-- Questions (a), (b), (c), (d) Input Fields -->
                    <div class="card p-5 space-y-4 border-t-2 border-amber-500">
                        <h4 class="text-xs font-black uppercase tracking-wider text-amber-300">
                            ${isEn ? 'Answer Boxes (a) – (d)' : 'Поля ответов по пунктам (a) – (d)'}
                        </h4>

                        <!-- Question (a) -->
                        <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                            <p class="text-xs font-semibold text-slate-200">
                                ${isEn
                                    ? 'a) Calculate the current Price Level (P₀) and Velocity of Money (V):'
                                    : 'a) Определите текущий уровень цен (P₀) и скорость обращения денег (V):'}
                            </p>
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="text-[11px] text-slate-400 block mb-1">P₀ =</label>
                                    <input type="number" step="0.01" id="t4-ans-p0" value="${st.ansP0}" oninput="saveTask4Field('ansP0', this.value)"
                                           placeholder="P₀" class="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg px-3 py-2 text-xs font-mono font-bold text-white outline-none">
                                </div>
                                <div>
                                    <label class="text-[11px] text-slate-400 block mb-1">V =</label>
                                    <input type="number" step="0.1" id="t4-ans-v" value="${st.ansV}" oninput="saveTask4Field('ansV', this.value)"
                                           placeholder="V" class="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg px-3 py-2 text-xs font-mono font-bold text-white outline-none">
                                </div>
                            </div>
                        </div>

                        <!-- Question (b) -->
                        <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
                            <p class="text-xs font-semibold text-slate-200">
                                ${isEn
                                    ? `b) Next year, V = const, Real GDP grows by ${d.gY}%, and Money Supply remains unchanged (M = $${d.M0} ${unit}). How will Nominal GDP change, and what will the new Price Level (P₁) be?`
                                    : `b) В следующем году V = const, Реальный ВВП вырастет на ${d.gY}%, а денежная масса не изменится (M = $${d.M0} ${unit}). Как изменится номинальный ВВП и чему станет равен новый уровень цен (P₁)?`}
                            </p>
                            <div class="space-y-2">
                                <div>
                                    <label class="text-[11px] text-slate-400 block mb-1">
                                        ${isEn ? 'How will Nominal GDP change? (explain in words/numbers):' : 'Как изменится номинальный ВВП? (впишите вывод словами или цифрами):'}
                                    </label>
                                    <input type="text" id="t4-ans-nomgdp-text" value="${st.ansNomGDPText}" oninput="saveTask4Field('ansNomGDPText', this.value)"
                                           placeholder="${isEn ? 'Write how Nominal GDP changes...' : 'Напишите, как изменится номинальный ВВП...'}"
                                           class="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg px-3 py-2 text-xs text-white outline-none">
                                </div>
                                <div>
                                    <label class="text-[11px] text-slate-400 block mb-1">
                                        ${isEn ? 'New Price Level (P₁):' : 'Новый уровень цен (P₁):'}
                                    </label>
                                    <input type="number" step="0.01" id="t4-ans-p1" value="${st.ansP1}" oninput="saveTask4Field('ansP1', this.value)"
                                           placeholder="P₁" class="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg px-3 py-2 text-xs font-mono font-bold text-white outline-none">
                                </div>
                            </div>
                        </div>

                        <!-- Question (c) -->
                        <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                            <p class="text-xs font-semibold text-slate-200">
                                ${isEn
                                    ? `c) What Money Supply (M) must the Central Bank provide next year (at ${d.gY}% real GDP growth) to keep the Price Level unchanged (0% inflation)?`
                                    : `c) Какое предложение денег (M) должен обеспечить Центральный банк в следующем году (при росте реального ВВП на ${d.gY}%), чтобы уровень цен остался неизменным (инфляция 0%)?`}
                            </p>
                            <input type="number" step="0.1" id="t4-ans-mstable" value="${st.ansMStable}" oninput="saveTask4Field('ansMStable', this.value)"
                                   placeholder="${isEn ? 'M ($ B)' : 'M ($ млрд)'}"
                                   class="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg px-3 py-2 text-xs font-mono font-bold text-white outline-none">
                        </div>

                        <!-- Question (d) -->
                        <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                            <p class="text-xs font-semibold text-slate-200">
                                ${isEn
                                    ? `d) What Money Supply (M) must the Central Bank set next year if the inflation target is ${d.piTarget}%?`
                                    : `d) Какое предложение денег (M) должен установить Центральный банк в следующем году, если целевая инфляция составляет ${d.piTarget}%?`}
                            </p>
                            <input type="number" step="0.1" id="t4-ans-mtarget" value="${st.ansMTarget}" oninput="saveTask4Field('ansMTarget', this.value)"
                                   placeholder="${isEn ? 'M ($ B)' : 'M ($ млрд)'}"
                                   class="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-lg px-3 py-2 text-xs font-mono font-bold text-white outline-none">
                        </div>

                    </div>
                </div>

                <!-- Right Column: Fisher AD Hyperbola & Real Output Graph (6 cols) -->
                <div class="xl:col-span-6 flex flex-col items-center justify-center sticky top-24">
                    <div class="w-full bg-white rounded-2xl p-4 border border-slate-300 shadow-2xl">
                        <div class="flex justify-between items-center mb-2 px-1">
                            <span class="text-[11px] font-mono font-bold uppercase text-slate-600">
                                ${isEn ? 'Aggregate Demand Curve: Y = (M × V) / P' : 'Кривая совокупного спроса: Y = (M × V) / P'}
                            </span>
                            <span id="t4-graph-badge" class="text-xs font-mono font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded">
                                E (Y = ${st.sliderY}, P = ${d.P0.toFixed(2)})
                            </span>
                        </div>
                        <div class="w-full h-[460px] relative">
                            <canvas id="mc2QTMCanvas"></canvas>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    initTask4ChartMC2(studentIdx);
}

function saveTask4Field(field, val) {
    if (typeof currentStudentIdx !== 'undefined' && currentStudentIdx !== -1 && mc2Task4State[currentStudentIdx]) {
        mc2Task4State[currentStudentIdx][field] = val;
    }
}

function resetTask4Sliders() {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) return;
    const d = getStudentQTMDataMC2(currentStudentIdx);
    mc2Task4State[currentStudentIdx].sliderM = d.M0;
    mc2Task4State[currentStudentIdx].sliderY = d.Y0;
    const mEl = document.getElementById('t4-slide-m');
    const yEl = document.getElementById('t4-slide-y');
    if (mEl) mEl.value = d.M0;
    if (yEl) yEl.value = d.Y0;
    updateTask4Chart();
}

function initTask4ChartMC2(studentIdx) {
    const canvas = document.getElementById('mc2QTMCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (mc2QTMChart) {
        mc2QTMChart.destroy();
    }

    const isEn = currentLang === 'en';
    mc2QTMChart = new Chart(ctx, {
        type: 'line',
        data: { datasets: [] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    type: 'linear',
                    min: 0,
                    max: 10000,
                    title: {
                        display: true,
                        text: isEn ? 'Real GDP, Y ($ B)' : 'Реальный ВВП, Y ($ млрд)',
                        color: '#111827',
                        font: { size: 12, weight: 'bold' }
                    },
                    ticks: { color: '#111827', font: { weight: 'bold' }, stepSize: 1000 },
                    grid: { color: '#e5e7eb' }
                },
                y: {
                    type: 'linear',
                    min: 0,
                    max: 4.0,
                    title: {
                        display: true,
                        text: isEn ? 'Price Level, P' : 'Уровень цен, P',
                        color: '#111827',
                        font: { size: 12, weight: 'bold' }
                    },
                    ticks: { color: '#111827', font: { weight: 'bold' }, stepSize: 0.5 },
                    grid: { color: '#e5e7eb' }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: { color: '#111827', font: { size: 11, weight: 'bold' } }
                }
            }
        }
    });

    updateTask4Chart();
}

function updateTask4Chart() {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1 || !mc2QTMChart) return;
    const d = getStudentQTMDataMC2(currentStudentIdx);
    const isEn = currentLang === 'en';
    const unit = isEn ? 'B' : 'млрд';

    const curM = parseFloat(document.getElementById('t4-slide-m').value);
    const curY = parseFloat(document.getElementById('t4-slide-y').value);

    mc2Task4State[currentStudentIdx].sliderM = curM;
    mc2Task4State[currentStudentIdx].sliderY = curY;

    document.getElementById('t4-val-m').innerText = `$${curM} ${unit}`;
    document.getElementById('t4-val-y').innerText = `$${curY.toLocaleString()} ${unit}`;

    // Используем истинную скорость обращения V из условия задачи
    const V = d.V;
    const basePY = d.M0 * V;
    const curPY = curM * V;
    const curP = curPY / curY;
    const infPct = ((curP - d.P0) / d.P0) * 100;

    document.getElementById('t4-read-py').innerText = `$${Math.round(curPY).toLocaleString()}`;
    document.getElementById('t4-read-p').innerText = curP.toFixed(3);
    const infEl = document.getElementById('t4-read-inf');
    infEl.innerText = `${infPct >= 0 ? '+' : ''}${infPct.toFixed(2)}%`;
    infEl.className = Math.abs(infPct) < 0.05
        ? 'text-sm font-black text-emerald-400'
        : (infPct > 0 ? 'text-sm font-black text-amber-400' : 'text-sm font-black text-cyan-400');

    document.getElementById('t4-graph-badge').innerText = `E (Y = ${curY}, P = ${curP.toFixed(2)})`;

    // Построение гиперболы AD0 (базовой, пунктирной) и AD1 (текущей, сплошной)
    const maxAxisX = Math.max(10000, Math.ceil((curY * 1.25) / 1000) * 1000);
    const maxAxisY = Math.max(4.0, Math.ceil((curP * 1.3) * 2) / 2);

    mc2QTMChart.options.scales.x.max = maxAxisX;
    mc2QTMChart.options.scales.y.max = maxAxisY;

    const ad0Pts = [];
    const ad1Pts = [];
    for (let p = 0.25; p <= maxAxisY; p += 0.05) {
        const y0 = basePY / p;
        if (y0 <= maxAxisX) ad0Pts.push({ x: y0, y: p });

        const y1 = curPY / p;
        if (y1 <= maxAxisX) ad1Pts.push({ x: y1, y: p });
    }

    mc2QTMChart.data.datasets = [
        {
            label: isEn ? 'Base AD₀ (M₀)' : 'Базовая AD₀ (M₀)',
            data: ad0Pts,
            borderColor: '#94a3b8',
            borderWidth: 2,
            borderDash: [6, 5],
            pointRadius: 0,
            tension: 0.25
        },
        {
            label: isEn ? 'Active AD (M)' : 'Текущая AD (M)',
            data: ad1Pts,
            borderColor: '#0284c7',
            borderWidth: 3,
            pointRadius: 0,
            tension: 0.25
        },
        {
            label: isEn ? 'Real GDP (Y)' : 'Реальный ВВП (Y)',
            data: [{ x: curY, y: 0 }, { x: curY, y: maxAxisY }],
            borderColor: '#059669',
            borderWidth: 2.5,
            pointRadius: 0
        },
        {
            label: isEn ? 'Projection P' : 'Проекция уровня цен P',
            data: [{ x: 0, y: curP }, { x: curY, y: curP }],
            borderColor: '#d97706',
            borderWidth: 1.5,
            borderDash: [5, 5],
            pointRadius: 0
        },
        {
            label: isEn ? 'Base Point E₀' : 'Базовая точка E₀',
            data: [{ x: d.Y0, y: d.P0 }],
            backgroundColor: '#64748b',
            borderColor: '#ffffff',
            borderWidth: 2,
            pointRadius: 5
        },
        {
            label: isEn ? 'Current Point E' : 'Текущая точка E',
            data: [{ x: curY, y: curP }],
            backgroundColor: '#f59e0b',
            borderColor: '#111827',
            borderWidth: 2,
            pointRadius: 7
        }
    ];

    mc2QTMChart.update();
}
