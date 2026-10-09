/* questions_p1_p2.js — Complete Bilinguial 40-Question Bank (EN/RU) for AlmaU MC1 (2026) */

const STUDENTS_LIST = [
    "Hebatallah Aldada", "Абдихай Салтанат Жалғасқызы", "Абдрахманов Бабур Хамза улы",
    "Адильхан Надия Берікқызы", "Бахытов Алимжан Бахыткалиулы", "Берикбаланова Адина Сериковна",
    "Жұмажан Осман Дарменұлы", "Замотина Дарья Астемировна", "Кабдрахманова Ажар Ниязовна",
    "Ким Есфирь Севастьяновна", "Кожахметова Малика Азаматовна", "Көшкінбай Айару Арманқызы",
    "Сериккалиева Еңлік Думанқызы", "Степанченко Савелий Дмитриевич", "Сулейменова Айдана Нурлановна",
    "Толстова Эвелина Евгеньевна", "Хусаинова Адия Галимовна", "Шабанов Анварбек", "Югай Ксения Альбертовна"
];

const QUESTIONS_DATABASE = [
    {
        id: 1,
        q: { en: "Which of the following is the fixed cost of firm?", ru: "Что из перечисленного относится к постоянным издержкам фирмы?" },
        options: {
            en: ["Loan’ payment", "Security guard costs", "Rent payment", "Cost of raw materials", "Staff salary"],
            ru: ["Выплата по кредиту", "Расходы на охрану", "Арендная плата", "Затраты на сырье", "Заработная плата штата"]
        }
    },
    {
        id: 2,
        q: { en: "Some production analyses dates: TC of 5 units - 300, MC of 6-th unit – 60, ATC of 6 units is…", ru: "Данные анализа производства: TC 5 единиц - 300, MC 6-й единицы – 60, ATC 6 единиц составляет…" },
        options: {
            en: ["40", "30", "2160", "60", "36"],
            ru: ["40", "30", "2160", "60", "36"]
        }
    },
    {
        id: 3,
        q: { en: "Which of the following is a variable cost of firm?", ru: "Что из перечисленного относится к переменным издержкам фирмы?" },
        options: {
            en: ["Logistics costs", "Loan’ payment", "Depreciation of raw materials", "Cost of raw materials", "Productions workers salary"],
            ru: ["Логистические расходы", "Выплата по кредиту", "Амортизация оборудования", "Затраты на сырье", "Сдельная зарплата рабочих"]
        }
    },
    {
        id: 4,
        q: { en: "Perfectly elastic Demand Curve looks like…", ru: "Кривая совершенно эластичного спроса выглядит как…" },
        options: {
            en: ["as a vertical", "has a negative slope", "as a horizontal", "has a positive slope", "as 45-degree line"],
            ru: ["вертикальная линия", "имеет отрицательный наклон", "горизонтальная линия", "имеет положительный наклон", "линия под углом 45 градусов"]
        }
    },
    {
        id: 5,
        q: { en: "Both the Demand and Supply are QD= 800 – 2Р, QS=200 +3Р, which of the following are an equilibrium price and quantity of goods:", ru: "Спрос и предложение заданы уравнениями QD= 800 – 2Р, QS=200 +3Р, найдите равновесную цену и объем:" },
        options: {
            en: ["Р = 80, Q = 400", "Р = 400, Q = 50", "Р = 350, Q = 100", "Р = 40, Q = 120", "Р = 120, Q = 560"],
            ru: ["Р = 80, Q = 400", "Р = 400, Q = 50", "Р = 350, Q = 100", "Р = 40, Q = 120", "Р = 120, Q = 560"]
        }
    },
    {
        id: 6,
        q: { en: "Which of the following is marginal cost?", ru: "Какая формула соответствует предельным издержкам (MC)?" },
        options: {
            en: ["MC=TR/Q", "MC= ∆TC/∆Q", "MC=PQ", "MC=P*2Q)", "MC=∆TR/∆Q"],
            ru: ["MC=TR/Q", "MC= ∆TC/∆Q", "MC=PQ", "MC=P*2Q)", "MC=∆TR/∆Q"]
        }
    },
    {
        id: 7,
        q: { en: "Increases of consumers income looks like as graphically:", ru: "Рост доходов потребителей графически выглядит как:" },
        options: {
            en: ["Change in slope of the budget line", "Raises in slope of the budget line", "Reduces in slope of the budget line", "Shifts the budget line rightwards", "Shifts the budget line leftwards"],
            ru: ["Изменение наклона бюджетной линии", "Увеличение наклона бюджетной линии", "Уменьшение наклона бюджетной линии", "Сдвиг бюджетной линии вправо", "Сдвиг бюджетной линии влево"]
        }
    },
    {
        id: 8,
        q: { en: "Who is the most interested to maximized of Marginal revenue in the economy?", ru: "Кто больше всего заинтересован в максимизации предельного дохода (MR) в экономике?" },
        options: {
            en: ["landlords", "consumers", "employers", "government", "firms"],
            ru: ["землевладельцы", "потребители", "работодатели", "государство", "фирмы"]
        }
    },
    {
        id: 9,
        q: { en: "Which of the following best describes the monopolistic competition market?", ru: "Что лучше всего характеризует рынок монополистической конкуренции?" },
        options: {
            en: ["Free entry", "Nonprice competition", "No controls of prices", "Large number of sellers", "Differentiated products"],
            ru: ["Свободный вход", "Неценовая конкуренция", "Отсутствие контроля цен", "Большое количество продавцов", "Дифференцированные товары"]
        }
    },
    {
        id: 10,
        q: { en: "Which of the following best describes the oligopoly market?", ru: "Что лучше всего характеризует рынок олигополии?" },
        options: {
            en: ["Free entry", "Nonprice competition", "No controls of prices", "Large number of sellers", "Differentiated products"],
            ru: ["Свободный вход", "Неценовая конкуренция", "Отсутствие контроля цен", "Большое число продавцов", "Дифференцированные товары"]
        }
    },
    {
        id: 11,
        q: { en: "Which of the following might shifts the Demand Curve", ru: "Что из перечисленного может вызвать сдвиг кривой спроса?" },
        options: {
            en: ["Change in cost of production", "Change in technology of production", "Change in prices of substitutes", "Change in price of good", "Change in marginal cost"],
            ru: ["Изменение издержек производства", "Изменение технологии производства", "Изменение цен на товары-заменители", "Изменение цены самого товара", "Изменение предельных издержек"]
        }
    },
    {
        id: 12,
        q: { en: "Who is the most interested in maximizing marginal utility in the economy?", ru: "Кто больше всего заинтересован в максимизации предельной полезности (MU) в экономике?" },
        options: {
            en: ["landlords", "consumers", "employers", "government", "firms"],
            ru: ["землевладельцы", "потребители", "работодатели", "государство", "фирмы"]
        }
    },
    {
        id: 13,
        q: { en: "Which of the following best describes Demand Curve in case of the pure competition?", ru: "Что лучше всего описывает кривую спроса в условиях совершенной конкуренции?" },
        options: {
            en: ["the Demand Curve has a positive slope", "the Demand Curve is vertical", "the Demand Curve has a negative slope", "the Demand Curve is horizontal", "the Demand Curve has a 45-degree line"],
            ru: ["кривая спроса имеет положительный наклон", "кривая спроса вертикальна", "кривая спроса имеет отрицательный наклон", "кривая спроса горизонтальна", "кривая спроса под углом 45 градусов"]
        }
    },
    {
        id: 14,
        q: { en: "Which of the following best describes the cost of production in the long run?", ru: "Что лучше всего описывает издержки производства в долгосрочном периоде?" },
        options: {
            en: ["Costs are divided into fixed costs and variable costs", "All of costs are variable", "All of costs are fixed", "Costs are divided into fixed costs and marginal costs", "Costs in the long run look like as cost in the short run"],
            ru: ["Издержки делятся на постоянные и переменные", "Все издержки являются переменными", "Все издержки являются постоянными", "Издержки делятся на постоянные и предельные", "Издержки аналогичны краткосрочному периоду"]
        }
    },
    {
        id: 15,
        q: { en: "Which of the following leads to change amount of demand without shifts of the demand curve", ru: "Что из перечисленного ведет к изменению величины спроса без сдвига кривой спроса?" },
        options: {
            en: ["Consumers income", "Consumers preferences", "expectations about the future prices and incomes", "substitutions goods", "change in prices"],
            ru: ["Доходы потребителей", "Предпочтения потребителей", "Ожидания будущих цен и доходов", "Товары-заменители", "Изменение цены самого товара"]
        }
    },
    {
        id: 16,
        q: { en: "Microeconomics is the study of?", ru: "Что изучает микроэкономика?" },
        options: {
            en: ["the behavior of consumers", "how households and firms make decisions", "how government affects the economy", "how the economy as a whole works", "rates of unemployment and inflation"],
            ru: ["поведение потребителей", "как домохозяйства и фирмы принимают решения", "как государство влияет на экономику", "функционирование экономики в целом", "уровни безработицы и инфляции"]
        }
    },
    {
        id: 17,
        q: { en: "Perfectly Elastic Demand Curve looks like…", ru: "Кривая совершенно эластичного спроса выглядит как…" },
        options: {
            en: ["as a vertical", "has a negative slope", "as a horizontal", "has a positive slope", "as 45 degree line"],
            ru: ["вертикальная линия", "имеет отрицательный наклон", "горизонтальная линия", "имеет положительный наклон", "линия под углом 45 градусов"]
        }
    },
    {
        id: 18,
        q: { en: "Scarcity exists because", ru: "Ограниченность ресурсов существует потому, что:" },
        options: {
            en: ["human wants exceed the productive capacity of the economy", "supplies of land and other natural resources are unlimited", "physical capital does not depreciate", "population and labor force growth are slowing", "innovation causes unemployment"],
            ru: ["потребности людей превышают производственные возможности экономики", "запасы земли и ресурсов неограниченны", "физический капитал не изнашивается", "рост населения замедляется", "инновации вызывают безработицу"]
        }
    },
    {
        id: 19,
        q: { en: "Which of the following leads to change amount of demand without shifts of the demand curve", ru: "Что приводит к изменению объема спроса без сдвига самой кривой спроса?" },
        options: {
            en: ["Consumer’s income", "Consumer’s preferences", "expectations about the future prices and incomes", "substitutions goods", "change in prices"],
            ru: ["Доход потребителя", "Предпочтения потребителя", "Ожидания цен и доходов", "Товары-субституты", "Изменение цены товара"]
        }
    },
    {
        id: 20,
        q: { en: "The price elasticity of supply measures how much:", ru: "Ценовая эластичность предложения измеряет:" },
        options: {
            en: ["The quantity supplied responds to changes in input prices", "The quantity supplied responds to changes in the prices of the good", "The price of the good responds to changes in supply", "Sellers responds to changes in technology", "The quantity demanded responds to changes in input prices"],
            ru: ["Реакцию объема предложения на изменение цен ресурсов", "Реакцию объема предложения на изменение цены товара", "Реакцию цены товара на изменение предложения", "Реакцию продавцов на изменение технологий", "Реакцию объема спроса на изменение цен ресурсов"]
        }
    },
    {
        id: 21,
        q: { en: "Both the Demand and Supply are QD=500 – 2Р, QS=200 +4Р, which of the following are an equilibrium price and quantity of goods:", ru: "Спрос и предложение заданы как QD=500 – 2Р, QS=200 +4Р, найдите равновесные цену и объем:" },
        options: {
            en: ["Р = 80, Q = 400", "Р = 400, Q = 50", "Р = 350, Q = 1600", "Р = 50, Q = 400", "Р = 60, Q = 400"],
            ru: ["Р = 80, Q = 400", "Р = 400, Q = 50", "Р = 350, Q = 1600", "Р = 50, Q = 400", "Р = 60, Q = 400"]
        }
    },
    {
        id: 22,
        q: { en: "Increases of consumers income looks like as graphically:", ru: "Рост доходов потребителя графически отражается как:" },
        options: {
            en: ["Change in slope of the budget line", "Raises in slope of the budget line", "Reduces in slope of the budget line", "Shifts the budget line rightwards", "Shifts the budget line leftwards"],
            ru: ["Изменение наклона бюджетной линии", "Увеличение наклона бюджетной линии", "Уменьшение наклона бюджетной линии", "Сдвиг бюджетной линии вправо", "Сдвиг бюджетной линии влево"]
        }
    },
    {
        id: 23,
        q: { en: "Which of the following is a variable cost of firm?", ru: "Что из перечисленного относится к переменным издержкам фирмы?" },
        options: {
            en: ["Loan’ payment", "Rent", "Depreciation", "Cost of raw materials", "Staff salary"],
            ru: ["Выплата по кредиту", "Аренда", "Амортизация", "Затраты на сырье", "Зарплата штата"]
        }
    },
    {
        id: 24,
        q: { en: "Suppose that an increase in the price of cucumber from $1.20 to $1.40 per pound raises the amount of cucumber that farmers produce from 1.2 k pounds to 1.6 k pounds. Using the midpoint method, what would be the elasticity of supply?", ru: "Рост цены огурцов с $1.20 до $1.40 за фунт увеличивает объем производства с 1.2k до 1.6k фунтов. Используя метод средней точки, эластичность предложения равна:" },
        options: {
            en: ["2.00", "1.06", "0.58", "2.80", "1.86"],
            ru: ["2.00", "1.06", "0.58", "2.80", "1.86"]
        }
    },
    {
        id: 25,
        q: { en: "The marginal costs is ?", ru: "Предельные издержки (MC) рассчитываются как:" },
        options: {
            en: ["MC=ΔTC/ΔQ", "MC=Δπ/ΔQ", "MC=ΔTFC/ΔQ", "MC=ΔTVC/ΔQ", "MC = TFC - TFC"],
            ru: ["MC=ΔTC/ΔQ", "MC=Δπ/ΔQ", "MC=ΔTFC/ΔQ", "MC=ΔTVC/ΔQ", "MC = TFC - TFC"]
        }
    },
    {
        id: 26,
        q: { en: "Which of the following best describes Demand Curve in case of the pure competition market?", ru: "Кривая спроса для отдельной фирмы в условиях совершенной конкуренции:" },
        options: {
            en: ["the Demand Curve has a positive slope", "the Demand Curve as a vertical", "the Demand Curve S as a horizontal", "the Demand Curve has a negative slope", "the Demand Curve has a 45-degree line"],
            ru: ["имеет положительный наклон", "вертикальная", "горизонтальная", "имеет отрицательный наклон", "линия под углом 45 градусов"]
        }
    },
    {
        id: 27,
        q: { en: "What indifference curve shows?", ru: "Что показывает кривая безразличия?" },
        options: {
            en: ["consumption bundles that give the consumer the same level of satisfaction", "set of goods which do for the difference level of utilities", "consumption bundles that give the consumer the different level of satisfaction", "set of goods in which consumer make a difference", "consumption bundles that the consumer want to buy"],
            ru: ["наборы товаров, приносящие одинаковый уровень удовлетворения", "наборы товаров с разным уровнем полезности", "наборы товаров с различным уровнем удовлетворения", "наборы товаров, между которыми потребитель делает различие", "наборы товаров, которые потребитель хочет купить"]
        }
    },
    {
        id: 28,
        q: { en: "Which of the following is marginal revenue?", ru: "Что из перечисленного является предельным доходом (MR)?" },
        options: {
            en: ["MR=TR/Q", "MR= TC/Q", "MR=PQ", "MR=P*2Q)", "MR=∆TR/∆Q"],
            ru: ["MR=TR/Q", "MR= TC/Q", "MR=PQ", "MR=P*2Q)", "MR=∆TR/∆Q"]
        }
    },
    {
        id: 29,
        q: { en: "Who is the most interested to maximized of marginal utilities?", ru: "Кто наиболее заинтересован в максимизации предельной полезности?" },
        options: {
            en: ["landlords", "consumers", "employers", "government", "firms"],
            ru: ["землевладельцы", "потребители", "работодатели", "государство", "фирмы"]
        }
    },
    {
        id: 30,
        q: { en: "The table shows wheat market data. At Equilibrium price $1.50, quantity is 20,000. Which combination represents equilibrium?", ru: "В таблице рынка пшеницы равновесие достигается при цене $1.50 и объеме 20,000. Какая комбинация является равновесной?" },
        options: {
            en: ["$2.00 ; 10,000", "$1.75 ; 15,000", "$1.50 ; 20,000", "$1.25 ; 30,000", "$0.75 ; 5,000"],
            ru: ["$2.00 ; 10,000", "$1.75 ; 15,000", "$1.50 ; 20,000", "$1.25 ; 30,000", "$0.75 ; 5,000"]
        }
    },
    {
        id: 31,
        q: { en: "Which of the following best describes a point to maximized output in case of pure competition market", ru: "Какое условие определяет максимизацию прибыли фирмы в условиях совершенной конкуренции?" },
        options: {
            en: ["P=MR=AC", "P=MC", "P=M", "P>MR=MC", "P=MR>MC."],
            ru: ["P=MR=AC", "P=MC", "P=M", "P>MR=MC", "P=MR>MC."]
        }
    },
    {
        id: 32,
        q: { en: "If the average total costs would be on minimum level on the graph, the marginal costs:", ru: "Если средние общие издержки (ATC) находятся на минимальном уровне, предельные издержки (MC):" },
        options: {
            en: ["will be minimum", "will be maximum", "must be equal total costs", "must be equal fixed costs", "must be equal average total costs"],
            ru: ["будут минимальны", "будут максимальны", "должны быть равны общим издержкам", "должны быть равны постоянным издержкам", "должны быть равны средним общим издержкам"]
        }
    },
    {
        id: 33,
        q: { en: "Consumer surplus is?", ru: "Излишек потребителя — это:" },
        options: {
            en: ["A buyer’s willingness to pay minus the price", "A buyer’s willingness to pay plus the price", "The price of the product minus the buyer’s willingness to pay", "When the buyer’s willingness to pay and the price of the product are equal", "When consumer’s buy more goods than they need"],
            ru: ["Готовность покупателя платить минус фактическая цена", "Готовность покупателя платить плюс цена", "Цена товара минус готовность покупателя платить", "Равенство готовности платить и цены", "Когда покупают больше товаров, чем нужно"]
        }
    },
    {
        id: 34,
        q: { en: "An increase in the price of a key input will cause the demand curve and the supply curve to change in which of the following ways?", ru: "Рост цены ключевого ресурса приведет к следующим изменениям кривых спроса и предложения:" },
        options: {
            en: ["Demand: shift to the right | Supply: shift to the right", "Demand: shift to the left | Supply: shift to the left", "Demand: shift to the left | Supply: no change", "Demand: no change | Supply: shift to the left", "Demand: no change | Supply: shift to the right"],
            ru: ["Спрос: вправо | Предложение: вправо", "Спрос: влево | Предложение: влево", "Спрос: влево | Предложение: без изменений", "Спрос: без изменений | Предложение: влево", "Спрос: без изменений | Предложение: вправо"]
        }
    },
    {
        id: 35,
        q: { en: "Which of the following best describes the oligopoly market?", ru: "Что лучше всего характеризует рынок олигополии?" },
        options: {
            en: ["Free entry", "Nonprice competition", "No controls of prices", "Large number of sellers", "Differentiated products"],
            ru: ["Свободный вход", "Неценовая конкуренция", "Отсутствие контроля цен", "Большое число продавцов", "Дифференцированные товары"]
        }
    },
    {
        id: 36,
        q: { en: "Workers at a bicycle plant currently make minimum wage. If the government increases the minimum wage by $1 an hour it is likely that the?", ru: "Повышение минимальной зарплаты рабочим велосипедного завода на $1 приведет к:" },
        options: {
            en: ["Demand for bicycle assembly workers will increase.", "Supply of bicycles will shift to the right.", "Supply of bicycles will shift to the left.", "Firm must increases output to maintain profit levels", "Demand of bicycles will shift to the right."],
            ru: ["Росту спроса на рабочих", "Сдвигу предложения велосипедов вправо", "Сдвигу предложения велосипедов влево", "Росту объема производства фирмы", "Сдвигу спроса на велосипеды вправо"]
        }
    },
    {
        id: 37,
        q: { en: "A simultaneous increase in both the demand for and the supply of a good in a market will lead to which of the following changes in the equilibrium price and quantity of the good?", ru: "Одновременный рост спроса и предложения товара приведет к следующим изменениям равновесия:" },
        options: {
            en: ["Price: Increase | Quantity: Increase", "Price: Indeterminate | Quantity: Decrease", "Price: Indeterminate | Quantity: Increase", "Price: Increase | Quantity: Indeterminate", "Price: Decrease | Quantity: Increase"],
            ru: ["Цена: Вырастет | Объем: Вырастет", "Цена: Неопределенно | Объем: Упадет", "Цена: Неопределенно | Объем: Вырастет", "Цена: Вырастет | Объем: Неопределенно", "Цена: Упадет | Объем: Вырастет"]
        }
    },
    {
        id: 38,
        q: { en: "Which of the following might shifts the Demand Curve", ru: "Что из перечисленного может вызвать сдвиг кривой спроса?" },
        options: {
            en: ["Change in cost of production", "Change in technology of production", "Change in prices of substitutes", "Change in price of good", "Change in marginal cost"],
            ru: ["Изменение издержек производства", "Изменение технологии", "Изменение цен товаров-заменителей", "Изменение цены самого товара", "Изменение предельных издержек"]
        }
    },
    {
        id: 39,
        q: { en: "Which of the following best describes the cost of production in the long run?", ru: "Издержки производства в долгосрочном периоде характеризуются тем, что:" },
        options: {
            en: ["Costs are divided into fixed costs and variable costs", "All of costs are variable", "All of costs are fixed", "Costs are divided into fixed costs and marginal costs", "Costs in the long run look like as cost in the short run"],
            ru: ["Делятся на постоянные и переменные", "Все издержки являются переменными", "Все издержки являются постоянными", "Делятся на постоянные и предельные", "Выглядят так же, как в краткосрочном периоде"]
        }
    },
    {
        id: 40,
        q: { en: "If the minimum wage is above the equilibrium wage,", ru: "Если минимальная заработная плата установлена выше равновесной," },
        options: {
            en: ["the quantity demanded of labor will be greater than the quantity supplied", "the quantity demanded of labor will equal than the quantity supplied", "the quantity demanded of labor will be less than the quantity supplied", "anyone who wants a job at the minimum wage can find one", "the deficit of the labor force exists in the labor market"],
            ru: ["величина спроса на труд превысит предложение", "величина спроса на труд сравняется с предложением", "величина спроса на труд будет меньше величины предложения", "каждый желающий сможет найти работу", "возникнет дефицит рабочей силы"]
        }
    }
];

function pseudoRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function renderQuestionsP1P2(studentIdx, lang = 'en') {
    const containerP1 = document.getElementById('part1-container');
    const containerP2 = document.getElementById('part2-container');

    if (!containerP1 || !containerP2) return;

    containerP1.innerHTML = '';
    containerP2.innerHTML = '';

    let seed = (studentIdx + 1) * 777;

    // Генерируем случайную перестановку всех 40 вопросов под студента
    let shuffledBank = [...QUESTIONS_DATABASE];
    for (let i = shuffledBank.length - 1; i > 0; i--) {
        const j = Math.floor(pseudoRandom(seed++) * (i + 1));
        [shuffledBank[i], shuffledBank[j]] = [shuffledBank[j], shuffledBank[i]];
    }

    // Выбираем 10 вопросов для персонального билета студента
    const selectedQuestions = shuffledBank.slice(0, 10);

    selectedQuestions.forEach((qObj, index) => {
        const textQ = qObj.q[lang] || qObj.q['en'];
        const opts = qObj.options[lang] || qObj.options['en'];

        let cardHtml = `
        <div class="card p-5 bg-slate-900/90 border border-slate-800 space-y-4 rounded-xl shadow-lg">
            <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">${lang === 'en' ? 'Question' : 'Вопрос'} #${index + 1}</span>
                <span class="text-[9px] text-slate-500 font-mono">Bank ID: ${qObj.id}</span>
            </div>
            <h4 class="text-xs font-bold text-white leading-relaxed">${textQ}</h4>
            <div class="space-y-2">
        `;

        opts.forEach((optText, optIdx) => {
            const letter = String.fromCharCode(97 + optIdx); // a, b, c, d, e
            cardHtml += `
                <label class="flex items-start gap-3 p-2.5 rounded-lg border border-slate-800 hover:border-indigo-500/50 bg-slate-950/60 cursor-pointer transition">
                    <input type="radio" name="q_${qObj.id}" value="${letter}" class="mt-0.5 accent-indigo-500">
                    <span class="text-xs text-slate-300"><b>${letter})</b> ${optText}</span>
                </label>
            `;
        });

        cardHtml += `
            </div>
        </div>
        `;

        if (index < 5) {
            containerP1.innerHTML += cardHtml;
        } else {
            containerP2.innerHTML += cardHtml;
        }
    });
}
