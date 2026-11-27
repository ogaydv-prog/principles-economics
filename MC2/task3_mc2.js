/* ==========================================
   MIDTERM CONTROL 2 • TASK 3: KEYNESIAN CROSS & AGGREGATE EXPENDITURES
   AlmaU SDTE 2026 • Principles of Economics
   21 Students • Personalized Masked Conditions + Sliders + Dual Axis Projections
   Bilingual (EN/RU) • Interactive Keynesian Cross Canvas
   ========================================== */

let mc2KeynesianChart = null;
const mc2Task3State = {};

// Генератор персональных параметров Кейнсианского креста для каждого из 21 студента
function getStudentKeynesDataMC2(studentIdx) {
    const s = studentIdx + 1;

    // 1. MPC и MPS: 21 уникальное значение от 0.50 до 0.90 (с шагом 0.02)
    // Индекс 0 -> MPC = 0.50 (MPS = 0.50, m = 2.00)
    // Индекс 20 -> MPC = 0.90 (MPS = 0.10, m = 10.00)
    const mpc = Number((0.50 + studentIdx * 0.02).toFixed(2));
    const mps = Number((1 - mpc).toFixed(2));
    const mpsCents = Math.round(mps * 100);
    const multiplier = 1 / (1 - mpc);

    // 2. Потребление: C = a + MPC * (Y - T)
    // Все величины кратны 5 для удобной работы со слайдерами
    const a = 200 + ((s * 25) % 250);             // Автономное потребление a (шаг 5)
    const taxes = 100 + ((s * 30) % 200);         // Общая сумма налогов T (шаг 5)

    // 3. Инвестиции: I_gross = I_net + Depreciation
    const netInv = 150 + ((s * 35) % 200);        // Чистые инвестиции (шаг 5)
    const depreciation = 50 + ((s * 15) % 100);   // Амортизация (шаг 5)
    const grossInv = netInv + depreciation;       // Валовые инвестиции I (шаг 5)

    // 4. Государственные закупки: G = G_total - Transfers
    const transfers = 80 + ((s * 20) % 120);      // Социальные трансферты и пенсии (шаг 5)
    const govPurchases = 180 + ((s * 25) % 170);  // Чистые госзакупки G (шаг 5)
    const govTotal = govPurchases + transfers;    // Общие бюджетные расходы (шаг 5)

    // 5. Чистый экспорт: NX = Exports - Imports (у половины положительный, у половины отрицательный)
    const exportsVal = 200 + ((s * 30) % 250);    // Экспорт X (шаг 5)
    const importsVal = (studentIdx % 2 === 0)
        ? exportsVal - (40 + ((s * 10) % 80))     // NX > 0 (шаг 5)
        : exportsVal + (40 + ((s * 10) % 80));    // NX < 0 (шаг 5)
    const netExports = exportsVal - importsVal;   // Чистый экспорт NX (шаг 5)

    // Итоговый автономный сдвиг и равновесный выпуск Y*
    // Y = a + MPC*(Y - T) + I + G + NX  =>  Y* = (a - MPC*T + I + G + NX) / (1 - MPC)
    const autonomousAE = Number((a - mpc * taxes + grossInv + govPurchases + netExports).toFixed(2));
    const exactYStar = Number((autonomousAE * multiplier).toFixed(2));

    return {
        mpc,
        mps,
        mpsCents,
        multiplier,
        a,
        taxes,
        netInv,
        depreciation,
        grossInv,
        govTotal,
        transfers,
        govPurchases,
        exportsVal,
        importsVal,
        netExports,
        autonomousAE,
        exactYStar
    };
}

