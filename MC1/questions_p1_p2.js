// Database of Enrolled Students for Validation
const STUDENTS_LIST = [
    "Hebatallah Aldada", "Абдихай Салтанат Жалғасқызы", "Абдрахманов Бабур Хамза улы",
    "Адильхан Надия Берікқызы", "Бахытов Алимжан Бахыткалиулы", "Берикбаланова Адина Сериковна",
    "Жұмажан Осман Дарменұлы", "Замотина Дарья Астемировна", "Кабдрахманова Ажар Ниязовна",
    "Ким Есфирь Севастьяновна", "Кожахметова Малика Азаматовна", "Көшкінбай Айару Арманқызы",
    "Сериккалиева Еңлік Думанқызы", "Степанченко Савелий Дмитриевич", "Сулейменова Айдана Нурлановна",
    "Толстова Эвелина Евгеньевна", "Хусаинова Адия Галимовна", "Шабанов Анварбек", "Югай Ксения Альбертовна"
];

// Part 1 Questions (4 Questions, 5 Full Options Each)
const PART1_DATA = [
    {
        q_en: "Microeconomics is primarily defined as the study of?",
        q_ru: "Микроэкономика в первую очередь изучает?",
        opts_en: [
            "A) How households and firms make decisions under resource scarcity",
            "B) National inflation rates and aggregate unemployment levels",
            "C) How sovereign debt impacts global capital movements",
            "D) Methods for central bank monetary base expansion",
            "E) Gross domestic product calculation methodologies"
        ],
        opts_ru: [
            "A) Как домохозяйства и фирмы принимают решения в условиях ограниченности ресурсов",
            "B) Уровень инфляции в стране и агрегированную безработицу",
            "C) Влияние государственного долга на мировые потоки капитала",
            "D) Методы расширения денежной базы центральным банком",
            "E) Методологию расчета валового внутреннего продукта"
        ],
        ans: "A"
    },
    {
        q_en: "Scarcity exists in economic theory primarily because?",
        q_ru: "Проблема ограниченности (редкости) в экономической теории существует потому, что?",
        opts_en: [
            "A) Physical supplies of land and natural capital are infinite",
            "B) Human wants and desires exceed available productive capacity",
            "C) Industrial machinery does not suffer from physical depreciation",
            "D) Population growth eliminates market structural unemployment",
            "E) State planning completely prevents free market pricing"
        ],
        opts_ru: [
            "A) Физические запасы земли и капитала бесконечны",
            "B) Человеческие потребности превышают имеющиеся производственные возможности",
            "C) Промышленное оборудование не подвержено физическому износу",
            "D) Рост населения полностью устраняет структурную безработицу",
            "E) Государственное планирование полностью исключает рыночные цены"
        ],
        ans: "B"
    },
    {
        q_en: "An indifference curve graphically illustrates?",
        q_ru: "Кривая безразличия графически показывает?",
        opts_en: [
            "A) Consumption bundles that yield identical total utility to the consumer",
            "B) Alternative combinations of goods providing different satisfaction levels",
            "C) Production possibility frontiers achieved by two competing firms",
            "D) The direct functional relationship between price and quantity supplied",
            "E) Total production cost trajectories as output scales"
        ],
        opts_ru: [
            "A) Наборы потребления, обеспечивающие потребителю одинаковый уровень полезности",
            "B) Комбинации товаров, предоставляющие различный уровень удовлетворения",
            "C) Границы производственных возможностей двух конкурирующих фирм",
            "D) Прямую функциональную зависимость между ценой и предложением",
            "E) Динамику совокупных издержек по мере масштабирования выпуска"
        ],
        ans: "A"
    },
    {
        q_en: "Who is most interested in maximizing marginal utility in an economy?",
        q_ru: "Кто в наибольшей степени заинтересован в максимизации предельной полезности?",
        opts_en: [
            "A) Commercial property landlords",
            "B) Rational individual consumers",
            "C) Corporate business employers",
            "D) Central government regulators",
            "E) Commercial banking institutions"
        ],
        opts_ru: [
            "A) Собственники коммерческой недвижимости",
            "B) Рациональные индивидуальные потребители",
            "C) Работодатели и корпорации",
            "D) Центральные государственные регуляторы",
            "E) Коммерческие банковские институты"
        ],
        ans: "B"
    }
];

