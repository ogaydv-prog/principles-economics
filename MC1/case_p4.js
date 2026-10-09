/* case_p4.js — Part 4: Interactive Case Analysis for Principles of Economics (MC1 AlmaU SDTE 2026) */

let p4Chart1Inst = null;
let p4Chart2Inst = null;

// ==========================================
// 1. DATA MODELS & COST TABLES
// ==========================================

// Perfect Competition (Global Grain Exporter)
const p4_pcTableData = [
    { q: 0, tvc: 0,   tc: 100, mc: null, avc: null,  atc: null },
    { q: 1, tvc: 90,  tc: 190, mc: 90,   avc: 90.00, atc: 190.00 },
    { q: 2, tvc: 170, tc: 270, mc: 80,   avc: 85.00, atc: 135.00 },
    { q: 3, tvc: 240, tc: 340, mc: 70,   avc: 80.00, atc: 113.33 },
    { q: 4, tvc: 300, tc: 400, mc: 60,   avc: 75.00, atc: 100.00 },
    { q: 5, tvc: 370, tc: 470, mc: 70,   avc: 74.00, atc: 94.00 },
    { q: 6, tvc: 450, tc: 550, mc: 80,   avc: 75.00, atc: 91.67 },
    { q: 7, tvc: 540, tc: 640, mc: 90,   avc: 77.14, atc: 91.43 },
    { q: 8, tvc: 650, tc: 750, mc: 110,  avc: 81.25, atc: 93.75 },
    { q: 9, tvc: 780, tc: 880, mc: 130,  avc: 86.67, atc: 97.78 },
    { q: 10, tvc: 930, tc: 1030, mc: 150, avc: 93.00, atc: 103.00 }
];

// Monopolistic Competition (Global Brand Retail)
const p4_mcData = {
    'SR': [
        { q: 0, p: 120, mr: null, mc: null, atc: null, tr: 0, tc: 100 },
        { q: 1, p: 110, mr: 110, mc: 40, atc: 140.0, tr: 110, tc: 140 },
        { q: 2, p: 100, mr: 90,  mc: 30, atc: 85.0,  tr: 200, tc: 170 },
        { q: 3, p: 90,  mr: 70,  mc: 40, atc: 70.0,  tr: 270, tc: 210 },
        { q: 4, p: 80,  mr: 50,  mc: 50, atc: 65.0,  tr: 320, tc: 260 }, 
        { q: 5, p: 70,  mr: 30,  mc: 70, atc: 66.0,  tr: 350, tc: 330 },
        { q: 6, p: 60,  mr: 10,  mc: 90, atc: 70.0,  tr: 360, tc: 420 },
        { q: 7, p: 50,  mr: -10, mc: 110, atc: 75.7, tr: 350, tc: 530 },
        { q: 8, p: 40,  mr: -30, mc: 130, atc: 82.5, tr: 320, tc: 660 },
        { q: 9, p: 30,  mr: -50, mc: 150, atc: 90.0, tr: 270, tc: 810 },
        { q: 10, p: 20, mr: -70, mc: 170, atc: 98.0, tr: 200, tc: 980 }
    ],
    'LR': [
        { q: 0, p: 115, mr: null, mc: null, atc: null, tr: 0, tc: 100 },
        { q: 1, p: 100, mr: 100, mc: 40, atc: 140.0, tr: 100, tc: 140 },
        { q: 2, p: 85,  mr: 70,  mc: 30, atc: 85.0,  tr: 170, tc: 170 },
        { q: 3, p: 70,  mr: 40,  mc: 40, atc: 70.0,  tr: 210, tc: 210 }, 
        { q: 4, p: 55,  mr: 10,  mc: 50, atc: 65.0,  tr: 220, tc: 260 }, 
        { q: 5, p: 40,  mr: -20, mc: 70, atc: 66.0,  tr: 200, tc: 330 },
        { q: 6, p: 25,  mr: -50, mc: 90, atc: 70.0,  tr: 150, tc: 420 },
        { q: 7, p: 10,  mr: -80, mc: 110, atc: 75.7, tr: 70,  tc: 530 },
        { q: 8, p: 0,   mr: -110,mc: 130, atc: 82.5, tr: 0,   tc: 660 },
        { q: 9, p: 0,   mr: -140,mc: 150, atc: 90.0, tr: 0,   tc: 810 },
        { q: 10, p: 0,  mr: -170,mc: 170, atc: 98.0, tr: 0,   tc: 980 }
    ]
};

