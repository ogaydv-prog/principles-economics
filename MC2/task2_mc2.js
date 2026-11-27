/* ==========================================
   MIDTERM CONTROL 2 • TASK 2: GDP & NATIONAL ACCOUNTS (SANKEY)
   AlmaU SDTE 2026 • Principles of Economics
   21 Students • Personalized Balanced National Accounts + Distractors
   Bilingual (EN/RU) • Interactive Sankey Flow Builder
   ========================================== */

let mc2SankeyChart = null;
let mc2GoogleChartsReady = false;

if (typeof google !== 'undefined' && google.charts) {
    google.charts.load('current', { packages: ['sankey'] });
    google.charts.setOnLoadCallback(() => {
        mc2GoogleChartsReady = true;
    });
}

// Генератор персонального сбалансированного набора данных для каждого студента (21 вариант)
function getStudentGDPDataMC2(studentIdx) {
    const s = studentIdx + 1;

    // 1. ДОХОДНЫЙ МЕТОД (Income Approach / GDI)
    // Разбиваем прибыль корпораций на 3 составляющие: дивиденды, нераспределенную прибыль и КПН
    const wages = 340 + ((s * 23) % 160);              // Заработная плата наемных работников (W)
    const rent = 45 + ((s * 11) % 45);                 // Рентный доход (R)
    const interest = 40 + ((s * 13) % 40);             // Процентный доход (i)
    const proprietors = 65 + ((s * 17) % 55);          // Доход от собственности (Proprietor's income)
    const dividends = 55 + ((s * 19) % 45);            // Дивиденды корпораций
    const retainedEarnings = 70 + ((s * 29) % 60);     // Нераспределенная прибыль корпораций
    const corpTax = 45 + ((s * 7) % 35);               // Налог на прибыль корпораций (КПН / CIT)
    const indirectTaxes = 75 + ((s * 31) % 55);        // Косвенные налоги на бизнес (T_ind)
    const depreciation = 60 + ((s * 37) % 50);         // Амортизация основного капитала (Depreciation)
    const netForeignFactor = 20 + ((s * 5) % 30);      // Чистые факторные доходы из-за рубежа (NFFI)

    const exactGDP = wages + rent + interest + proprietors + dividends + retainedEarnings + corpTax + indirectTaxes + depreciation + netForeignFactor;

    // 2. РАСХОДНЫЙ МЕТОД (Expenditure Approach / GDP) — строго равен exactGDP
    const consumption = Math.round(exactGDP * 0.56);   // Потребительские расходы домохозяйств (C)
    const govPurchases = Math.round(exactGDP * 0.19);  // Государственные закупки товаров и услуг (G)
    const netExports = 15 + ((s * 9) % 35);            // Чистый экспорт (NX = X - M)
    const investment = exactGDP - consumption - govPurchases - netExports; // Валовые частные инвестиции (I)

    // 3. ЛОВУШКИ / СТАТЬИ, НЕ ВХОДЯЩИЕ В ВВП (Exclude / Not in GDP)
    const socialTransfers = 85 + ((s * 14) % 50);      // Государственные социальные выплаты и пенсии (Transfers)
    const budgetDeficit = 35 + ((s * 16) % 40);        // Дефицит государственного бюджета
    const publicDebt = 420 + ((s * 41) % 250);         // Накопленный государственный долг
    const householdSavings = 95 + ((s * 21) % 65);     // Личные сбережения домохозяйств
    const stockResales = 110 + ((s * 27) % 80);        // Перепродажа акций и подержанного жилья

    const items = [
        // Income items (10)
        {
            id: "wages",
            val: wages,
            cat: "income",
            en: "Compensation of Employees (Wages & Salaries)",
            ru: "Заработная плата наёмных работников"
        },
        {
            id: "rent",
            val: rent,
            cat: "income",
            en: "Rental Income of Persons",
            ru: "Рентный доход"
        },
        {
            id: "interest",
            val: interest,
            cat: "income",
            en: "Net Interest Income",
            ru: "Процентный доход"
        },
        {
            id: "proprietors",
            val: proprietors,
            cat: "income",
            en: "Proprietors' Income (Unincorporated Business)",
            ru: "Доход от собственности (некорпоративный сектор)"
        },
        {
            id: "dividends",
            val: dividends,
            cat: "income",
            en: "Corporate Dividends Paid",
            ru: "Дивиденды корпораций"
        },
        {
            id: "retained",
            val: retainedEarnings,
            cat: "income",
            en: "Undistributed Corporate Profits (Retained Earnings)",
            ru: "Нераспределённая прибыль корпораций"
        },
        {
            id: "corptax",
            val: corpTax,
            cat: "income",
            en: "Corporate Income Taxes (CIT)",
            ru: "Налог на прибыль корпораций (КПН)"
        },
        {
            id: "indtax",
            val: indirectTaxes,
            cat: "income",
            en: "Indirect Business Taxes (Sales & Excise Taxes)",
            ru: "Косвенные налоги на бизнес"
        },
        {
            id: "depr",
            val: depreciation,
            cat: "income",
            en: "Depreciation (Consumption of Fixed Capital)",
            ru: "Амортизация основного капитала"
        },
        {
            id: "nffi",
            val: netForeignFactor,
            cat: "income",
            en: "Net Foreign Factor Income (NFFI)",
            ru: "Чистые факторные доходы из-за рубежа"
        },

        // Expenditure items (4)
        {
            id: "cons",
            val: consumption,
            cat: "expenditure",
            en: "Personal Consumption Expenditures (C)",
            ru: "Потребительские расходы домохозяйств (C)"
        },
        {
            id: "inv",
            val: investment,
            cat: "expenditure",
            en: "Gross Private Domestic Investment (I)",
            ru: "Валовые частные внутренние инвестиции (I)"
        },
        {
            id: "gov",
            val: govPurchases,
            cat: "expenditure",
            en: "Government Purchases of Goods & Services (G)",
            ru: "Государственные закупки товаров и услуг (G)"
        },
        {
            id: "nx",
            val: netExports,
            cat: "expenditure",
            en: "Net Exports (NX = Exports − Imports)",
            ru: "Чистый экспорт (NX = Экспорт − Импорт)"
        },

        // Distractors / Not in GDP (5)
        {
            id: "transfers",
            val: socialTransfers,
            cat: "exclude",
            en: "Government Social Transfers & Pensions",
            ru: "Государственные социальные выплаты и пенсии"
        },
        {
            id: "deficit",
            val: budgetDeficit,
            cat: "exclude",
            en: "Annual Government Budget Deficit",
            ru: "Годовой дефицит государственного бюджета"
        },
        {
            id: "debt",
            val: publicDebt,
            cat: "exclude",
            en: "Accumulated National Public Debt",
            ru: "Накопленный государственный долг"
        },
        {
            id: "savings",
            val: householdSavings,
            cat: "exclude",
            en: "Personal Household Savings",
            ru: "Личные сбережения домохозяйств"
        },
        {
            id: "resales",
            val: stockResales,
            cat: "exclude",
            en: "Stock Market Resales & Used Housing Purchases",
            ru: "Перепродажа акций и покупка подержанного жилья"
        }
    ];

    // Детерминированное перемешивание строк для каждого студента
    const pseudoRandom = (seed) => {
        let x = Math.sin(seed * 73.133) * 31415.9265;
        return x - Math.floor(x);
    };

    let shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(pseudoRandom(s * 131 + i * 17) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return {
        exactGDP,
        items: shuffled
    };
}

// Сохраняем выбор студента при переключении языка EN/RU
const mc2Task2Selections = {};

function recordTask2Choice(itemId, value) {
    mc2Task2Selections[itemId] = value;
}

function renderTask2MC2(studentIdx, lang) {
    const container = document.getElementById('task2-container');
    if (!container) return;

    const data = getStudentGDPDataMC2(studentIdx);
    const isEn = lang === 'en';
    const unit = isEn ? 'bln ₸' : 'млрд ₸';

    const title = isEn
        ? 'Task 2: National Accounts Reconstruction & GDP Circular Flow (Sankey)'
        : 'Задание 2: Реконструкция СНС и кругооборот ВВП (диаграмма Санки)';
    const desc = isEn
        ? 'Classify all 19 macroeconomic indicators below into the Income Approach (GDI), Expenditure Approach (GDP), or Exclude (Not included in GDP). When you click "Build Sankey & Verify Balance", your selected flows will populate the diagram.'
        : 'Классифицируйте все 19 макроэкономических показателей ниже по методу доходов (GDI), методу расходов (GDP) или исключите статьи, не входящие в ВВП (Exclude). Нажмите «Построить потоки и проверить баланс», чтобы сформировать диаграмму Санки.';

    let rowsHTML = '';
    data.items.forEach((item, idx) => {
        const label = isEn ? item.en : item.ru;
        const savedChoice = mc2Task2Selections[item.id] || '';

        rowsHTML += `
            <tr class="border-b border-slate-800/80 hover:bg-slate-800/40 transition">
                <td class="py-2.5 px-3 text-xs text-slate-400 font-mono">${idx + 1}</td>
                <td class="py-2.5 px-3 text-xs md:text-sm text-slate-200 font-medium">${label}</td>
                <td class="py-2.5 px-3 text-right font-mono font-bold text-indigo-300 text-xs md:text-sm whitespace-nowrap">${item.val} ${unit}</td>
                <td class="py-2.5 px-2 text-center">
                    <div class="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800 gap-1">
                        <label class="cursor-pointer">
                            <input type="radio" name="t2-${item.id}" value="income" data-cat="${item.cat}" data-val="${item.val}" ${savedChoice === 'income' ? 'checked' : ''} onchange="recordTask2Choice('${item.id}', 'income')" class="peer sr-only">
                            <span class="block px-2.5 py-1 rounded text-[11px] font-bold text-slate-400 peer-checked:bg-sky-600 peer-checked:text-white transition">
                                ${isEn ? 'Income' : 'Доход'}
                            </span>
                        </label>
                        <label class="cursor-pointer">
                            <input type="radio" name="t2-${item.id}" value="expenditure" data-cat="${item.cat}" data-val="${item.val}" ${savedChoice === 'expenditure' ? 'checked' : ''} onchange="recordTask2Choice('${item.id}', 'expenditure')" class="peer sr-only">
                            <span class="block px-2.5 py-1 rounded text-[11px] font-bold text-slate-400 peer-checked:bg-emerald-600 peer-checked:text-white transition">
                                ${isEn ? 'Expend.' : 'Расход'}
                            </span>
                        </label>
                        <label class="cursor-pointer">
                            <input type="radio" name="t2-${item.id}" value="exclude" data-cat="${item.cat}" data-val="${item.val}" ${savedChoice === 'exclude' ? 'checked' : ''} onchange="recordTask2Choice('${item.id}', 'exclude')" class="peer sr-only">
                            <span class="block px-2.5 py-1 rounded text-[11px] font-bold text-slate-400 peer-checked:bg-slate-700 peer-checked:text-amber-300 transition">
                                ${isEn ? 'Not GDP' : 'Не ВВП'}
                            </span>
                        </label>
                    </div>
                </td>
            </tr>
        `;
    });

    container.innerHTML = `
        <div class="space-y-6">
            <!-- Header Card -->
            <div class="card p-6 border-t-2 border-indigo-500 space-y-2">
                <div class="flex flex-wrap justify-between items-center gap-3">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest">
                        ${isEn ? 'Task 2 • National Accounts' : 'Задание 2 • Система национальных счетов'}
                    </span>
                    <span class="text-xs font-mono text-slate-400">
                        ${isEn ? 'Variant #' + (studentIdx + 1) : 'Вариант №' + (studentIdx + 1)}
                    </span>
                </div>
                <h3 class="text-lg md:text-xl font-bold text-white">${title}</h3>
                <p class="text-xs md:text-sm text-slate-300 leading-relaxed">${desc}</p>
            </div>

            <!-- Main Two-Column Workspace -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                
                <!-- Left: Classification Table -->
                <div class="xl:col-span-6 card p-4 overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="border-b border-slate-700 text-[11px] uppercase tracking-wider text-slate-400">
                                <th class="py-2 px-3">#</th>
                                <th class="py-2 px-3">${isEn ? 'Macroeconomic Indicator' : 'Макроэкономический показатель'}</th>
                                <th class="py-2 px-3 text-right">${isEn ? 'Value' : 'Сумма'}</th>
                                <th class="py-2 px-2 text-center">${isEn ? 'Classification' : 'Метод / Статус'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rowsHTML}
                        </tbody>
                    </table>

                    <div class="mt-4 pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center gap-3">
                        <button onclick="resetTask2MC2()" class="px-4 py-2.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition">
                            <i class="fas fa-undo mr-1.5"></i> ${isEn ? 'Clear Selections' : 'Сбросить выбор'}
                        </button>
                        <button onclick="buildTask2Sankey()" class="px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-950/50 transition">
                            <i class="fas fa-project-diagram mr-1.5"></i> ${isEn ? 'Build Sankey & Check Equilibrium' : 'Построить Санки и Проверить Баланс'}
                        </button>
                    </div>
                </div>

                <!-- Right: Indicators & Sankey Canvas -->
                <div class="xl:col-span-6 space-y-4">
                    <!-- Summary KPI Strip -->
                    <div class="grid grid-cols-3 gap-3">
                        <div class="card p-3.5 text-center border-b-2 border-sky-500/50">
                            <span class="text-[10px] font-mono uppercase text-slate-400 block">${isEn ? 'Total Income (GDI)' : 'Доходный метод (GDI)'}</span>
                            <span id="t2-gdi-val" class="text-base md:text-lg font-black text-sky-400">0 ${unit}</span>
                        </div>
                        <div class="card p-3.5 text-center border-b-2 border-emerald-500/50">
                            <span class="text-[10px] font-mono uppercase text-slate-400 block">${isEn ? 'Total Expenditure (GDP)' : 'Расходный метод (GDP)'}</span>
                            <span id="t2-gdp-val" class="text-base md:text-lg font-black text-emerald-400">0 ${unit}</span>
                        </div>
                        <div class="card p-3.5 text-center border-b-2 border-indigo-500/50">
                            <span class="text-[10px] font-mono uppercase text-slate-400 block">${isEn ? 'Equilibrium Status' : 'Статус баланса'}</span>
                            <span id="t2-balance-val" class="text-xs md:text-sm font-black text-slate-400">—</span>
                        </div>
                    </div>

                    <!-- Equilibrium Banner (appears when GDI === GDP > 0) -->
                    <div id="t2-eq-banner" class="hidden rounded-xl p-4 bg-gradient-to-r from-sky-950/80 via-indigo-950/80 to-emerald-950/80 border border-sky-500/40 flex items-center justify-between gap-3">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 text-lg">
                                <i class="fas fa-balance-scale"></i>
                            </div>
                            <div>
                                <div class="text-xs md:text-sm font-black uppercase tracking-wider text-sky-300" id="t2-eq-title">
                                    ${isEn ? 'MACROECONOMIC EQUILIBRIUM: GDI = GDP' : 'МАКРОЭКОНОМИЧЕСКОЕ РАВНОВЕСИЕ: GDI = GDP'}
                                </div>
                                <div class="text-xs text-slate-300" id="t2-eq-sub">
                                    ${isEn ? 'Income and expenditure flows match.' : 'Потоки доходов и расходов полностью сбалансированы.'}
                                </div>
                            </div>
                        </div>
                        <span class="font-mono font-black text-base md:text-lg text-emerald-300" id="t2-eq-total">0 ${unit}</span>
                    </div>

                    <!-- White Board for Google Sankey Chart -->
                    <div class="bg-white rounded-2xl border border-slate-300 p-4 shadow-xl min-h-[480px] flex flex-col justify-center">
                        <div id="t2-sankey-placeholder" class="text-center text-slate-500 py-20 px-4 space-y-2">
                            <i class="fas fa-stream text-3xl text-slate-300"></i>
                            <p class="text-sm font-semibold text-slate-600">
                                ${isEn ? 'Sankey Diagram is currently empty' : 'Диаграмма Санки пока пуста'}
                            </p>
                            <p class="text-xs text-slate-400 max-w-sm mx-auto">
                                ${isEn ? 'Select Income, Expenditure, or Not GDP for the indicators on the left, then click "Build Sankey & Check Equilibrium".' : 'Распределите показатели слева по категориям «Доход», «Расход» или «Не ВВП», затем нажмите кнопку построения диаграммы.'}
                            </p>
                        </div>
                        <div id="t2-sankey-canvas" class="w-full h-[460px] hidden"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Если студент уже нажимал кнопку построения до смены языка EN/RU, перерисуем диаграмму на новом языке
    if (Object.keys(mc2Task2Selections).length > 0 && window.mc2Task2HasBuilt) {
        setTimeout(() => buildTask2Sankey(true), 100);
    }
}

function resetTask2MC2() {
    Object.keys(mc2Task2Selections).forEach(k => delete mc2Task2Selections[k]);
    window.mc2Task2HasBuilt = false;
    if (typeof currentStudentIdx !== 'undefined' && currentStudentIdx !== -1) {
        renderTask2MC2(currentStudentIdx, currentLang);
    }
}

function buildTask2Sankey(silent = false) {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) return;
    const isEn = currentLang === 'en';
    const unit = isEn ? 'bln ₸' : 'млрд ₸';
    const dataObj = getStudentGDPDataMC2(currentStudentIdx);

    let incomeItems = [];
    let expItems = [];
    let sumGDI = 0;
    let sumGDP = 0;
    let classifiedCount = 0;

    dataObj.items.forEach(item => {
        const checked = document.querySelector(`input[name="t2-${item.id}"]:checked`);
        if (checked) {
            classifiedCount++;
            const choice = checked.value;
            mc2Task2Selections[item.id] = choice;
            const shortLabel = isEn ? item.en.split(' (')[0] : item.ru.split(' (')[0];

            if (choice === 'income') {
                sumGDI += item.val;
                incomeItems.push({ label: `${shortLabel} (${item.val})`, val: item.val });
            } else if (choice === 'expenditure') {
                sumGDP += item.val;
                expItems.push({ label: `${shortLabel} (${item.val})`, val: item.val });
            }
        }
    });

    if (classifiedCount === 0) {
        if (!silent && typeof notify === 'function') {
            notify(isEn ? "Please classify at least one indicator first!" : "Сначала выберите категорию хотя бы для одного показателя!", true);
        }
        return;
    }

    window.mc2Task2HasBuilt = true;

    document.getElementById('t2-gdi-val').innerText = `${sumGDI} ${unit}`;
    document.getElementById('t2-gdp-val').innerText = `${sumGDP} ${unit}`;

    const diff = sumGDI - sumGDP;
    const balEl = document.getElementById('t2-balance-val');
    const eqBanner = document.getElementById('t2-eq-banner');

    if (diff === 0 && sumGDI > 0) {
        balEl.innerText = isEn ? `Balanced (Δ = 0)` : `Равно (Δ = 0)`;
        balEl.className = "text-xs md:text-sm font-black text-sky-400";
        eqBanner.classList.remove('hidden');
        document.getElementById('t2-eq-total').innerText = `${sumGDI} ${unit}`;
    } else {
        const sign = diff > 0 ? '+' : '';
        balEl.innerText = isEn ? `Gap: ${sign}${diff} ${unit}` : `Перекос: ${sign}${diff} ${unit}`;
        balEl.className = "text-xs md:text-sm font-black text-amber-400";
        eqBanner.classList.add('hidden');
    }

    const placeholder = document.getElementById('t2-sankey-placeholder');
    const canvasEl = document.getElementById('t2-sankey-canvas');

    if (incomeItems.length === 0 && expItems.length === 0) {
        placeholder.classList.remove('hidden');
        canvasEl.classList.add('hidden');
        return;
    }

    placeholder.classList.add('hidden');
    canvasEl.classList.remove('hidden');

    const drawChart = () => {
        if (!google || !google.visualization || !google.visualization.Sankey) {
            setTimeout(drawChart, 200);
            return;
        }
        const chart = new google.visualization.Sankey(canvasEl);
        const dt = new google.visualization.DataTable();
        dt.addColumn('string', 'From');
        dt.addColumn('string', 'To');
        dt.addColumn('number', 'Weight');

        const centerIncomeNode = isEn ? `Total GDI (${sumGDI})` : `Доходы GDI (${sumGDI})`;
        const centerExpNode = isEn ? `Total GDP (${sumGDP})` : `Расходы GDP (${sumGDP})`;

        const rows = [];
        incomeItems.forEach(inc => {
            rows.push([inc.label, centerIncomeNode, Math.max(1, inc.val)]);
        });

        // Связующий мост между GDI и GDP, если оба потока непустые
        if (incomeItems.length > 0 && expItems.length > 0) {
            rows.push([centerIncomeNode, centerExpNode, Math.max(1, Math.min(sumGDI, sumGDP))]);
        }

        expItems.forEach(exp => {
            rows.push([centerExpNode, exp.label, Math.max(1, exp.val)]);
        });

        dt.addRows(rows);

        const options = {
            sankey: {
                node: {
                    colors: ['#0284c7', '#2563eb', '#0ea5e9', '#38bdf8', '#6366f1', '#8b5cf6', '#10b981', '#059669', '#14b8a6', '#f59e0b'],
                    label: {
                        fontName: 'Inter',
                        fontSize: 11,
                        color: '#0f172a',
                        bold: true
                    },
                    nodePadding: 14,
                    width: 14
                },
                link: {
                    colorMode: 'gradient'
                }
            }
        };

        chart.draw(dt, options);
    };

    drawChart();
}