// Part 2 Questions (5 Standard MCQs + 1 Graph Interactive Question)
const PART2_DATA = [
    {
        q_en: "A perfectly elastic demand curve is represented graphically as?",
        q_ru: "Совершенно эластичная кривая спроса выглядит на графике как?",
        opts_en: [
            "A) A strictly vertical line",
            "B) A strictly horizontal line",
            "C) A negatively sloped linear curve",
            "D) A positively sloped supply line",
            "E) A 45-degree origin ray"
        ],
        opts_ru: [
            "A) Строго вертикальная линия",
            "B) Строго горизонтальная линия",
            "C) Линейная кривая с отрицательным наклоном",
            "D) Линия предложения с положительным наклоном",
            "E) Луч из начала координат под углом 45 градусов"
        ],
        ans: "B"
    },
    {
        q_en: "Which factor causes a movement along the demand curve rather than a shift?",
        q_ru: "Какой фактор вызывает изменение величины спроса (движение вдоль кривой), а не сдвиг самой кривой?",
        opts_en: [
            "A) A sudden shift in consumer tastes",
            "B) An increase in household disposable income",
            "C) A change in the market price of the good itself",
            "D) Expected future inflation adjustment",
            "E) A price rise in complementary commodities"
        ],
        opts_ru: [
            "A) Внезапное изменение вкусов потребителей",
            "B) Рост располагаемого дохода домохозяйств",
            "C) Изменение рыночной цены самого данного товара",
            "D) Ожидания будущего роста цен",
            "E) Рост цен на сопряженные сопутствующие товары"
        ],
        ans: "C"
    },
    {
        q_en: "Which of the following constitutes a variable cost for a manufacturing firm?",
        q_ru: "Что из перечисленного относится к переменным издержкам производственной фирмы?",
        opts_en: [
            "A) Monthly factory building lease",
            "B) Purchase costs of raw materials",
            "C) Annual bank loan interest pay",
            "D) Long-term equipment depreciation",
            "E) Executive management base salary"
        ],
        opts_ru: [
            "A) Ежемесячная аренда производственного здания",
            "B) Затраты на приобретение сырья и материалов",
            "C) Проценты по долгосрочному банковскому кредиту",
            "D) Амортизация промышленного оборудования",
            "E) Оклад высшего управленческого персонала"
        ],
        ans: "B"
    },
    {
        q_en: "In the long run economic horizon, production costs are classified such that?",
        q_ru: "В долгосрочном периоде издержки производства классифицируются следующим образом:",
        opts_en: [
            "A) All production inputs and costs are variable",
            "B) All costs remain strictly fixed",
            "C) Costs are divided into fixed and marginal only",
            "D) Fixed overheads dominate variable expenses",
            "E) Capital costs cannot be adjusted"
        ],
        opts_ru: [
            "A) Все факторы производства и издержки являются переменными",
            "B) Все издержки остаются строго постоянными",
            "C) Издержки делятся только на постоянные и предельные",
            "D) Постоянные накладные расходы превышают переменные",
            "E) Затраты на капитал не могут быть изменены"
        ],
        ans: "A"
    },
    {
        q_en: "Which market structure features product differentiation and active non-price competition?",
        q_ru: "Для какой рыночной структуры характерны дифференциация продукта и неценовая конкуренция?",
        opts_en: [
            "A) Pure Competition",
            "B) Monopolistic Competition",
            "C) Pure Monopoly",
            "D) Monopsony",
            "E) Cartel Duopoly"
        ],
        opts_ru: [
            "A) Совершенная конкуренция",
            "B) Монополистическая конкуренция",
            "C) Чистая монополия",
            "D) Монопсония",
            "E) Картельный дуополия"
        ],
        ans: "B"
    }
];