// Плагин отрисовки угла 45°, точки пересечения E и подписей проекций на обеих осях (Y и Y_ad)
const mc2KeynesianCrossPlugin = {
    id: 'mc2KeynesianCrossPlugin',
    afterLayout(chart) {
        const ca = chart.chartArea;
        if (!ca || ca.width <= 0 || ca.height <= 0) return;
        const plotW = ca.right - ca.left;
        const plotH = ca.bottom - ca.top;
        if (Math.abs(plotW - plotH) > 2) {
            const padLeft = ca.left;
            const padRight = chart.width - ca.right;
            const padTop = ca.top;
            const padBottom = chart.height - ca.bottom;
            const targetAspect = (plotW + padLeft + padRight) / (plotW + padTop + padBottom);
            if (Math.abs(chart.options.aspectRatio - targetAspect) > 0.005) {
                chart.options.aspectRatio = targetAspect;
                requestAnimationFrame(() => chart.resize());
            }
        }
    },
    afterDatasetsDraw(chart) {
        const { ctx, chartArea: { left, bottom, top, right } } = chart;
        const datasetMeta = chart.getDatasetMeta(0);
        if (!datasetMeta || !datasetMeta.data || datasetMeta.data.length < 2) return;

        const endPoint = datasetMeta.data[1];
        const dx = endPoint.x - left;
        const dy = endPoint.y - bottom;
        const lineAngle = Math.atan2(dy, dx);

        ctx.save();
        const radius = 42;
        ctx.beginPath();
        ctx.arc(left, bottom, radius, 0, lineAngle, true);
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(left, bottom);
        ctx.arc(left, bottom, radius, 0, lineAngle, true);
        ctx.closePath();
        ctx.fillStyle = 'rgba(220, 38, 38, 0.14)';
        ctx.fill();

        const textAngle = lineAngle / 2;
        ctx.fillStyle = '#dc2626';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('45°', left + Math.cos(textAngle) * (radius + 14), bottom + Math.sin(textAngle) * (radius + 14));

        // Точка пересечения E и одинаковые числовые метки проекций на вертикальной (Y_ad) и горизонтальной (Y) осях
        const eqMeta = chart.getDatasetMeta(chart.data.datasets.length - 1);
        if (eqMeta && eqMeta.data && eqMeta.data.length > 0 && chart.data.datasets[chart.data.datasets.length - 1].isEquilibriumPoint) {
            const eqPoint = eqMeta.data[0];
            const eqVal = chart.data.datasets[chart.data.datasets.length - 1].data[0].x;
            if (eqPoint && eqPoint.x && eqPoint.y) {
                // Подсветка точки пересечения E
                ctx.beginPath();
                ctx.arc(eqPoint.x, eqPoint.y, 13, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
                ctx.fill();
                ctx.strokeStyle = '#10b981';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Подпись точки E
                ctx.fillStyle = '#047857';
                ctx.font = 'bold 11.5px Inter, sans-serif';
                ctx.textAlign = 'left';
                const labelE = `E ($${eqVal})`;
                ctx.fillText(labelE, Math.min(eqPoint.x + 14, right - 85), Math.max(eqPoint.y - 12, top + 14));

                // Плашка проекции на ГОРИЗОНТАЛЬНОЙ оси X (Y)
                const xBadgeText = `$${eqVal}`;
                ctx.font = 'bold 11px JetBrains Mono, monospace';
                const textW = ctx.measureText(xBadgeText).width + 10;
                const badgeH = 18;
                const xBoxLeft = Math.min(Math.max(eqPoint.x - textW / 2, left), right - textW);
                ctx.fillStyle = '#059669';
                ctx.beginPath();
                ctx.roundRect(xBoxLeft, bottom - badgeH - 3, textW, badgeH, 4);
                ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(xBadgeText, xBoxLeft + textW / 2, bottom - badgeH / 2 - 3);

                // Плашка проекции на ВЕРТИКАЛЬНОЙ оси Y (Y_ad) — точно такое же число
                const yBoxTop = Math.min(Math.max(eqPoint.y - badgeH / 2, top), bottom - badgeH);
                ctx.fillStyle = '#059669';
                ctx.beginPath();
                ctx.roundRect(left + 4, yBoxTop, textW, badgeH, 4);
                ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(xBadgeText, left + 4 + textW / 2, yBoxTop + badgeH / 2);
            }
        }

        ctx.restore();
    }
};

function renderTask3MC2(studentIdx, lang) {
    const container = document.getElementById('task3-container');
    if (!container) return;

    const d = getStudentKeynesDataMC2(studentIdx);
    const isEn = lang === 'en';
    const unit = isEn ? 'B' : 'млрд';

    if (!mc2Task3State[studentIdx]) {
        mc2Task3State[studentIdx] = {
            mpc: 0.50,
            a: 0,
            t: 0,
            i: 0,
            g: 0,
            nx: 0,
            plotted: false,
            userYStar: ''
        };
    }
    const st = mc2Task3State[studentIdx];

    const title = isEn
        ? 'Task 3: Keynesian Cross & Aggregate Expenditure Equilibrium'
        : 'Задание 3: Кейнсианский крест и равновесный выпуск в модели совокупных расходов';

    const conditionHTML = isEn ? `
        <div class="space-y-2.5 text-xs md:text-sm text-slate-200 leading-relaxed">
            <p class="font-semibold text-indigo-300">Hypothetical Economy Scenario (Variant #${studentIdx + 1}):</p>
            <ul class="space-y-2 list-disc pl-5 text-slate-300">
                <li>
                    <strong>Household Consumption & Savings:</strong> Regardless of their current income level, households in this hypothetical economy must spend <span class="text-white font-mono font-bold">$${d.a} B</span> on basic life necessities. Whenever additional disposable income becomes available, households allow themselves to save <span class="text-amber-300 font-mono font-bold">${d.mpsCents} cents</span> out of every extra $1.00 earned. Total lump-sum taxes collected in the country equal <span class="text-white font-mono font-bold">$${d.taxes} B</span>.
                </li>
                <li>
                    <strong>Investment Sector:</strong> Private firms plan to invest <span class="text-white font-mono font-bold">$${d.netInv} B</span> in net new capital equipment, while annual capital depreciation equals <span class="text-white font-mono font-bold">$${d.depreciation} B</span>.
                </li>
                <li>
                    <strong>Government Sector:</strong> Total consolidated government budget outlays equal <span class="text-white font-mono font-bold">$${d.govTotal} B</span>, of which <span class="text-white font-mono font-bold">$${d.transfers} B</span> go toward social transfers and pensions.
                </li>
                <li>
                    <strong>External Sector:</strong> Total exports of goods and services equal <span class="text-white font-mono font-bold">$${d.exportsVal} B</span>, while total imports equal <span class="text-white font-mono font-bold">$${d.importsVal} B</span>.
                </li>
            </ul>
            <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-xs text-slate-400">
                <i class="fas fa-sliders-h text-indigo-400 mr-1.5"></i>
                <strong>Instructions:</strong> Determine the model parameters (<code class="text-sky-300">MPC, a, T, I, G, NX</code>) from the scenario above, set them with the sliders below (step = 5), and plot the Aggregate Expenditure curve <code class="text-emerald-300">Y_ad = a + MPC(Y − T) + I + G + NX</code>. Read the identical projection values shown on both the horizontal (<code class="text-emerald-300">Y</code>) and vertical (<code class="text-emerald-300">Y_ad</code>) axes at the intersection point and enter the equilibrium output <code class="text-amber-300">Y*</code> below.
            </div>
        </div>
    ` : `
        <div class="space-y-2.5 text-xs md:text-sm text-slate-200 leading-relaxed">
            <p class="font-semibold text-indigo-300">Условие гипотетической экономики (Вариант №${studentIdx + 1}):</p>
            <ul class="space-y-2 list-disc pl-5 text-slate-300">
                <li>
                    <strong>Потребление и сбережения домохозяйств:</strong> В некой гипотетической экономике, независимо от величины текущего дохода, люди в любом случае тратят на самые необходимые нужды для поддержания жизни <span class="text-white font-mono font-bold">$${d.a} млрд</span>. Если же у домохозяйств появляются дополнительные доходы, они позволяют себе с каждого дополнительного $1.00 сберечь <span class="text-amber-300 font-mono font-bold">${d.mpsCents} центов</span>. Общая сумма налогов в этой стране составляет <span class="text-white font-mono font-bold">$${d.taxes} млрд</span>.
                </li>
                <li>
                    <strong>Инвестиционный сектор:</strong> Фирмы планируют осуществить чистые инвестиции в новое оборудование на сумму <span class="text-white font-mono font-bold">$${d.netInv} млрд</span>, при этом годовая амортизация капитала равна <span class="text-white font-mono font-bold">$${d.depreciation} млрд</span>.
                </li>
                <li>
                    <strong>Государственный сектор:</strong> Общие расходы государственного бюджета составляют <span class="text-white font-mono font-bold">$${d.govTotal} млрд</span>, из которых <span class="text-white font-mono font-bold">$${d.transfers} млрд</span> направляются на социальные трансферты и пенсии.
                </li>
                <li>
                    <strong>Внешний сектор:</strong> Объём экспорта товаров и услуг составляет <span class="text-white font-mono font-bold">$${d.exportsVal} млрд</span>, а объём импорта — <span class="text-white font-mono font-bold">$${d.importsVal} млрд</span>.
                </li>
            </ul>
            <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-xs text-slate-400">
                <i class="fas fa-sliders-h text-indigo-400 mr-1.5"></i>
                <strong>Инструкция:</strong> Определите параметры модели (<code class="text-sky-300">MPC, a, T, I, G, NX</code>) из условия выше, выставьте их ползунками (шаг = 5) и постройте линию совокупных расходов <code class="text-emerald-300">Y_ad = a + MPC(Y − T) + I + G + NX</code>. В точке пересечения с линией 45° график автоматически отобразит одинаковые числа проекций на горизонтальной (<code class="text-emerald-300">Y</code>) и вертикальной (<code class="text-emerald-300">Y_ad</code>) осях — перепишите это значение равновесного выпуска <code class="text-amber-300">Y*</code> в итоговое поле ответа.
            </div>
        </div>
    `;

    container.innerHTML = `
        <div class="space-y-6">
            <!-- Header & Problem Statement -->
            <div class="card p-6 border-t-2 border-indigo-500 space-y-4">
                <div class="flex flex-wrap justify-between items-center gap-3">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest">
                        ${isEn ? 'Task 3 • Keynesian Cross Model' : 'Задание 3 • Модель Кейнсианского креста'}
                    </span>
                    <span class="text-xs font-mono text-slate-400">
                        ${isEn ? 'Formula: Y_ad = a + MPC(Y − T) + I + G + NX' : 'Формула: Y_ad = a + MPC(Y − T) + I + G + NX'}
                    </span>
                </div>
                <h3 class="text-lg md:text-xl font-bold text-white">${title}</h3>
                ${conditionHTML}
            </div>

            <!-- Interactive Workspace -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                
                <!-- Left Column: Sliders & Final Answer Box (5 cols) -->
                <div class="xl:col-span-5 space-y-4">
                    <div class="card p-5 space-y-3.5">
                        <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                            <span class="text-xs font-bold uppercase tracking-wider text-sky-400">
                                ${isEn ? 'Set Model Parameters (Step = 5)' : 'Выставьте параметры модели (шаг = 5)'}
                            </span>
                            <button onclick="resetTask3Sliders()" class="text-xs text-slate-400 hover:text-rose-400 underline">
                                ${isEn ? 'Reset' : 'Сбросить'}
                            </button>
                        </div>

                        <!-- 1. MPC Slider -->
                        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800 space-y-1.5">
                            <div class="flex justify-between text-xs font-semibold">
                                <span class="text-slate-300">${isEn ? '1. Marginal Propensity to Consume (MPC)' : '1. Предельная склонность к потреблению (MPC)'}</span>
                                <span id="t3-val-mpc" class="font-mono font-bold text-sky-400">${st.mpc.toFixed(2)}</span>
                            </div>
                            <input type="range" id="t3-slide-mpc" min="0.50" max="0.90" step="0.02" value="${st.mpc}" oninput="updateTask3Chart(true)" class="w-full accent-sky-500 cursor-pointer">
                        </div>

                        <!-- 2. Autonomous Consumption (a) Slider -->
                        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800 space-y-1.5">
                            <div class="flex justify-between text-xs font-semibold">
                                <span class="text-slate-300">${isEn ? '2. Autonomous Consumption (a)' : '2. Автономное потребление (a)'}</span>
                                <span id="t3-val-a" class="font-mono font-bold text-blue-400">$${st.a} ${unit}</span>
                            </div>
                            <input type="range" id="t3-slide-a" min="0" max="600" step="5" value="${st.a}" oninput="updateTask3Chart(true)" class="w-full accent-blue-500 cursor-pointer">
                        </div>

                        <!-- 3. Taxes (T) Slider -->
                        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800 space-y-1.5">
                            <div class="flex justify-between text-xs font-semibold">
                                <span class="text-slate-300">${isEn ? '3. Aggregate Taxes (T)' : '3. Совокупные налоги (T)'}</span>
                                <span id="t3-val-t" class="font-mono font-bold text-rose-400">$${st.t} ${unit}</span>
                            </div>
                            <input type="range" id="t3-slide-t" min="0" max="500" step="5" value="${st.t}" oninput="updateTask3Chart(true)" class="w-full accent-rose-500 cursor-pointer">
                        </div>

                        <!-- 4. Gross Investment (I) Slider -->
                        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800 space-y-1.5">
                            <div class="flex justify-between text-xs font-semibold">
                                <span class="text-slate-300">${isEn ? '4. Gross Investment (I)' : '4. Валовые инвестиции (I)'}</span>
                                <span id="t3-val-i" class="font-mono font-bold text-emerald-400">$${st.i} ${unit}</span>
                            </div>
                            <input type="range" id="t3-slide-i" min="0" max="600" step="5" value="${st.i}" oninput="updateTask3Chart(true)" class="w-full accent-emerald-500 cursor-pointer">
                        </div>

                        <!-- 5. Government Purchases (G) Slider -->
                        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800 space-y-1.5">
                            <div class="flex justify-between text-xs font-semibold">
                                <span class="text-slate-300">${isEn ? '5. Government Purchases (G)' : '5. Государственные закупки (G)'}</span>
                                <span id="t3-val-g" class="font-mono font-bold text-amber-400">$${st.g} ${unit}</span>
                            </div>
                            <input type="range" id="t3-slide-g" min="0" max="600" step="5" value="${st.g}" oninput="updateTask3Chart(true)" class="w-full accent-amber-500 cursor-pointer">
                        </div>

                        <!-- 6. Net Exports (NX) Slider -->
                        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800 space-y-1.5">
                            <div class="flex justify-between text-xs font-semibold">
                                <span class="text-slate-300">${isEn ? '6. Net Exports (NX = X − M)' : '6. Чистый экспорт (NX = X − M)'}</span>
                                <span id="t3-val-nx" class="font-mono font-bold text-purple-400">$${st.nx} ${unit}</span>
                            </div>
                            <input type="range" id="t3-slide-nx" min="-300" max="300" step="5" value="${st.nx}" oninput="updateTask3Chart(true)" class="w-full accent-purple-500 cursor-pointer">
                        </div>

                        <button onclick="updateTask3Chart(true)" class="w-full py-2.5 rounded-lg text-xs md:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition">
                            <i class="fas fa-chart-line mr-1.5"></i> ${isEn ? 'Draw Aggregate Expenditure Line' : 'Построить линию совокупных расходов'}
                        </button>
                    </div>

                    <!-- Projection Readout & Final Equilibrium Output Answer -->
                    <div class="card p-5 border-t-2 border-emerald-500 space-y-3">
                        <div class="grid grid-cols-2 gap-2.5">
                            <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                                <span class="text-[10px] uppercase font-mono text-slate-400 block">
                                    ${isEn ? 'Horizontal Axis (Y)' : 'Горизонталь (Y)'}
                                </span>
                                <span id="t3-proj-x" class="font-mono font-black text-base text-emerald-400">—</span>
                            </div>
                            <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
                                <span class="text-[10px] uppercase font-mono text-slate-400 block">
                                    ${isEn ? 'Vertical Axis (Y_ad)' : 'Вертикаль (Y_ad)'}
                                </span>
                                <span id="t3-proj-y" class="font-mono font-black text-base text-emerald-400">—</span>
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label for="t3-final-ystar" class="block text-xs font-bold uppercase tracking-wider text-amber-300">
                                ${isEn ? 'Copy Equilibrium Output (Y*, $ B):' : 'Перепишите равновесный выпуск ВВП (Y*, $ млрд):'}
                            </label>
                            <input type="number" step="0.01" id="t3-final-ystar" value="${st.userYStar}" oninput="saveTask3YStar(this.value)"
                                   placeholder="${isEn ? 'Enter value from chart projection...' : 'Введите число из проекции графика...'}"
                                   class="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-lg p-3 text-base font-mono font-bold text-white outline-none transition">
                        </div>
                    </div>
                </div>

                <!-- Right Column: Keynesian Cross Square White Canvas (7 cols) -->
                <div class="xl:col-span-7 flex flex-col items-center justify-center">
                    <div class="w-full max-w-[680px] bg-white rounded-2xl p-4 border border-slate-300 shadow-2xl">
                        <div class="w-full max-w-[630px] mx-auto relative">
                            <canvas id="mc2KeynesianCanvas"></canvas>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    initTask3ChartMC2(studentIdx);
}

function saveTask3YStar(val) {
    if (typeof currentStudentIdx !== 'undefined' && currentStudentIdx !== -1 && mc2Task3State[currentStudentIdx]) {
        mc2Task3State[currentStudentIdx].userYStar = val;
    }
}

function resetTask3Sliders() {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) return;
    mc2Task3State[currentStudentIdx] = {
        mpc: 0.50,
        a: 0,
        t: 0,
        i: 0,
        g: 0,
        nx: 0,
        plotted: false,
        userYStar: mc2Task3State[currentStudentIdx]?.userYStar || ''
    };
    renderTask3MC2(currentStudentIdx, currentLang);
}

function initTask3ChartMC2(studentIdx) {
    const canvas = document.getElementById('mc2KeynesianCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (mc2KeynesianChart) {
        mc2KeynesianChart.destroy();
    }

    const isEn = currentLang === 'en';
    mc2KeynesianChart = new Chart(ctx, {
        type: 'line',
        data: { datasets: [] },
        plugins: [mc2KeynesianCrossPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.03,
            animation: false,
            scales: {
                x: {
                    type: 'linear',
                    min: 0,
                    max: 5000,
                    title: {
                        display: true,
                        text: isEn ? 'Aggregate Output / Income, Y ($ B)' : 'Совокупный выпуск / Доход, Y ($ млрд)',
                        color: '#111827',
                        font: { size: 12, weight: 'bold' }
                    },
                    ticks: { color: '#111827', font: { weight: 'bold' }, stepSize: 1000 },
                    grid: { color: '#e5e7eb' }
                },
                y: {
                    type: 'linear',
                    min: 0,
                    max: 5000,
                    title: {
                        display: true,
                        text: isEn ? 'Planned Aggregate Expenditure, Y_ad ($ B)' : 'Планируемые совокупные расходы, Y_ad ($ млрд)',
                        color: '#111827',
                        font: { size: 12, weight: 'bold' }
                    },
                    ticks: { color: '#111827', font: { weight: 'bold' }, stepSize: 1000 },
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

    const st = mc2Task3State[studentIdx];
    updateTask3Chart(st && st.plotted);
}

function updateTask3Chart(drawAE = true) {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1 || !mc2KeynesianChart) return;
    const isEn = currentLang === 'en';
    const unit = isEn ? 'B' : 'млрд';

    const mpc = parseFloat(document.getElementById('t3-slide-mpc').value);
    const a = parseFloat(document.getElementById('t3-slide-a').value);
    const t = parseFloat(document.getElementById('t3-slide-t').value);
    const i = parseFloat(document.getElementById('t3-slide-i').value);
    const g = parseFloat(document.getElementById('t3-slide-g').value);
    const nx = parseFloat(document.getElementById('t3-slide-nx').value);

    mc2Task3State[currentStudentIdx] = {
        ...mc2Task3State[currentStudentIdx],
        mpc, a, t, i, g, nx,
        plotted: drawAE
    };

    document.getElementById('t3-val-mpc').innerText = mpc.toFixed(2);
    document.getElementById('t3-val-a').innerText = `$${a} ${unit}`;
    document.getElementById('t3-val-t').innerText = `$${t} ${unit}`;
    document.getElementById('t3-val-i').innerText = `$${i} ${unit}`;
    document.getElementById('t3-val-g').innerText = `$${g} ${unit}`;
    document.getElementById('t3-val-nx').innerText = `$${nx} ${unit}`;

    // Расчёт по формуле: Y_ad = a + MPC*(Y - T) + I + G + NX
    const intercept = a - mpc * t + i + g + nx;
    const multiplier = 1 / (1 - mpc);
    const yEq = Number((intercept * multiplier).toFixed(2));

    const projXEl = document.getElementById('t3-proj-x');
    const projYEl = document.getElementById('t3-proj-y');

    let targetMax = 5000;
    if (drawAE && yEq > 0) {
        targetMax = Math.max(2500, yEq * 1.35);
    }
    const rawStep = targetMax / 5;
    const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const stepSize = Math.ceil(rawStep / mag) * mag;
    const axisMax = stepSize * 5;

    mc2KeynesianChart.options.scales.x.max = axisMax;
    mc2KeynesianChart.options.scales.y.max = axisMax;
    mc2KeynesianChart.options.scales.x.ticks.stepSize = stepSize;
    mc2KeynesianChart.options.scales.y.ticks.stepSize = stepSize;

    const datasets = [
        {
            label: isEn ? '45° Line (Y = Y_ad)' : 'Линия 45° (Y = Y_ad)',
            data: [{ x: 0, y: 0 }, { x: axisMax, y: axisMax }],
            borderColor: '#dc2626',
            borderWidth: 2.5,
            borderDash: [10, 6],
            pointRadius: 0
        }
    ];

    if (drawAE) {
        datasets.push({
            label: isEn ? 'Y_ad = a + MPC(Y − T) + I + G + NX' : 'Y_ad = a + MPC(Y − T) + I + G + NX',
            data: [
                { x: 0, y: intercept },
                { x: axisMax, y: intercept + mpc * axisMax }
            ],
            borderColor: '#2563eb',
            borderWidth: 3,
            pointRadius: 0
        });

        if (yEq > 0 && yEq <= axisMax) {
            projXEl.innerText = `$${yEq} ${unit}`;
            projYEl.innerText = `$${yEq} ${unit}`;
            projXEl.className = 'font-mono font-black text-base text-emerald-400';
            projYEl.className = 'font-mono font-black text-base text-emerald-400';

            datasets.push({
                label: isEn ? 'Projection to Y' : 'Проекция на ось Y',
                data: [{ x: yEq, y: 0 }, { x: yEq, y: yEq }],
                borderColor: '#10b981',
                borderWidth: 1.8,
                borderDash: [5, 5],
                pointRadius: 0
            });
            datasets.push({
                label: isEn ? 'Projection to Y_ad' : 'Проекция на ось Y_ad',
                data: [{ x: 0, y: yEq }, { x: yEq, y: yEq }],
                borderColor: '#10b981',
                borderWidth: 1.8,
                borderDash: [5, 5],
                pointRadius: 0
            });
            datasets.push({
                label: isEn ? `Equilibrium E ($${yEq} B)` : `Равновесие E ($${yEq} млрд)`,
                data: [{ x: yEq, y: yEq }],
                backgroundColor: '#10b981',
                borderColor: '#047857',
                borderWidth: 2,
                pointRadius: 7,
                isEquilibriumPoint: true
            });
        } else {
            projXEl.innerText = '—';
            projYEl.innerText = '—';
            projXEl.className = 'font-mono font-bold text-xs text-rose-400';
            projYEl.className = 'font-mono font-bold text-xs text-rose-400';
        }
    } else {
        projXEl.innerText = '—';
        projYEl.innerText = '—';
        projXEl.className = 'font-mono font-black text-base text-slate-400';
        projYEl.className = 'font-mono font-black text-base text-slate-400';
    }

    mc2KeynesianChart.data.datasets = datasets;
    mc2KeynesianChart.update();
}
