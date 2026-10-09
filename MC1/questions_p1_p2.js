// ==========================================
// MIDTERM CONTROL 1 • FULL QUESTION BANK
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

// ПУЛ 1: ОСНОВЫ МИКРОЭКОНОМИКИ И ИЗДЕРЖКИ (Очищено от старых номеров)
const PART1_POOL = [
    {
        q_en: "Microeconomics is the study of?",
        q_ru: "Микроэкономика — это наука, изучающая?",
        opts_en: ["A) The behavior of consumers", "B) How households and firms make decisions", "C) How government affects the economy", "D) How the economy as a whole works", "E) Rates of unemployment and inflation"],
        opts_ru: ["A) Поведение потребителей", "B) Как домохозяйства и фирмы принимают решения", "C) Как государство влияет на экономику", "D) Как работает экономика в целом", "E) Уровень безработицы и инфляции"],
        ans: "B"
    },
    {
        q_en: "Scarcity exists because?",
        q_ru: "Проблема ограниченности (редкости) существует потому, что?",
        opts_en: ["A) Human wants exceed the productive capacity of the economy", "B) Supplies of land and other natural resources are unlimited", "C) Physical capital does not depreciate", "D) Population and labor force growth are slowing", "E) Innovation causes unemployment"],
        opts_ru: ["A) Человеческие потребности превышают производственные возможности экономики", "B) Запасы земли и ресурсов неограничены", "C) Физический капитал не подвержен износу", "D) Рост населения и рабочей силы замедляется", "E) Инновации вызывают безработицу"],
        ans: "A"
    },
    {
        q_en: "What does an indifference curve show?",
        q_ru: "Что показывает кривая безразличия?",
        opts_en: ["A) Consumption bundles that give the consumer the same level of satisfaction", "B) Set of goods which give different level of utilities", "C) Consumption bundles that give different level of satisfaction", "D) Set of goods in which consumer makes a difference", "E) Consumption bundles that the consumer wants to buy"],
        opts_ru: ["A) Наборы потребления, обеспечивающие одинаковый уровень удовлетворения", "B) Набор товаров, дающих разный уровень полезности", "C) Наборы потребления с различным уровнем удовлетворения", "D) Набор товаров, между которыми потребитель делает различие", "E) Наборы товаров, которые потребитель хочет купить"],
        ans: "A"
    },
    {
        q_en: "Who is most interested in maximizing marginal utility in the economy?",
        q_ru: "Кто больше всего заинтересован в максимизации предельной полезности в экономике?",
        opts_en: ["A) Landlords", "B) Consumers", "C) Employers", "D) Government", "E) Firms"],
        opts_ru: ["A) Домовладельцы", "B) Потребители", "C) Работодатели", "D) Государство", "E) Фирмы"],
        ans: "B"
    },
    {
        q_en: "Increases of consumers income graphically look like?",
        q_ru: "Рост доходов потребителей графически выглядит как?",
        opts_en: ["A) Change in slope of the budget line", "B) Raises in slope of the budget line", "C) Reduces in slope of the budget line", "D) Shifts the budget line rightwards", "E) Shifts the budget line leftwards"],
        opts_ru: ["A) Изменение наклона бюджетной линии", "B) Увеличение наклона бюджетной линии", "C) Уменьшение наклона бюджетной линии", "D) Параллельный сдвиг бюджетной линии вправо", "E) Параллельный сдвиг бюджетной линии влево"],
        ans: "D"
    },
    {
        q_en: "Consumer surplus is defined as?",
        q_ru: "Излишек потребителя — это?",
        opts_en: ["A) A buyer's willingness to pay minus the price paid", "B) A buyer's willingness to pay plus the price paid", "C) The price of the product minus the buyer's willingness to pay", "D) When willingness to pay and price are equal", "E) When consumers buy more goods than they need"],
        opts_ru: ["A) Готовность покупателя платить минус фактически уплаченная цена", "B) Готовность покупателя платить плюс цена", "C) Цена товара минус готовность покупателя платить", "D) Равенство готовности платить и цены", "E) Ситуация, когда покупают больше товаров, чем нужно"],
        ans: "A"
    },
    {
        q_en: "Which of the following is a fixed cost of a firm?",
        q_ru: "Что из перечисленного относится к постоянным издержкам фирмы?",
        opts_en: ["A) Loan payment", "B) Security guard costs", "C) Rent payment", "D) Cost of raw materials", "E) Staff salary"],
        opts_ru: ["A) Выплаты по кредиту", "B) Затраты на охрану", "C) Арендная плата", "D) Затраты на сырье и материалы", "E) Заработная плата персонала"],
        ans: "C"
    },
    {
        q_en: "Which of the following is a variable cost of a firm?",
        q_ru: "Что из перечисленного относится к переменным издержкам фирмы?",
        opts_en: ["A) Loan payment", "B) Rent", "C) Depreciation", "D) Cost of raw materials", "E) Management staff salary"],
        opts_ru: ["A) Выплаты по кредиту", "B) Аренда", "C) Амортизация", "D) Затраты на сырье и материалы", "E) Оклад управленческого персонала"],
        ans: "D"
    },
    {
        q_en: "Production analysis: TC of 5 units = 300, MC of 6th unit = 60. ATC of 6 units is?",
        q_ru: "Анализ производства: TC 5 единиц = 300, MC 6-й единицы = 60. Чему равны средние общие издержки (ATC) 6 единиц?",
        opts_en: ["A) 40", "B) 30", "C) 2160", "D) 60", "E) 36"],
        opts_ru: ["A) 40", "B) 30", "C) 2160", "D) 60", "E) 36"],
        ans: "D"
    },
    {
        q_en: "Which of the following formula defines Marginal Cost (MC)?",
        q_ru: "Какая из формул определяет предельные издержки (MC)?",
        opts_en: ["A) MC = TR / Q", "B) MC = ΔTC / ΔQ", "C) MC = P * Q", "D) MC = P * 2Q", "E) MC = ΔTR / ΔQ"],
        opts_ru: ["A) MC = TR / Q", "B) MC = ΔTC / ΔQ", "C) MC = P * Q", "D) MC = P * 2Q", "E) MC = ΔTR / ΔQ"],
        ans: "B"
    },
    {
        q_en: "Who is most interested in maximizing Marginal Revenue (MR) in the economy?",
        q_ru: "Кто в наибольшей степени заинтересован в максимизации предельной выручки (MR)?",
        opts_en: ["A) Landlords", "B) Consumers", "C) Employers", "D) Government", "E) Firms"],
        opts_ru: ["A) Домовладельцы", "B) Потребители", "C) Работодатели", "D) Государство", "E) Фирмы"],
        ans: "E"
    },
    {
        q_en: "In the long run horizon, how are production costs classified?",
        q_ru: "Как классифицируются издержки производства в долгосрочном периоде?",
        opts_en: ["A) Divided into fixed and variable", "B) All costs are variable", "C) All costs are fixed", "D) Divided into fixed and marginal", "E) Same as in the short run"],
        opts_ru: ["A) Делятся на постоянные и переменные", "B) Все издержки являются переменными", "C) Все издержки являются постоянными", "D) Делятся на постоянные и предельные", "E) Выглядят так же, как в краткосрочном периоде"],
        ans: "B"
    },
    {
        q_en: "If Average Total Cost (ATC) is at its minimum point, Marginal Cost (MC) must be?",
        q_ru: "Если средние общие издержки (ATC) находятся в точке своего минимума, то предельные издержки (MC):",
        opts_en: ["A) At minimum", "B) At maximum", "C) Equal to Total Costs", "D) Equal to Fixed Costs", "E) Equal to Average Total Costs"],
        opts_ru: ["A) Минимальны", "B) Максимальны", "C) Равны совокупным издержкам", "D) Равны постоянным издержкам", "E) Равны средним общим издержкам (MC = ATC)"],
        ans: "E"
    }
];