// Pure Monopoly (Port & Infrastructure Terminal)
const p4_monoTableData = [
    { q: 0, p: 160, tr: 0, mr: null, tc: 100, mc: null, atc: null },
    { q: 1, p: 150, tr: 150, mr: 150, tc: 190, mc: 90, atc: 190.00 },
    { q: 2, p: 140, tr: 280, mr: 130, tc: 270, mc: 80, atc: 135.00 },
    { q: 3, p: 130, tr: 390, mr: 110, tc: 340, mc: 70, atc: 113.33 },
    { q: 4, p: 120, tr: 480, mr: 90, tc: 400, mc: 60, atc: 100.00 },
    { q: 5, p: 110, tr: 550, mr: 70, tc: 470, mc: 70, atc: 94.00 },
    { q: 6, p: 100, tr: 600, mr: 50, tc: 550, mc: 80, atc: 91.67 },
    { q: 7, p: 90, tr: 630, mr: 30, tc: 640, mc: 90, atc: 91.43 },
    { q: 8, p: 80, tr: 640, mr: 10, tc: 750, mc: 110, atc: 93.75 },
    { q: 9, p: 70, tr: 630, mr: -10, tc: 880, mc: 130, atc: 97.78 },
    { q: 10, p: 60, tr: 600, mr: -30, tc: 1030, mc: 150, atc: 103.00 }
];

// ==========================================
// 2. MAIN RENDER FUNCTION
// ==========================================