// Interactive Market Graph Scenarios for Question 2.6
const GRAPH_SCENARIOS_DATA = [
    {
        type: "demand_shift_right",
        title_en: "Question 2.6 • Market Graph: Demand Shift",
        title_ru: "Вопрос 2.6 • Рыночный график: Сдвиг спроса",
        prompt_en: "An increase in consumer disposable income for a normal good causes the market demand curve to shift rightward from D1 to D2. Identify the correct economic event:",
        prompt_ru: "Рост располагаемого дохода потребителей для нормального товара вызывает сдвиг кривой спроса вправо из D1 в D2. Укажите правильный экономический процесс:",
        opts_en: [
            "A) Increase in Demand (Demand curve D shifts rightward)",
            "B) Decrease in Demand (Demand curve D shifts leftward)",
            "C) Increase in Quantity Demanded (Point moves down along D)",
            "D) Decrease in Supply (Supply curve S shifts leftward)",
            "E) No change in market equilibrium position"
        ],
        opts_ru: [
            "A) Увеличение спроса (Кривая спроса D сдвигается вправо)",
            "B) Уменьшение спроса (Кривая спроса D сдвигается влево)",
            "C) Увеличение величины спроса (Точка перемещается вниз вдоль D)",
            "D) Уменьшение предложения (Кривая предложения S сдвигается влево)",
            "E) Равновесие на рынке не изменяется"
        ],
        ans: "A"
    },
    {
        type: "demand_point_move",
        title_en: "Question 2.6 • Market Graph: Quantity Demanded",
        title_ru: "Вопрос 2.6 • Рыночный график: Величина спроса",
        prompt_en: "A reduction in market price causes point E1 to move down-right along the blue demand curve D to E2. How is this adjustment classified?",
        prompt_ru: "Снижение цены товара вызывает перемещение точки равновесия E1 вниз-вправо вдоль синей кривой спроса D в точку E2. Как классифицируется это изменение?",
        opts_en: [
            "A) Increase in Quantity Demanded (Point moves down along D)",
            "B) Increase in Demand (Demand curve shifts rightward)",
            "C) Decrease in Demand (Demand curve shifts leftward)",
            "D) Increase in Supply (Supply curve shifts rightward)",
            "E) Decrease in Quantity Supplied"
        ],
        opts_ru: [
            "A) Увеличение величины спроса (Точка перемещается вниз-вправо вдоль D)",
            "B) Увеличение спроса (Кривая спроса D сдвигается вправо)",
            "C) Уменьшение спроса (Кривая спроса D сдвигается влево)",
            "D) Увеличение предложения (Кривая предложения S сдвигается вправо)",
            "E) Уменьшение величины предложения"
        ],
        ans: "A"
    },
    {
        type: "supply_shift_right",
        title_en: "Question 2.6 • Market Graph: Supply Shift",
        title_ru: "Вопрос 2.6 • Рыночный график: Сдвиг предложения",
        prompt_en: "A technological breakthrough lowers marginal costs, shifting the supply curve rightward from S1 to S2. Identify the correct event:",
        prompt_ru: "Технологический прогресс снижает предельные издержки, сдвигая кривую предложения вправо из S1 в S2. Укажите правильное событие:",
        opts_en: [
            "A) Increase in Supply (Supply curve S shifts rightward)",
            "B) Decrease in Supply (Supply curve S shifts leftward)",
            "C) Increase in Quantity Supplied (Point moves up along S)",
            "D) Increase in Demand (Demand curve D shifts rightward)",
            "E) Demand price elasticity falls to zero"
        ],
        opts_ru: [
            "A) Увеличение предложения (Кривая предложения S сдвигается вправо)",
            "B) Уменьшение предложения (Кривая предложения S сдвигается влево)",
            "C) Увеличение величины предложения (Точка перемещается вверх вдоль S)",
            "D) Увеличение спроса (Кривая спроса D сдвигается вправо)",
            "E) Эластичность спроса становится равной нулю"
        ],
        ans: "A"
    },
    {
        type: "supply_point_move",
        title_en: "Question 2.6 • Market Graph: Quantity Supplied",
        title_ru: "Вопрос 2.6 • Рыночный график: Величина предложения",
        prompt_en: "An increase in product market price leads to a movement from E1 upward along the red supply curve S to E2. What does this movement represent?",
        prompt_ru: "Рост рыночной цены приводит к перемещению точки из E1 вверх вдоль красной кривой предложения S в E2. Что означает это перемещение?",
        opts_en: [
            "A) Increase in Quantity Supplied (Point moves up along S)",
            "B) Increase in Supply (Supply curve shifts rightward)",
            "C) Decrease in Supply (Supply curve shifts leftward)",
            "D) Decrease in Demand (Demand curve shifts leftward)",
            "E) Perfect elasticity of supply"
        ],
        opts_ru: [
            "A) Увеличение величины предложения (Точка перемещается вверх-вправо вдоль S)",
            "B) Увеличение предложения (Кривая предложения S сдвигается вправо)",
            "C) Уменьшение предложения (Кривая предложения S сдвигается влево)",
            "D) Уменьшение спроса (Кривая спроса D сдвигается влево)",
            "E) Совершенная эластичность предложения"
        ],
        ans: "A"
    }
];