// ПУЛ 2: РЫНКИ, СПРОС И ПРЕДЛОЖЕНИЕ
const PART2_POOL = [
    {
        q_en: "A Perfectly Elastic Demand Curve looks like?",
        q_ru: "Совершенно эластичная кривая спроса выглядит как?",
        opts_en: ["A) Vertical line", "B) Negatively sloped line", "C) Horizontal line", "D) Positively sloped line", "E) 45-degree line"],
        opts_ru: ["A) Вертикальная линия", "B) Линия с отрицательным наклоном", "C) Горизонтальная линия", "D) Линия с положительным наклоном", "E) Линия под углом 45 градусов"],
        ans: "C"
    },
    {
        q_en: "Which factor leads to a change in quantity demanded WITHOUT shifting the demand curve?",
        q_ru: "Какой фактор приводит к изменению величины спроса БЕЗ сдвига самой кривой спроса?",
        opts_en: ["A) Consumer's income", "B) Consumer's preferences", "C) Price expectations", "D) Prices of substitute goods", "E) Change in price of the good itself"],
        opts_ru: ["A) Доходы потребителей", "B) Предпочтения потребителей", "C) Ожидания будущего роста цен", "D) Цены на товары-заменители", "E) Изменение цены самого данного товара"],
        ans: "E"
    },
    {
        q_en: "The price elasticity of supply measures how much?",
        q_ru: "Эластичность предложения по цене измеряет, насколько?",
        opts_en: ["A) Quantity supplied responds to input price changes", "B) Quantity supplied responds to changes in the price of the good", "C) Price responds to supply changes", "D) Sellers respond to technology", "E) Quantity demanded responds to input prices"],
        opts_ru: ["A) Объем предложения реагирует на цены ресурсов", "B) Объем предложения реагирует на изменение цены самого товара", "C) Цена реагирует на изменения предложения", "D) Продавцы реагируют на технологии", "E) Объем спроса реагирует на цены ресурсов"],
        ans: "B"
    },
    {
        q_en: "Demand: QD = 500 - 2P, Supply: QS = 200 + 4P. What is the equilibrium price and quantity?",
        q_ru: "Спрос: QD = 500 - 2P, Предложение: QS = 200 + 4P. Определите равновесную цену и объем:",
        opts_en: ["A) P = 80, Q = 400", "B) P = 400, Q = 50", "C) P = 350, Q = 1600", "D) P = 50, Q = 400", "E) P = 60, Q = 400"],
        opts_ru: ["A) P = 80, Q = 400", "B) P = 400, Q = 50", "C) P = 350, Q = 1600", "D) P = 50, Q = 400", "E) P = 60, Q = 400"],
        ans: "D"
    },
    {
        q_en: "Demand: QD = 800 - 2P, Supply: QS = 200 + 3P. What is the equilibrium price and quantity?",
        q_ru: "Спрос: QD = 800 - 2P, Предложение: QS = 200 + 3P. Определите равновесную цену и объем:",
        opts_en: ["A) P = 80, Q = 400", "B) P = 400, Q = 50", "C) P = 350, Q = 100", "D) P = 40, Q = 120", "E) P = 120, Q = 560"],
        opts_ru: ["A) P = 80, Q = 400", "B) P = 400, Q = 50", "C) P = 350, Q = 100", "D) P = 40, Q = 120", "E) P = 120, Q = 560"],
        ans: "E"
    },
    {
        q_en: "Price increases from $1.20 to $1.40, quantity supplied rises from 1,200 to 1,600 lbs. Using midpoint method, elasticity of supply is?",
        q_ru: "Рост цены с $1.20 до $1.40 увеличил предложение с 1,200 до 1,600 фунтов. Используя метод средней точки, рассчитайте эластичность предложения:",
        opts_en: ["A) 2.00", "B) 1.06", "C) 0.58", "D) 2.80", "E) 1.86"],
        opts_ru: ["A) 2.00", "B) 1.06", "C) 0.58", "D) 2.80", "E) 1.86"],
        ans: "A"
    },
    {
        q_en: "Which of the following describes the Demand Curve under Pure Competition?",
        q_ru: "Какое утверждение лучше всего описывает кривую спроса для фирмы в условиях совершенной конкуренции?",
        opts_en: ["A) Positive slope", "B) Vertical line", "C) Perfectly Horizontal line", "D) Negative slope", "E) 45-degree line"],
        opts_ru: ["A) Имеет положительный наклон", "B) Является строго вертикальной", "C) Совершенно горизонтальная линия", "D) Имеет отрицательный наклон", "E) Линия под углом 45 градусов"],
        ans: "C"
    },
    {
        q_en: "Wheat Market Table: P=$2.00 (QD=10k, QS=40k), P=$1.75 (QD=15k, QS=35k), P=$1.50 (QD=20k, QS=20k). What is equilibrium?",
        q_ru: "Рынок пшеницы: P=$2.00 (QD=10 тыс, QS=40 тыс), P=$1.75 (QD=15 тыс, QS=35 тыс), P=$1.50 (QD=20 тыс, QS=20 тыс). Какое состояние является равновесным?",
        opts_en: ["A) $2.00 / 10,000", "B) $1.75 / 15,000", "C) $1.50 / 20,000", "D) $1.25 / 30,000", "E) $0.75 / 5,000"],
        opts_ru: ["A) $2.00 / 10,000", "B) $1.75 / 15,000", "C) $1.50 / 20,000", "D) $1.25 / 30,000", "E) $0.75 / 5,000"],
        ans: "C"
    },
    {
        q_en: "Which condition describes profit-maximizing output under Pure Competition?",
        q_ru: "Какое условие описывает объем выпуска, максимизирующий прибыль при совершенной конкуренции?",
        opts_en: ["A) P = MR = AC", "B) P = MC (or MR = MC)", "C) P = M", "D) P > MR = MC", "E) P = MR > MC"],
        opts_ru: ["A) P = MR = AC", "B) P = MC (или MR = MC)", "C) P = M", "D) P > MR = MC", "E) P = MR > MC"],
        ans: "B"
    },
    {
        q_en: "An increase in the price of a key input will affect Demand and Supply curves how?",
        q_ru: "Как рост цен на ключевые ресурсы (сырье) повлияет на кривые спроса и предложения?",
        opts_en: ["A) Demand shift right, Supply shift right", "B) Demand shift left, Supply shift left", "C) Demand shift left, Supply no change", "D) Demand no change, Supply shift left", "E) Demand no change, Supply shift right"],
        opts_ru: ["A) Спрос вправо, Предложение вправо", "B) Спрос влево, Предложение влево", "C) Спрос влево, Предложение без изменений", "D) Спрос без изменений, Предложение сдвигается влево", "E) Спрос без изменений, Предложение вправо"],
        ans: "D"
    },
    {
        q_en: "Which of the following best describes the Oligopoly Market?",
        q_ru: "Что из перечисленного лучше всего характеризует рынок олигополии?",
        opts_en: ["A) Free entry for all", "B) Nonprice competition & Mutual interdependence", "C) No control over prices", "D) Millions of tiny sellers", "E) Absolutely identical goods only"],
        opts_ru: ["A) Абсолютно свободный вход", "B) Неценовая конкуренция и взаимная зависимость фирм", "C) Полное отсутствие контроля над ценами", "D) Огромное количество мелких продавцов", "E) Исключительно одинаковые товары"],
        ans: "B"
    },
    {
        q_en: "Government increases minimum wage for bicycle workers by $1/hr. What is the immediate effect?",
        q_ru: "Государство повышает минимальную зарплату рабочих велозавода на $1/час. Каков результат?",
        opts_en: ["A) Demand for workers increases", "B) Supply of bicycles shifts right", "C) Supply of bicycles shifts left", "D) Output increases", "E) Demand for bicycles shifts right"],
        opts_ru: ["A) Спрос на рабочих вырастет", "B) Предложение велосипедов сдвинется вправо", "C) Предложение велосипедов сдвинется влево", "D) Выпуск автоматически увеличится", "E) Спрос на велосипеды сдвинется вправо"],
        ans: "C"
    },
    {
        q_en: "Simultaneous INCREASE in both Demand and Supply leads to what changes in equilibrium?",
        q_ru: "Одновременное УВЕЛИЧЕНИЕ и спроса, и предложения приводит к каким изменениям равновесия?",
        opts_en: ["A) Price increases, Quantity increases", "B) Price indeterminate, Quantity decreases", "C) Price indeterminate, Quantity increases", "D) Price increases, Quantity indeterminate", "E) Price decreases, Quantity increases"],
        opts_ru: ["A) Цена растет, Объем растет", "B) Цена неопределена, Объем падает", "C) Изменение цены неопределено, Объем гарантированно растет", "D) Цена растет, Объем неопределен", "E) Цена падает, Объем растет"],
        ans: "C"
    },
    {
        q_en: "Which of the following causes a SHIFT of the Demand Curve?",
        q_ru: "Что из перечисленного вызывает СДВИГ кривой спроса?",
        opts_en: ["A) Change in cost of production", "B) Change in technology", "C) Change in prices of substitute goods", "D) Change in price of the good itself", "E) Change in marginal cost"],
        opts_ru: ["A) Изменение издержек производства", "B) Изменение технологии производства", "C) Изменение цен на товары-заменители (субституты)", "D) Изменение цены самого товара", "E) Изменение предельных издержек"],
        ans: "C"
    }
];