function renderCaseP4(studentIdx, lang) {
    const container = document.getElementById('part4-container');
    if (!container) return;

    // Reset existing charts
    if (p4Chart1Inst) { p4Chart1Inst.destroy(); p4Chart1Inst = null; }
    if (p4Chart2Inst) { p4Chart2Inst.destroy(); p4Chart2Inst = null; }

    const marketType = studentIdx % 3; // 0: PC, 1: MC, 2: Monopoly

    const titles = {
        en: [
            "Case: Global Commodity Exporter & Price Volatility (Perfect Competition)", 
            "Case: International Retail Expansion & Entry (Monopolistic Competition)", 
            "Case: Global Logistics Hub & Port Tariffs (Pure Monopoly)"
        ],
        ru: [
            "Кейс: Экспортер зерна и скачки мировых цен (Совершенная конкуренция)", 
            "Кейс: Международный ритейл и вход брендов (Монополистическая конкуренция)", 
            "Кейс: Морской терминал и тарифное регулирование (Чистая монополия)"
        ]
    };

    let html = `
    <div class="card p-6 space-y-6 bg-slate-900/90 border border-slate-800">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4 gap-4">
            <div>
                <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                    ${lang === 'en' ? 'International Business Case Simulator' : 'Интерактивный кейс-симулятор'}
                </span>
                <h3 class="text-xl font-black text-white mt-1">${titles[lang][marketType]}</h3>
            </div>
            <div class="bg-indigo-950/60 border border-indigo-500/30 px-3 py-1.5 rounded-lg text-xs text-indigo-300 font-mono font-bold">
                ${lang === 'en' ? 'Variant Market Structure #' : 'Вариант рыночной структуры #'}${marketType + 1}
            </div>
        </div>
    `;

    // ----------------------------------------------------
    // TYPE 0: PERFECT COMPETITION
    // ----------------------------------------------------
    if (marketType === 0) {
        html += `
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div class="xl:col-span-5 space-y-4">
                <div class="flex flex-wrap gap-2 mb-2">
                    <button onclick="p4_setPcScenario(131)" id="p4-pc-btn-131" class="scenario-btn bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">P=$131 (${lang==='en'?'Boom':'Рост'})</button>
                    <button onclick="p4_setPcScenario(81)" id="p4-pc-btn-81" class="scenario-btn bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">P=$81 (${lang==='en'?'Recession':'Спад'})</button>
                    <button onclick="p4_setPcScenario(71)" id="p4-pc-btn-71" class="scenario-btn bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">P=$71 (${lang==='en'?'Crisis':'Кризис'})</button>
                </div>

                <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div class="flex justify-between items-center">
                        <label class="text-xs font-bold text-slate-300 uppercase">${lang==='en'?'Export Volume (Q)':'Объем экспорта (Q)'}</label>
                        <span id="p4-pc-val-q" class="text-lg font-black text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">9 units</span>
                    </div>
                    <input type="range" id="p4-pc-slider-q" min="0" max="10" value="9" step="1" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" oninput="p4_updatePcDashboard()">
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">TR</span><span id="p4-pc-val-tr" class="text-white font-bold text-base">$0</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">TC</span><span id="p4-pc-val-tc" class="text-white font-bold text-base">$100</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">World Price (MR)</span><span id="p4-pc-val-mr" class="text-emerald-400 font-bold text-base">$131</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">MC</span><span id="p4-pc-val-mc" class="text-amber-400 font-bold text-base">$130</span></div>
                </div>

                <div id="p4-pc-profit-panel" class="p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-2">
                    <div class="flex justify-between items-end">
                        <span class="text-xs font-bold text-slate-400 uppercase">${lang==='en'?'Net Profit':'Чистая прибыль'}</span>
                        <span id="p4-pc-val-profit" class="text-2xl font-black font-mono text-emerald-400">+$299</span>
                    </div>
                    <div class="h-px w-full bg-slate-800 my-2"></div>
                    <p id="p4-pc-val-verdict" class="text-xs text-slate-300 leading-relaxed"></p>
                </div>
            </div>

            <div class="xl:col-span-7 space-y-4">
                <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl h-[220px] relative">
                    <canvas id="p4Chart1Canvas"></canvas>
                </div>
                <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl h-[220px] relative">
                    <canvas id="p4Chart2Canvas"></canvas>
                </div>
            </div>
        </div>
        `;
    } 
    // ----------------------------------------------------
    // TYPE 1: MONOPOLISTIC COMPETITION
    // ----------------------------------------------------
    else if (marketType === 1) {
        html += `
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div class="xl:col-span-5 space-y-4">
                <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div class="flex gap-2">
                        <label class="flex-1 cursor-pointer">
                            <input type="radio" name="p4-mc-period" value="SR" class="hidden" checked onchange="p4_updateMcDashboard()">
                            <div id="p4-mc-toggle-sr" class="text-center py-2 rounded-lg border border-indigo-500 bg-indigo-600 text-white text-xs font-bold">${lang==='en'?'Short-Run (Brand Monopoly)':'Краткосрочный период'}</div>
                        </label>
                        <label class="flex-1 cursor-pointer">
                            <input type="radio" name="p4-mc-period" value="LR" class="hidden" onchange="p4_updateMcDashboard()">
                            <div id="p4-mc-toggle-lr" class="text-center py-2 rounded-lg border border-slate-700 text-slate-400 text-xs font-bold">${lang==='en'?'Long-Run (Entrant Competition)':'Долгосрочный период'}</div>
                        </label>
                    </div>

                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <label class="text-xs font-bold text-slate-300 uppercase">${lang==='en'?'Sales Quantity (Q)':'Объем продаж (Q)'}</label>
                            <span id="p4-mc-val-q" class="text-lg font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">4 units</span>
                        </div>
                        <input type="range" id="p4-mc-slider-q" min="0" max="10" value="4" step="1" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" oninput="p4_updateMcDashboard()">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">Price (P)</span><span id="p4-mc-val-p" class="text-purple-400 font-bold text-base">$80</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">ATC</span><span id="p4-mc-val-atc" class="text-slate-300 font-bold text-base">$65</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">MR</span><span id="p4-mc-val-mr" class="text-emerald-400 font-bold text-base">$50</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">MC</span><span id="p4-mc-val-mc" class="text-amber-400 font-bold text-base">$50</span></div>
                </div>

                <div id="p4-mc-profit-panel" class="p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-2">
                    <div class="flex justify-between items-end">
                        <span class="text-xs font-bold text-slate-400 uppercase">${lang==='en'?'Economic Profit':'Экономическая прибыль'}</span>
                        <span id="p4-mc-val-profit" class="text-2xl font-black font-mono text-emerald-400">+$60</span>
                    </div>
                    <div class="h-px w-full bg-slate-800 my-2"></div>
                    <p id="p4-mc-val-verdict" class="text-xs text-slate-300 leading-relaxed"></p>
                </div>
            </div>

            <div class="xl:col-span-7 space-y-4">
                <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl h-[220px] relative">
                    <canvas id="p4Chart1Canvas"></canvas>
                </div>
                <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl h-[220px] relative">
                    <canvas id="p4Chart2Canvas"></canvas>
                </div>
            </div>
        </div>
        `;
    } 
    // ----------------------------------------------------
    // TYPE 2: PURE MONOPOLY
    // ----------------------------------------------------
    else {
        html += `
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div class="xl:col-span-5 space-y-4">
                <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <label class="text-xs font-bold text-slate-300 uppercase">${lang==='en'?'Port Tariff Rate (P)':'Тариф на обработку (P)'}</label>
                            <span id="p4-mo-slider-val-p" class="text-lg font-black text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">$110</span>
                        </div>
                        <input type="range" id="p4-mo-slider-p" min="60" max="160" value="110" step="10" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500">
                    </div>

                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <label class="text-xs font-bold text-slate-300 uppercase">${lang==='en'?'Cargo Flow (Q)':'Объем грузопотока (Q)'}</label>
                            <span id="p4-mo-val-q" class="text-lg font-black text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">5 units</span>
                        </div>
                        <input type="range" id="p4-mo-slider-q" min="0" max="10" value="5" step="1" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">MR</span><span id="p4-mo-val-mr" class="text-emerald-400 font-bold text-base">$70</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[9px] uppercase">ATC</span><span id="p4-mo-val-atc" class="text-rose-400 font-bold text-base">$94.0</span></div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 col-span-2"><span class="text-slate-500 block text-[9px] uppercase">MC</span><span id="p4-mo-val-mc" class="text-amber-400 font-bold text-base">$70</span></div>
                </div>

                <div id="p4-mo-profit-panel" class="p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-2">
                    <div class="flex justify-between items-end">
                        <span class="text-xs font-bold text-slate-400 uppercase">${lang==='en'?'Monopoly Rent':'Монопольная прибыль'}</span>
                        <span id="p4-mo-val-profit" class="text-2xl font-black font-mono text-emerald-400">+$80</span>
                    </div>
                    <div class="h-px w-full bg-slate-800 my-2"></div>
                    <p id="p4-mo-val-verdict" class="text-xs text-slate-300 leading-relaxed"></p>
                </div>
            </div>

            <div class="xl:col-span-7 space-y-4">
                <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl h-[220px] relative">
                    <canvas id="p4Chart1Canvas"></canvas>
                </div>
                <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl h-[220px] relative">
                    <canvas id="p4Chart2Canvas"></canvas>
                </div>
            </div>
        </div>
        `;
    }

    // Essay Answer Box with Anti-Cheat & Live Counter
    html += `
        <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3 mt-6">
            <div class="flex justify-between items-center">
                <label class="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <i class="fas fa-pen-nib text-indigo-400"></i>
                    ${lang === 'en' ? 'Executive Strategy Justification (Min 100 Words)' : 'Стратегическое обоснование (Минимум 100 слов)'}
                </label>
                <span id="p4-word-counter" class="text-[11px] font-mono font-bold text-rose-400">0 / 100 ${lang === 'en' ? 'words' : 'слов'}</span>
            </div>
            
            <textarea id="p4-essay-input" 
                class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-xs text-slate-200 h-36 focus:ring-2 focus:ring-indigo-500 outline-none resize-none custom-scrollbar" 
                placeholder="${lang === 'en' ? 'Analyze your pricing, output decisions, cost dynamics, and market entry/exit risks based on the interactive charts...' : 'Опишите ваше управленческое решение: как соотносятся MR и MC, покрываются ли AVC/ATC, и какие риски несет фирма...'}"
                onpaste="notify('${lang === 'en' ? 'Pasting is disabled. Type your response manually.' : 'Вставка заблокирована. Введите текст вручную.'}', true); return false;"
                oninput="p4_checkWordCount()"></textarea>
            
            <p class="text-[10px] text-slate-500">
                ${lang === 'en' ? 'Direct copy-paste is disabled to ensure original analysis. Token compilation requires at least 100 words.' : 'Защита от вставки из буфера активирована. Для завершения работы требуется не менее 100 слов.'}
            </p>
        </div>
    </div>
    `;

    container.innerHTML = html;

    setTimeout(() => {
        if (marketType === 0) p4_initPcModule();
        else if (marketType === 1) p4_initMcModule();
        else p4_initMoModule();
    }, 50);
}

