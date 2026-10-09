// ==========================================
// MIDTERM CONTROL 1 • QUESTIONS DATABASE
// AlmaU SDTE 2026 • International Business
// ==========================================

const STUDENTS_LIST = [
    "Hebatallah Aldada", 
    "Абдихай Салтанат Жалғасқызы", 
    "Абдрахманов Бабур Хамза улы",
    "Адильхан Надия Берікқызы", 
    "Бахытов Алимжан Бахыткалиулы", 
    "Берикбаланова Адина Сериковна",
    "Жұмажан Осман Дарменұлы", 
    "Замотина Дарья Астемировна", 
    "Кабдрахманова Ажар Ниязовна",
    "Ким Есфирь Севастьяновна", 
    "Кожахметова Малика Азаматовна", 
    "Көшкінбай Айару Арманқызы",
    "Сериккалиева Еңлік Думанқызы", 
    "Степанченко Савелий Дмитриевич", 
    "Сулейменова Айдана Нурлановна",
    "Толстова Эвелина Евгеньевна", 
    "Хусаинова Адия Галимовна", 
    "Шабанов Анварбек", 
    "Югай Ксения Альбертовна"
];

const PART1_POOL = [
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

const PART2_POOL = [
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

// Графические сценарии для вопроса 2.6
const GRAPH_SCENARIOS = [
    {
        type: "demand_shift_right",
        title_en: "Question 2.6 • Demand Shift Analysis",
        title_ru: "Вопрос 2.6 • Анализ сдвига спроса",
        prompt_en: "An increase in consumer income for a normal good causes the demand curve to shift rightward from D1 to D2. Which option accurately describes this market movement?",
        prompt_ru: "Рост доходов потребителей для нормального товара вызывает сдвиг кривой спроса вправо из D1 в D2. Какое утверждение верно описывает это изменение?",
        opts_en: [
            "A) Increase in Demand (Demand curve D shifts rightward)",
            "B) Decrease in Demand (Demand curve D shifts leftward)",
            "C) Increase in Quantity Demanded (Point moves down along D)",
            "D) Decrease in Supply (Supply curve S shifts leftward)",
            "E) No change in equilibrium position"
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
        title_en: "Question 2.6 • Quantity Demanded Movement",
        title_ru: "Вопрос 2.6 • Изменение величины спроса",
        prompt_en: "A reduction in product price causes equilibrium point E1 to move down along the blue demand curve D to E2. How is this change classified?",
        prompt_ru: "Снижение цены товара вызывает перемещение точки равновесия E1 вниз вдоль синей кривой спроса D в точку E2. Как классифицируется это изменение?",
        opts_en: [
            "A) Increase in Quantity Demanded (Point moves down-right along D curve)",
            "B) Increase in Demand (Demand curve shifts rightward)",
            "C) Decrease in Demand (Demand curve shifts leftward)",
            "D) Increase in Supply (Supply curve shifts rightward)",
            "E) Decrease in Quantity Supplied"
        ],
        opts_ru: [
            "A) Увеличение величины спроса (Точка перемещается вниз-вправо вдоль кривой D)",
            "B) Увеличение спроса (Кривая спроса D сдвигается вправо)",
            "C) Уменьшение спроса (Кривая спроса D сдвигается влево)",
            "D) Увеличение предложения (Кривая предложения S сдвигается вправо)",
            "E) Уменьшение величины предложения"
        ],
        ans: "A"
    },
    {
        type: "supply_shift_right",
        title_en: "Question 2.6 • Supply Shift Analysis",
        title_ru: "Вопрос 2.6 • Анализ сдвига предложения",
        prompt_en: "A technological innovation lowers unit production costs, shifting the red supply curve S1 rightward to S2. Identify the correct economic event:",
        prompt_ru: "Технологический прогресс снижает издержки производства, сдвигая красную кривую предложения S1 вправо в S2. Укажите правильный экономический процесс:",
        opts_en: [
            "A) Increase in Supply (Supply curve S shifts rightward)",
            "B) Decrease in Supply (Supply curve S shifts leftward)",
            "C) Increase in Quantity Supplied (Point moves up along S)",
            "D) Increase in Demand (Demand curve D shifts rightward)",
            "E) Elasticity of demand becomes zero"
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
        title_en: "Question 2.6 • Quantity Supplied Movement",
        title_ru: "Вопрос 2.6 • Изменение величины предложения",
        prompt_en: "An increase in market price leads to a movement from E1 upward along the red supply curve S to E2. What does this movement signify?",
        prompt_ru: "Рост рыночной цены приводит к перемещению точки из E1 вверх вдоль красной кривой предложения S в E2. Что означает это перемещение?",
        opts_en: [
            "A) Increase in Quantity Supplied (Point moves up-right along S curve)",
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

function renderQuestionsP1P2(studentIdx, lang) {
    // Рендеринг Части 1 (4 вопроса)
    const container1 = document.getElementById('part1-container');
    if (container1) {
        container1.innerHTML = '';
        PART1_POOL.forEach((qObj, i) => {
            const qText = lang === 'en' ? qObj.q_en : qObj.q_ru;
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;
            container1.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 1.${i + 1}</span>
                    <h4 class="text-base md:text-lg font-bold text-slate-100 leading-snug">${qText}</h4>
                    <div class="space-y-2.5 pt-1">
                        ${opts.map((opt, oIdx) => `
                            <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                                <input type="radio" name="p1-q${i+1}" value="${String.fromCharCode(65 + oIdx)}" class="mt-1 accent-indigo-500 w-4 h-4">
                                <span>\${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
    }

    // Рендеринг Части 2 (5 вопросов + 1 вопрос с графиком)
    const container2 = document.getElementById('part2-container');
    if (container2) {
        container2.innerHTML = '';
        PART2_POOL.forEach((qObj, i) => {
            const qText = lang === 'en' ? qObj.q_en : qObj.q_ru;
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;
            container2.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 2.${i + 1}</span>
                    <h4 class="text-base md:text-lg font-bold text-slate-100 leading-snug">${qText}</h4>
                    <div class="space-y-2.5 pt-1">
                        ${opts.map((opt, oIdx) => `
                            <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                                <input type="radio" name="p2-q${i+1}" value="${String.fromCharCode(65 + oIdx)}" class="mt-1 accent-indigo-500 w-4 h-4">
                                <span>\${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        // Вопрос 2.6 с динамическим Canvas графиком
        const sc = GRAPH_SCENARIOS[studentIdx % GRAPH_SCENARIOS.length];
        const title = lang === 'en' ? sc.title_en : sc.title_ru;
        const prompt = lang === 'en' ? sc.prompt_en : sc.prompt_ru;
        const opts = lang === 'en' ? sc.opts_en : sc.opts_ru;

        container2.innerHTML += `
            <div class="card p-6 space-y-4 border-t-2 border-indigo-500 md:col-span-2">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">${title}</span>
                <p class="text-base md:text-lg font-bold text-slate-100 leading-snug">${prompt}</p>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                    <div class="lg:col-span-5 bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-center shadow-inner">
                        <canvas id="marketCanvas" width="300" height="200"></canvas>
                    </div>
                    <div class="lg:col-span-7 space-y-2.5">
                        ${opts.map((opt, oIdx) => `
                            <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                                <input type="radio" name="p2-q6" value="\${String.fromCharCode(65 + oIdx)}" class="mt-1 accent-indigo-500 w-4 h-4">
                                <span>\${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => drawScenarioGraph(sc.type), 150);
    }
}

function drawScenarioGraph(type) {
    const cvs = document.getElementById('marketCanvas');
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    // Оси координат P и Q
    ctx.strokeStyle = '#64748b'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(35, 15); ctx.lineTo(35, 165); ctx.lineTo(280, 165); ctx.stroke();
    ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 12px Inter';
    ctx.fillText('P', 15, 25); ctx.fillText('Q', 265, 185);

    if (type === 'demand_shift_right') {
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(45, 45); ctx.lineTo(190, 155); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D1', 195, 160);

        ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2.5; ctx.setLineDash([5,5]);
        ctx.beginPath(); ctx.moveTo(90, 45); ctx.lineTo(235, 155); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillText('D2', 240, 160);

        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(55, 155); ctx.lineTo(225, 35); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S', 230, 40);
    } else if (type === 'demand_point_move') {
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(55, 35); ctx.lineTo(240, 155); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D', 245, 160);

        ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(110, 71, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillText('E1', 120, 68);
        ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(185, 120, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillText('E2', 195, 118);
    } else if (type === 'supply_shift_right') {
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(55, 35); ctx.lineTo(230, 155); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D', 235, 160);

        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(45, 145); ctx.lineTo(190, 35); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S1', 195, 40);

        ctx.strokeStyle = '#fb7185'; ctx.lineWidth = 2.5; ctx.setLineDash([5,5]);
        ctx.beginPath(); ctx.moveTo(90, 145); ctx.lineTo(235, 35); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillText('S2', 240, 40);
    } else {
        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(55, 155); ctx.lineTo(240, 35); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S', 245, 40);

        ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(110, 120, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillText('E1', 120, 122);
        ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(185, 71, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillText('E2', 195, 73);
    }
}