// ГРАФИЧЕСКИЕ СЦЕНАРИИ ДЛЯ ВОПРОСА 2.6 (УБРАНЫ ПОДСКАЗКИ В СКОБКАХ)
const GRAPH_SCENARIOS = [
    {
        type: "demand_shift_right",
        prompt_en: "An increase in consumer income for a normal good causes the demand curve to shift rightward from D1 to D2. Which option accurately describes this market movement?",
        prompt_ru: "Рост доходов потребителей для нормального товара вызывает сдвиг кривой спроса вправо из D1 в D2. Какое утверждение верно описывает это изменение?",
        opts_en: [
            "A) Increase in Demand",
            "B) Decrease in Demand",
            "C) Increase in Quantity Demanded",
            "D) Decrease in Supply",
            "E) No change in equilibrium"
        ],
        opts_ru: [
            "A) Увеличение спроса",
            "B) Уменьшение спроса",
            "C) Увеличение величины спроса",
            "D) Уменьшение предложения",
            "E) Равновесие не изменяется"
        ],
        ans: "A"
    },
    {
        type: "demand_point_move",
        prompt_en: "A reduction in product price causes equilibrium point E1 to move down along the blue demand curve D to E2. How is this change classified?",
        prompt_ru: "Снижение цены товара вызывает перемещение точки равновесия E1 вниз вдоль синей кривой спроса D в точку E2. Как классифицируется это изменение?",
        opts_en: [
            "A) Increase in Quantity Demanded",
            "B) Increase in Demand",
            "C) Decrease in Demand",
            "D) Increase in Supply",
            "E) Decrease in Quantity Supplied"
        ],
        opts_ru: [
            "A) Увеличение величины спроса",
            "B) Увеличение спроса",
            "C) Уменьшение спроса",
            "D) Увеличение предложения",
            "E) Уменьшение величины предложения"
        ],
        ans: "A"
    },
    {
        type: "supply_shift_right",
        prompt_en: "A technological innovation lowers unit production costs, shifting the red supply curve S1 rightward to S2. Identify the correct economic event:",
        prompt_ru: "Технологический прогресс снижает издержки производства, сдвигая красную кривую предложения S1 вправо в S2. Укажите правильный экономический процесс:",
        opts_en: [
            "A) Increase in Supply",
            "B) Decrease in Supply",
            "C) Increase in Quantity Supplied",
            "D) Increase in Demand",
            "E) Elasticity becomes zero"
        ],
        opts_ru: [
            "A) Увеличение предложения",
            "B) Уменьшение предложения",
            "C) Увеличение величины предложения",
            "D) Увеличение спроса",
            "E) Эластичность равна нулю"
        ],
        ans: "A"
    },
    {
        type: "supply_point_move",
        prompt_en: "An increase in market price leads to a movement from E1 upward along the red supply curve S to E2. What does this movement signify?",
        prompt_ru: "Рост рыночной цены приводит к перемещению точки из E1 вверх вдоль красной кривой предложения S в E2. Что означает это перемещение?",
        opts_en: [
            "A) Increase in Quantity Supplied",
            "B) Increase in Supply",
            "C) Decrease in Supply",
            "D) Decrease in Demand",
            "E) Perfect elasticity of supply"
        ],
        opts_ru: [
            "A) Увеличение величины предложения",
            "B) Увеличение предложения",
            "C) Уменьшение предложения",
            "D) Уменьшение спроса",
            "E) Совершенная эластичность предложения"
        ],
        ans: "A"
    }
];

