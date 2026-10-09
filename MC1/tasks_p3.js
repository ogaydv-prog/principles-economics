// ==========================================
// MIDTERM CONTROL 1 • MODULE FOR PART 3
// Computational Tasks & Cost Dynamics (10 Units)
// AlmaU SDTE 2026 • International Business
// ==========================================

let costChartInstance = null;

function renderTasksP3(seed, lang) {
    const container = document.getElementById('part3-container');
    if (!container) return;

    const k = seed + 1; // Вариантный множитель

    // Параметры Задачи 3.1
    const Q_cap = 4000 + k * 200;
    const P_eq = 12 + (k % 4);
    const expectedTR = Q_cap * P_eq;

    // Параметры Задачи 3.2
    const atc8 = 100 + k * 2;
    const mc9 = 20 + k * 3;
    const expectedATC9 = Number(((atc8 * 8 + mc9) / 9).toFixed(2));

    // Параметры Задачи 3.3
    const a = 95 + k * 2;
    const b = 2;
    const Q_val = 20 + k;
    const expectedMC = a - 2 * b * Q_val;

    // Параметры Задачи 3.4 (Таблица на 10 единиц)
    const FC = 60 + (k % 3) * 10;
    const vcArr = [
        0,
        30 + k,
        55 + k * 2,
        75 + k * 3,
        90 + k * 4,
        110 + k * 5,
        135 + k * 6,
        165 + k * 7,
        200 + k * 8,
        245 + k * 9,
        300 + k * 10
    ];
    const P_mkt = 45 + (k % 4) * 5;

    // Определение оптимального Q* где MR (P) >= MC
    let optQ = 1;
    for (let q = 1; q <= 10; q++) {
        let mc = vcArr[q] - vcArr[q - 1];
        if (mc <= P_mkt) optQ = q;
    }

    const t1Text = lang === 'en' ?
        `Market demand and supply functions reach equilibrium at price <span class="font-bold text-emerald-400">P = $${P_eq}</span>. Determine total revenue (TR) if the firm produces and sells <span class="font-bold text-indigo-400">${Q_cap} units</span> at equilibrium.` :
        `Функции спроса и предложения сходятся в равновесии при цене <span class="font-bold text-emerald-400">P = $${P_eq}</span>. Рассчитайте совокупную выручку (TR), если фирма реализует <span class="font-bold text-indigo-400">${Q_cap} единиц</span> по равновесной цене.`;

    const t2Text = lang === 'en' ?
        `Average total cost of 8 units is <span class="font-bold text-sky-400">$${atc8}</span>. Marginal cost of the 9th unit is <span class="font-bold text-emerald-400">$${mc9}</span>. Calculate average total cost (ATC) for 9 units.` :
        `Средние общие издержки производства 8 единиц равны <span class="font-bold text-sky-400">$${atc8}</span>. Предельные издержки 9-й единицы равны <span class="font-bold text-emerald-400">$${mc9}</span>. Рассчитайте ATC для 9 единиц.`;

    const t3Text = lang === 'en' ?
        `Total cost function is <span class="font-bold text-indigo-400">TC = ${a}Q - ${b}Q<sup>2</sup></span>. Calculate Marginal Cost (MC) at output <span class="font-bold text-amber-400">Q = ${Q_val}</span>.` :
        `Функция совокупных издержек имеет вид <span class="font-bold text-indigo-400">TC = ${a}Q - ${b}Q<sup>2</sup></span>. Рассчитайте предельные издержки (MC) при объеме <span class="font-bold text-amber-400">Q = ${Q_val}</span>.`;

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <!-- Task 3.1 -->
            <div class="card p-6 space-y-4">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">${lang === 'en' ? 'Task 3.1' : 'Задача 3.1'}</span>
                <h4 class="text-base font-bold text-slate-100">${lang === 'en' ? 'Equilibrium & Total Revenue' : 'Равновесие и Выручка'}</h4>
                <p class="text-sm text-slate-200 leading-relaxed">${t1Text}</p>
                <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-sm">
                    <label class="block text-slate-400 font-medium">${lang === 'en' ? 'Total Revenue (TR):' : 'Совокупная выручка (TR):'}</label>
                    <input type="number" id="ans-t1" data-expected="${expectedTR}" placeholder="TR" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                </div>
            </div>

            <!-- Task 3.2 -->
            <div class="card p-6 space-y-4">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">${lang === 'en' ? 'Task 3.2' : 'Задача 3.2'}</span>
                <h4 class="text-base font-bold text-slate-100">${lang === 'en' ? 'Average Cost Adjustment' : 'Средние издержки'}</h4>
                <p class="text-sm text-slate-200 leading-relaxed">${t2Text}</p>
                <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-sm">
                    <label class="block text-slate-400 font-medium">${lang === 'en' ? 'ATC for 9 units:' : 'ATC для 9 единиц:'}</label>
                    <input type="number" step="0.01" id="ans-t2" data-expected="${expectedATC9}" placeholder="ATC" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                </div>
            </div>

            <!-- Task 3.3 -->
            <div class="card p-6 space-y-4">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">${lang === 'en' ? 'Task 3.3' : 'Задача 3.3'}</span>
                <h4 class="text-base font-bold text-slate-100">${lang === 'en' ? 'Marginal Cost Function' : 'Предельные издержки'}</h4>
                <p class="text-sm text-slate-200 leading-relaxed">${t3Text}</p>
                <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-sm">
                    <label class="block text-slate-400 font-medium">${lang === 'en' ? 'Marginal Cost (MC):' : 'Предельные издержки (MC):'}</label>
                    <input type="number" step="0.01" id="ans-t3" data-expected="${expectedMC}" placeholder="MC" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                </div>
            </div>
        </div>

        <!-- Task 3.4: Extended 10-Unit Cost Schedule & Large Graph -->
        <div class="card p-6 space-y-5">
            <div class="border-b border-slate-800 pb-4 flex justify-between items-center flex-wrap gap-3">
                <div>
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block mb-1.5">${lang === 'en' ? 'Task 3.4' : 'Задача 3.4'}</span>
                    <h3 class="text-base md:text-lg font-bold text-slate-100">${lang === 'en' ? 'Full 10-Unit Short-Run Cost Dynamics' : 'Динамика издержек фирмы на 10 единиц выпуска'}</h3>
                </div>
                <span class="text-sm md:text-base text-indigo-300 font-bold bg-indigo-950/80 border border-indigo-700/80 px-4 py-2 rounded-xl">Market Price P = $${P_mkt}</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <!-- Extended 10-Row Table -->
                <div class="lg:col-span-7 space-y-4">
                    <p class="text-sm text-slate-200 font-medium leading-relaxed">${lang === 'en' ? 'Complete the cost matrix for output Q = 1 to 10:' : 'Заполните матрицу издержек для выпуска Q от 1 до 10:'}</p>
                    <div class="overflow-x-auto custom-scrollbar">
                        <table class="w-full text-sm text-center border-collapse border border-slate-800">
                            <thead>
                                <tr class="bg-slate-900/90 text-indigo-300 border-b border-slate-800 font-bold text-xs uppercase">
                                    <th class="p-2.5 border border-slate-800">Q</th>
                                    <th class="p-2.5 border border-slate-800">FC</th>
                                    <th class="p-2.5 border border-slate-800">VC</th>
                                    <th class="p-2.5 border border-slate-800 text-indigo-400">TC</th>
                                    <th class="p-2.5 border border-slate-800 text-slate-400">AFC</th>
                                    <th class="p-2.5 border border-slate-800 text-amber-400">AVC</th>
                                    <th class="p-2.5 border border-slate-800 text-sky-400">ATC</th>
                                    <th class="p-2.5 border border-slate-800 text-emerald-400">MC</th>
                                </tr>
                            </thead>
                            <tbody id="t4-tbody" class="font-mono text-sm">
                                ${generateTableRowsHTML(FC, vcArr)}
                            </tbody>
                        </table>
                    </div>
                    <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 text-sm">
                        <label class="block text-amber-400 font-bold text-sm md:text-base">${lang === 'en' ? 'Optimal Output Q* (where MR = MC):' : 'Оптимальный объем Q* (где MR = MC):'}</label>
                        <input type="number" id="ans-t4-q" data-expected="${optQ}" placeholder="Q*" class="w-full bg-slate-900 border border-slate-700 p-3 rounded-lg text-white font-mono text-base focus:border-indigo-500 outline-none">
                    </div>
                </div>

                <!-- Expanded High-Height Chart Column -->
                <div class="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
                    <div class="text-xs uppercase font-bold text-slate-300 tracking-wider flex justify-between items-center border-b border-slate-800 pb-2">
                        <span>${lang === 'en' ? 'Unit Cost Curves (10 Units)' : 'Кривые издержек на единицу (10 Единиц)'}</span>
                        <span class="text-emerald-400 font-mono text-xs"><i class="fas fa-chart-line mr-1"></i>Realtime Chart.js</span>
                    </div>
                    <div class="h-96 relative w-full">
                        <canvas id="costChartCanvas"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Слушатели ввода для обновления графика
    document.querySelectorAll('.t4-input').forEach(input => {
        input.addEventListener('input', updateCostChartFromTableInputs);
    });

    // Инициализация графика Chart.js
    setTimeout(() => init10UnitCostChart(FC, vcArr), 100);
}