// ==========================================
// 3. LOGIC & CHART CONTROLLERS
// ==========================================

function p4_checkWordCount() {
    const txt = document.getElementById('p4-essay-input').value.trim();
    const words = txt ? txt.split(/\s+/).length : 0;
    const counter = document.getElementById('p4-word-counter');
    if (counter) {
        counter.innerText = `${words} / 100 ${currentLang === 'en' ? 'words' : 'слов'}`;
        counter.className = words >= 100 ? "text-[11px] font-mono font-bold text-emerald-400" : "text-[11px] font-mono font-bold text-rose-400";
    }
}

// PC Module
let p4_pcCurrentPrice = 131;

function p4_initPcModule() {
    const ctx1 = document.getElementById('p4Chart1Canvas').getContext('2d');
    p4Chart1Inst = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: p4_pcTableData.map(d => d.q),
            datasets: [
                { label: 'TR', data: [], borderColor: '#3b82f6', borderWidth: 3 },
                { label: 'TC', data: p4_pcTableData.map(d => d.tc), borderColor: '#f43f5e', borderWidth: 3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'TR / TC (Export Revenue)', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    const ctx2 = document.getElementById('p4Chart2Canvas').getContext('2d');
    p4Chart2Inst = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: p4_pcTableData.map(d => d.q),
            datasets: [
                { label: 'World Price (MR)', data: [], borderColor: '#10b981', borderDash: [5, 5], borderWidth: 2 },
                { label: 'MC', data: p4_pcTableData.map(d => d.mc), borderColor: '#f59e0b', borderWidth: 3 },
                { label: 'AVC', data: p4_pcTableData.map(d => d.avc), borderColor: '#a855f7', borderWidth: 2 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'P / MC / AVC', color: '#fff' } }, scales: { y: { min: 40, max: 200, grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    p4_setPcScenario(131);
}

function p4_setPcScenario(price) {
    p4_pcCurrentPrice = price;
    ['131', '81', '71'].forEach(p => {
        const btn = document.getElementById(`p4-pc-btn-${p}`);
        if(btn) btn.className = p == price ? "scenario-btn bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold active" : "scenario-btn bg-slate-800 text-slate-400 px-3 py-1.5 rounded-lg text-xs font-bold";
    });

    p4Chart1Inst.data.datasets[0].data = p4_pcTableData.map(d => d.q * price);
    p4Chart1Inst.update();
    p4Chart2Inst.data.datasets[0].data = p4_pcTableData.map(d => price);
    p4Chart2Inst.update();

    const slider = document.getElementById('p4-pc-slider-q');
    if (price === 131) slider.value = 9;
    if (price === 81) slider.value = 6;
    if (price === 71) slider.value = 0;

    p4_updatePcDashboard();
}

function p4_updatePcDashboard() {
    const q = parseInt(document.getElementById('p4-pc-slider-q').value);
    const data = p4_pcTableData[q];
    const tr = q * p4_pcCurrentPrice;
    const profit = tr - data.tc;

    document.getElementById('p4-pc-val-q').innerText = `${q} units`;
    document.getElementById('p4-pc-val-tr').innerText = `$${tr}`;
    document.getElementById('p4-pc-val-tc').innerText = `$${data.tc}`;
    document.getElementById('p4-pc-val-mr').innerText = `$${p4_pcCurrentPrice}`;
    document.getElementById('p4-pc-val-mc').innerText = data.mc ? `$${data.mc}` : '-';

    const profitEl = document.getElementById('p4-pc-val-profit');
    profitEl.innerText = (profit >= 0 ? '+$' : '-$') + Math.abs(profit);
    profitEl.className = profit >= 0 ? "text-2xl font-black font-mono text-emerald-400" : "text-2xl font-black font-mono text-rose-400";

    let verdict = "";
    if (p4_pcCurrentPrice === 131) {
        verdict = q === 9 
            ? "<b>Optimal Output (MR = MC = \$130)!</b> Exporting Q=9 units maximizes economic profit (+\$299)." 
            : "Adjust export Q to 9 where MR equals MC.";
    } else if (p4_pcCurrentPrice === 81) {
        verdict = q === 6 
            ? "<b>Loss Minimization (MR = MC = \$80).</b> Revenue covers variable operational costs (\$450) and contributes \$36 to rent." 
            : "Loss is minimized at Q=6 (-\$64). Ceasing operations increases loss to -\$100 (TFC).";
    } else {
        verdict = q === 0 
            ? "<b>SHUTDOWN RULE TRIGGERED!</b> P (\$71) < min AVC (\$74). Cease production immediately to restrict losses to TFC (-\$100)." 
            : "<b>Operating Error!</b> Producing Q>0 increases losses beyond fixed costs.";
    }
    document.getElementById('p4-pc-val-verdict').innerHTML = verdict;
}

// MC Module
function p4_initMcModule() {
    const ctx1 = document.getElementById('p4Chart1Canvas').getContext('2d');
    p4Chart1Inst = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: p4_mcData['SR'].map(d => d.q),
            datasets: [
                { label: 'TR', data: p4_mcData['SR'].map(d => d.tr), borderColor: '#8b5cf6', borderWidth: 3 },
                { label: 'TC', data: p4_mcData['SR'].map(d => d.tc), borderColor: '#f43f5e', borderWidth: 3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'TR / TC Dynamics', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    const ctx2 = document.getElementById('p4Chart2Canvas').getContext('2d');
    p4Chart2Inst = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: p4_mcData['SR'].map(d => d.q),
            datasets: [
                { label: 'P', data: p4_mcData['SR'].map(d => d.p), borderColor: '#a855f7', borderWidth: 3 },
                { label: 'MR', data: p4_mcData['SR'].map(d => d.mr), borderColor: '#34d399', borderDash: [5,5], borderWidth: 2 },
                { label: 'MC', data: p4_mcData['SR'].map(d => d.mc), borderColor: '#f59e0b', borderWidth: 3 },
                { label: 'ATC', data: p4_mcData['SR'].map(d => d.atc), borderColor: '#cbd5e1', borderWidth: 2 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Price (P) / MR / MC / ATC', color: '#fff' } }, scales: { y: { min: -100, max: 150, grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    p4_updateMcDashboard();
}

function p4_updateMcDashboard() {
    const period = document.querySelector('input[name="p4-mc-period"]:checked').value;
    const q = parseInt(document.getElementById('p4-mc-slider-q').value);
    
    document.getElementById('p4-mc-toggle-sr').className = period === 'SR' ? "text-center py-2 rounded-lg border border-indigo-500 bg-indigo-600 text-white text-xs font-bold" : "text-center py-2 rounded-lg border border-slate-700 text-slate-400 text-xs font-bold";
    document.getElementById('p4-mc-toggle-lr').className = period === 'LR' ? "text-center py-2 rounded-lg border border-indigo-500 bg-indigo-600 text-white text-xs font-bold" : "text-center py-2 rounded-lg border border-slate-700 text-slate-400 text-xs font-bold";

    const dataset = p4_mcData[period];
    const data = dataset.find(d => d.q === q);
    const profit = data.tr - data.tc;

    p4Chart1Inst.data.datasets[0].data = dataset.map(d => d.tr);
    p4Chart1Inst.data.datasets[1].data = dataset.map(d => d.tc);
    p4Chart1Inst.update();

    p4Chart2Inst.data.datasets[0].data = dataset.map(d => d.p);
    p4Chart2Inst.data.datasets[1].data = dataset.map(d => d.mr);
    p4Chart2Inst.update();

    document.getElementById('p4-mc-val-q').innerText = `${q} units`;
    document.getElementById('p4-mc-val-p').innerText = `$${data.p}`;
    document.getElementById('p4-mc-val-atc').innerText = data.atc ? `$${data.atc.toFixed(1)}` : '-';
    document.getElementById('p4-mc-val-mr').innerText = data.mr !== null ? `$${data.mr}` : '-';
    document.getElementById('p4-mc-val-mc').innerText = data.mc !== null ? `$${data.mc}` : '-';

    const profitEl = document.getElementById('p4-mc-val-profit');
    profitEl.innerText = (profit >= 0 ? '+$' : '-$') + Math.abs(profit);
    profitEl.className = profit >= 0 ? "text-2xl font-black font-mono text-emerald-400" : "text-2xl font-black font-mono text-rose-400";

    const verdict = period === 'SR' 
        ? (q === 4 ? "<b>Short-Run Optimum (MR = MC = \$50)!</b> Brand differentiation generates +\$60 economic profit." : "Adjust sales to Q=4 to reach short-run profit maximum.")
        : (q === 3 ? "<b>Long-Run Tangency Equilibrium (P = ATC = \$70).</b> Market entry eliminated profit (\$0). Demonstrates Excess Capacity (Q=3 vs min ATC Q=4)." : "Long-run competitor entry reduced demand.");
    document.getElementById('p4-mc-val-verdict').innerHTML = verdict;
}

// Monopoly Module
function p4_initMoModule() {
    const ctx1 = document.getElementById('p4Chart1Canvas').getContext('2d');
    p4Chart1Inst = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: p4_monoTableData.map(d => d.q),
            datasets: [
                { label: 'TR', data: p4_monoTableData.map(d => d.tr), borderColor: '#8b5cf6', borderWidth: 3 },
                { label: 'TC', data: p4_monoTableData.map(d => d.tc), borderColor: '#f43f5e', borderWidth: 3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'TR / TC (Terminal Revenues)', color: '#fff' } }, scales: { y: { grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    const ctx2 = document.getElementById('p4Chart2Canvas').getContext('2d');
    p4Chart2Inst = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: p4_monoTableData.map(d => d.q),
            datasets: [
                { label: 'Tariff Rate (P)', data: p4_monoTableData.map(d => d.p), borderColor: '#3b82f6', borderWidth: 3 },
                { label: 'MR', data: p4_monoTableData.map(d => d.mr), borderColor: '#10b981', borderDash: [5,5], borderWidth: 3 },
                { label: 'MC', data: p4_monoTableData.map(d => d.mc), borderColor: '#f59e0b', borderWidth: 3 },
                { label: 'ATC', data: p4_monoTableData.map(d => d.atc), borderColor: '#f43f5e', borderWidth: 2 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Tariff (P) / MR / MC / ATC', color: '#fff' } }, scales: { y: { min: -50, max: 200, grid: { color: '#1e293b' } }, x: { grid: { color: '#1e293b' } } } }
    });

    const sliderQ = document.getElementById('p4-mo-slider-q');
    const sliderP = document.getElementById('p4-mo-slider-p');

    sliderQ.addEventListener('input', (e) => {
        const q = parseInt(e.target.value);
        sliderP.value = p4_monoTableData[q].p;
        p4_updateMoDashboard();
    });

    sliderP.addEventListener('input', (e) => {
        const p = parseInt(e.target.value);
        const match = p4_monoTableData.find(d => d.p === p);
        if (match) {
            sliderQ.value = match.q;
            p4_updateMoDashboard();
        }
    });

    p4_updateMoDashboard();
}

function p4_updateMoDashboard() {
    const q = parseInt(document.getElementById('p4-mo-slider-q').value);
    const data = p4_monoTableData[q];
    const profit = data.tr - data.tc;

    document.getElementById('p4-mo-val-q').innerText = `${q} units`;
    document.getElementById('p4-mo-slider-val-p').innerText = `$${data.p}`;
    document.getElementById('p4-mo-val-mr').innerText = data.mr !== null ? `$${data.mr}` : '-';
    document.getElementById('p4-mo-val-atc').innerText = data.atc !== null ? `$${data.atc.toFixed(1)}` : '-';
    document.getElementById('p4-mo-val-mc').innerText = data.mc !== null ? `$${data.mc}` : '-';

    const profitEl = document.getElementById('p4-mo-val-profit');
    profitEl.innerText = (profit >= 0 ? '+$' : '-$') + Math.abs(profit);
    profitEl.className = profit >= 0 ? "text-2xl font-black font-mono text-emerald-400" : "text-2xl font-black font-mono text-rose-400";

    const verdict = q === 5 
        ? "<b>Monopoly Optimum (MR = MC = \$70)!</b> Setting port tariff at \$110 maximizes profit (+\$80) by restricting capacity to Q=5." 
        : (q < 5 ? "MR > MC — lowering tariff expands volume and profit." : "MC > MR — overcapacity reduces profit.");
    document.getElementById('p4-mo-val-verdict').innerHTML = verdict;
}