// ВЫБОРКА УНИКАЛЬНЫХ ВОПРОСОВ ДЛЯ СТУДЕНТА
function getStudentQuestions(studentIdx) {
    const getSelection = (pool, count, offset) => {
        let result = [];
        let usedIndexes = new Set();
        let i = 0;
        while (result.length < count) {
            let idx = (studentIdx * 3 + offset + i * 5) % pool.length;
            if (!usedIndexes.has(idx)) {
                usedIndexes.add(idx);
                result.push(pool[idx]);
            }
            i++;
        }
        return result;
    };

    return {
        part1: getSelection(PART1_POOL, 4, 1),
        part2: getSelection(PART2_POOL, 5, 2)
    };
}

function renderQuestionsP1P2(studentIdx, lang) {
    const selected = getStudentQuestions(studentIdx);

    // РЕНДЕРИНГ ЧАСТИ 1 (4 ВОПРОСА: 1.1 - 1.4)
    const container1 = document.getElementById('part1-container');
    if (container1) {
        container1.innerHTML = '';
        selected.part1.forEach((qObj, i) => {
            // Очищаем вопрос от цифр в начале, если они случайно остались
            const rawQText = lang === 'en' ? qObj.q_en : qObj.q_ru;
            const qText = rawQText.replace(/^\d+\.\s*/, '');
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;
            
            let optionsHTML = '';
            for (let oIdx = 0; oIdx < opts.length; oIdx++) {
                const optText = opts[oIdx];
                const letter = String.fromCharCode(65 + oIdx);
                optionsHTML += `
                    <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                        <input type="radio" name="p1-q${i+1}" value="${letter}" class="mt-1 accent-indigo-500 w-4 h-4">
                        <span>${optText}</span>
                    </label>
                `;
            }

            container1.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 1.${i + 1}</span>
                    <h4 class="text-base md:text-lg font-bold text-slate-100 leading-snug">${qText}</h4>
                    <div class="space-y-2.5 pt-1">
                        ${optionsHTML}
                    </div>
                </div>
            `;
        });
    }

    // РЕНДЕРИНГ ЧАСТИ 2 (5 ТЕОРЕТИЧЕСКИХ ВОПРОСОВ 2.1 - 2.5 + 1 КОМПАКТНЫЙ ВОПРОС 2.6 С ГРАФИКОМ)
    const container2 = document.getElementById('part2-container');
    if (container2) {
        container2.innerHTML = '';
        selected.part2.forEach((qObj, i) => {
            const rawQText = lang === 'en' ? qObj.q_en : qObj.q_ru;
            const qText = rawQText.replace(/^\d+\.\s*/, '');
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;
            
            let optionsHTML = '';
            for (let oIdx = 0; oIdx < opts.length; oIdx++) {
                const optText = opts[oIdx];
                const letter = String.fromCharCode(65 + oIdx);
                optionsHTML += `
                    <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                        <input type="radio" name="p2-q${i+1}" value="${letter}" class="mt-1 accent-indigo-500 w-4 h-4">
                        <span>${optText}</span>
                    </label>
                `;
            }

            container2.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 2.${i + 1}</span>
                    <h4 class="text-base md:text-lg font-bold text-slate-100 leading-snug">${qText}</h4>
                    <div class="space-y-2.5 pt-1">
                        ${optionsHTML}
                    </div>
                </div>
            `;
        });

        // ВОПРОС 2.6 С ГРАФИКОМ (СЖАТЫЙ И КОМПАКТНЫЙ В РАЗМЕРЕ СТАНДАРТНОЙ ЯЧЕЙКИ)
        const sc = GRAPH_SCENARIOS[studentIdx % GRAPH_SCENARIOS.length];
        const prompt = lang === 'en' ? sc.prompt_en : sc.prompt_ru;
        const opts = lang === 'en' ? sc.opts_en : sc.opts_ru;

        let graphOptionsHTML = '';
        for (let oIdx = 0; oIdx < opts.length; oIdx++) {
            const optText = opts[oIdx];
            const letter = String.fromCharCode(65 + oIdx);
            graphOptionsHTML += `
                <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                    <input type="radio" name="p2-q6" value="${letter}" class="mt-1 accent-indigo-500 w-4 h-4">
                    <span>${optText}</span>
                </label>
            `;
        }

        container2.innerHTML += `
            <div class="card p-6 space-y-4 border-t-2 border-indigo-500">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 2.6</span>
                <p class="text-base font-bold text-slate-100 leading-snug">${prompt}</p>

                <div class="space-y-4 pt-1">
                    <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-center shadow-inner">
                        <canvas id="marketCanvas" width="280" height="170"></canvas>
                    </div>
                    <div class="space-y-2.5">
                        ${graphOptionsHTML}
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
    ctx.beginPath(); ctx.moveTo(30, 15); ctx.lineTo(30, 145); ctx.lineTo(260, 145); ctx.stroke();
    ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 12px Inter';
    ctx.fillText('P', 12, 22); ctx.fillText('Q', 250, 162);

    if (type === 'demand_shift_right') {
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(40, 35); ctx.lineTo(170, 135); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D1', 175, 140);

        ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2.5; ctx.setLineDash([5,5]);
        ctx.beginPath(); ctx.moveTo(80, 35); ctx.lineTo(210, 135); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillText('D2', 215, 140);

        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(50, 135); ctx.lineTo(200, 30); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S', 205, 35);
    } else if (type === 'demand_point_move') {
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(50, 30); ctx.lineTo(220, 135); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D', 225, 140);

        ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(100, 61, 5, 0, Math.PI*2); ctx.fill();
        ctx.fillText('E1', 110, 58);
        ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(170, 104, 5, 0, Math.PI*2); ctx.fill();
        ctx.fillText('E2', 180, 102);
    } else if (type === 'supply_shift_right') {
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(50, 30); ctx.lineTo(210, 135); ctx.stroke();
        ctx.fillStyle = '#60a5fa'; ctx.fillText('D', 215, 140);

        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(40, 125); ctx.lineTo(170, 30); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S1', 175, 35);

        ctx.strokeStyle = '#fb7185'; ctx.lineWidth = 2.5; ctx.setLineDash([5,5]);
        ctx.beginPath(); ctx.moveTo(80, 125); ctx.lineTo(210, 30); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillText('S2', 215, 35);
    } else {
        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(50, 135); ctx.lineTo(220, 30); ctx.stroke();
        ctx.fillStyle = '#fb7185'; ctx.fillText('S', 225, 35);

        ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(100, 104, 5, 0, Math.PI*2); ctx.fill();
        ctx.fillText('E1', 110, 106);
        ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(170, 61, 5, 0, Math.PI*2); ctx.fill();
        ctx.fillText('E2', 180, 63);
    }
}