function generateTableRowsHTML(FC, vcArr) {
    let html = '';
    for (let q = 1; q <= 10; q++) {
        html += `
            <tr class="border-b border-slate-800 hover:bg-slate-900/40 transition">
                <td class="p-2 border border-slate-800 font-bold text-white">${q}</td>
                <td class="p-2 border border-slate-800 text-slate-400">${FC}</td>
                <td class="p-2 border border-slate-800 text-slate-400">${vcArr[q]}</td>
                <td class="p-1.5 border border-slate-800"><input type="number" id="t4-tc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
                <td class="p-1.5 border border-slate-800"><input type="number" step="0.1" id="t4-afc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
                <td class="p-1.5 border border-slate-800"><input type="number" step="0.1" id="t4-avc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
                <td class="p-1.5 border border-slate-800"><input type="number" step="0.1" id="t4-atc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
                <td class="p-1.5 border border-slate-800"><input type="number" id="t4-mc-${q}" class="t4-input w-14 bg-slate-900 border border-slate-700 text-center text-white font-bold rounded p-1.5 focus:border-indigo-500 outline-none"></td>
            </tr>
        `;
    }
    return html;
}

function init10UnitCostChart(FC, vcArr) {
    const cvs = document.getElementById('costChartCanvas');
    if (!cvs) return;
    const ctx = cvs.getContext('2d');

    if (costChartInstance) costChartInstance.destroy();

    const labels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'];

    let afcData = [], avcData = [], atcData = [], mcData = [];
    for (let q = 1; q <= 10; q++) {
        afcData.push(Number((FC / q).toFixed(1)));
        avcData.push(Number((vcArr[q] / q).toFixed(1)));
        atcData.push(Number(((FC + vcArr[q]) / q).toFixed(1)));
        mcData.push(vcArr[q] - vcArr[q - 1]);
    }

    costChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { label: 'AFC', data: afcData, borderColor: '#94a3b8', borderWidth: 2, borderDash: [3, 3], pointRadius: 3, tension: 0.3 },
                { label: 'AVC', data: avcData, borderColor: '#f59e0b', borderWidth: 2.5, pointRadius: 4, tension: 0.3 },
                { label: 'ATC', data: atcData, borderColor: '#38bdf8', borderWidth: 2.5, pointRadius: 4, tension: 0.3 },
                { label: 'MC', data: mcData, borderColor: '#10b981', borderWidth: 3, pointRadius: 4.5, tension: 0.3 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, color: '#cbd5e1', font: { size: 11, weight: 'bold' } } }
            },
            scales: {
                x: { ticks: { color: '#94a3b8', font: { size: 11, weight: 'bold' } }, grid: { color: 'rgba(51, 65, 85, 0.3)' } },
                y: { ticks: { color: '#94a3b8', font: { size: 11, weight: 'bold' } }, grid: { color: 'rgba(51, 65, 85, 0.3)' } }
            }
        }
    });
}

function updateCostChartFromTableInputs() {
    if (!costChartInstance) return;
    let newAFC = [], newAVC = [], newATC = [], newMC = [];
    for (let q = 1; q <= 10; q++) {
        newAFC.push(parseFloat(document.getElementById(`t4-afc-${q}`)?.value) || null);
        newAVC.push(parseFloat(document.getElementById(`t4-avc-${q}`)?.value) || null);
        newATC.push(parseFloat(document.getElementById(`t4-atc-${q}`)?.value) || null);
        newMC.push(parseFloat(document.getElementById(`t4-mc-${q}`)?.value) || null);
    }
    costChartInstance.data.datasets[0].data = newAFC;
    costChartInstance.data.datasets[1].data = newAVC;
    costChartInstance.data.datasets[2].data = newATC;
    costChartInstance.data.datasets[3].data = newMC;
    costChartInstance.update();
}