// Main Render Function for Parts 1 & 2
function renderQuestionsP1P2(seed, lang) {
    // Render Part 1
    const p1Container = document.getElementById('part1-container');
    if (p1Container) {
        p1Container.innerHTML = '';
        PART1_DATA.forEach((qObj, i) => {
            const qText = lang === 'en' ? qObj.q_en : qObj.q_ru;
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;
            p1Container.innerHTML += `
                <div class="card p-5 space-y-3 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-[9px] bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 1.${i + 1}</span>
                    <h4 class="text-sm font-bold text-slate-200">${qText}</h4>
                    <div class="space-y-2 text-xs">
                        ${opts.map((opt, oIdx) => `
                            <label class="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 hover:bg-slate-800 cursor-pointer transition">
                                <input type="radio" name="p1-q${i+1}" value="${String.fromCharCode(65 + oIdx)}" class="mt-0.5 accent-indigo-500">
                                <span>\${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
    }

    // Render Part 2
    const p2Container = document.getElementById('part2-container');
    if (p2Container) {
        p2Container.innerHTML = '';
        PART2_DATA.forEach((qObj, i) => {
            const qText = lang === 'en' ? qObj.q_en : qObj.q_ru;
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;
            p2Container.innerHTML += `
                <div class="card p-5 space-y-3 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-[9px] bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 2.${i + 1}</span>
                    <h4 class="text-sm font-bold text-slate-200">${qText}</h4>
                    <div class="space-y-2 text-xs">
                        ${opts.map((opt, oIdx) => `
                            <label class="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 hover:bg-slate-800 cursor-pointer transition">
                                <input type="radio" name="p2-q${i+1}" value="${String.fromCharCode(65 + oIdx)}" class="mt-0.5 accent-indigo-500">
                                <span>\${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        // Question 2.6 Interactive Graph Scenario
        const sc = GRAPH_SCENARIOS_DATA[seed % GRAPH_SCENARIOS_DATA.length];
        const title = lang === 'en' ? sc.title_en : sc.title_ru;
        const prompt = lang === 'en' ? sc.prompt_en : sc.prompt_ru;
        const opts = lang === 'en' ? sc.opts_en : sc.opts_ru;

        p2Container.innerHTML += `
            <div class="card p-5 space-y-3 border-t-2 border-indigo-500 md:col-span-2">
                <span class="text-[9px] bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">${title}</span>
                <p class="text-xs text-slate-300 leading-relaxed font-semibold">${prompt}</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-2">
                    <div class="md:col-span-5 bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-center">
                        <canvas id="marketCanvas" width="280" height="180"></canvas>
                    </div>
                    <div class="md:col-span-7 space-y-2 text-xs">
                        ${opts.map((opt, oIdx) => `
                            <label class="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 hover:bg-slate-800 cursor-pointer transition">
                                <input type="radio" name="p2-q6" value="\${String.fromCharCode(65 + oIdx)}" class="mt-0.5 accent-indigo-500">
                                <span>\${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => drawScenarioGraphCanvas(sc.type), 100);
    }
}

// Canvas Drawing Engine for Question 2.6
function drawScenarioGraphCanvas(type) {
    const cvs = document.getElementById('marketCanvas');
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    // Axes
    ctx.strokeStyle = '#64748b'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(30, 10); ctx.lineTo(30, 150); ctx.lineTo(260, 150); ctx.stroke();
    ctx.fillStyle = '#94a3b8'; ctx.font = '10px Inter';
    ctx.fillText('P', 15, 20); ctx.fillText('Q', 245, 165);

    if (type === 'demand_shift_right') {
        // D1
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(40, 40); ctx.lineTo(180, 140); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D1', 185, 145);
        // D2
        ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(80, 40); ctx.lineTo(220, 140); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillText('D2', 225, 145);
        // S
        ctx.strokeStyle = '#f43f5e'; ctx.beginPath(); ctx.moveTo(50, 140); ctx.lineTo(210, 30); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S', 215, 35);
    } else if (type === 'demand_point_move') {
        // D
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(50, 30); ctx.lineTo(220, 140); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D', 225, 145);
        // Points
        ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(100, 62, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillText('E1', 108, 60);
        ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(170, 108, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillText('E2', 178, 106);
    } else if (type === 'supply_shift_right') {
        // D
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(50, 30); ctx.lineTo(210, 140); ctx.stroke();
        // S1
        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(40, 130); ctx.lineTo(180, 30); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S1', 185, 35);
        // S2
        ctx.strokeStyle = '#fb7185'; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(80, 130); ctx.lineTo(220, 30); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillText('S2', 225, 35);
    } else {
        // Supply Point Move
        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(50, 140); ctx.lineTo(220, 30); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S', 225, 35);
        ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(100, 108, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillText('E1', 108, 110);
        ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(170, 62, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillText('E2', 178, 64);
    }
}
