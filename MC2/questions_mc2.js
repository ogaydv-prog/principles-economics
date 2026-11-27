/* ==========================================
   questions_mc2.js
   MIDTERM CONTROL 2 • FULL MACRO QUESTION BANK & STUDENT ROSTER
   AlmaU SDTE 2026 • Principles of Economics
   21 Students • 6 Personalized Questions per Student
   ========================================== */

const STUDENTS_LIST = [
    { "en": "Abdikhai Saltanat Zhalgaskyzy", "ru": "Абдихай Салтанат Жалғасқызы" },
    { "en": "Abdrakhmanov Babur Khamza uly", "ru": "Абдрахманов Бабур Хамза улы" },
    { "en": "Adilkhan Nadiya Berikkyzy", "ru": "Адильхан Надия Берікқызы" },
    { "en": "Hebatallah Aldada", "ru": "Альдада Хебаталла" },
    { "en": "Bakhytov Alimzhan Bakhytkaliuly", "ru": "Бахытов Алимжан Бахыткалиулы" },
    { "en": "Belachew Nigus Damte", "ru": "Белачев Нигус Дамте" },
    { "en": "Dzhumagul Amirlan Magauiyauly", "ru": "Джұмағұл Әмірлан Мағауияұлы" },
    { "en": "Zhumazhan Osman Darmenuly", "ru": "Жұмажан Осман Дарменұлы" },
    { "en": "Zamotina Darya Astemirovna", "ru": "Замотина Дарья Астемировна" },
    { "en": "Kabdrakhmanova Azhar Niyazovna", "ru": "Кабдрахманова Ажар Ниязовна" },
    { "en": "Kim Esfir Sevastyanovna", "ru": "Ким Есфирь Севастьяновна" },
    { "en": "Kozhakhmetova Malika Azamatovna", "ru": "Кожахметова Малика Азаматовна" },
    { "en": "Koshkinbay Aiaru Armankyzy", "ru": "Көшкінбай Айару Арманқызы" },
    { "en": "Serikkaliyeva Yenlik Dumankyzy", "ru": "Сериккалиева Еңлік Думанқызы" },
    { "en": "Stepanchenko Saveliy Dmitriyevich", "ru": "Степанченко Савелий Дмитриевич" },
    { "en": "Suleimenova Aidana Nurlanovna", "ru": "Сулейменова Айдана Нурлановна" },
    { "en": "Tolstova Evelina Yevgenyevna", "ru": "Толстова Эвелина Евгеньевна" },
    { "en": "Khirana Kasita Putri", "ru": "Хирана Касита Путри" },
    { "en": "Khussainova Adiya Galimovna", "ru": "Хусаинова Адия Галимовна" },
    { "en": "Shabanov Anvarbek", "ru": "Шабанов Анварбек" },
    { "en": "Yugay Kseniya Albertovna", "ru": "Югай Ксения Альбертовна" }
];

const MC2_THEORY_POOL = [
    {
        "q_en": "In the circular flow diagram, which of the following is true in the product market?",
        "q_ru": "В модели кругооборота потоков какое утверждение верно для рынка товаров и услуг?",
        "opts_en": [
            "Households sell goods and services to business firms",
            "Households sell resources to business firms",
            "Business firms sell resources to households",
            "Business firms sell goods and services to households",
            "Households buy resources from business firms"
        ],
        "opts_ru": [
            "Домохозяйства продают товары и услуги фирмам",
            "Домохозяйства продают ресурсы фирмам",
            "Фирмы продают ресурсы домохозяйствам",
            "Фирмы продают товары и услуги домохозяйствам",
            "Домохозяйства покупают ресурсы у фирм"
        ],
        "ans": 3
    },
    {
        "q_en": "In the circular flow diagram, which of the following is true in resource or factor markets?",
        "q_ru": "В модели кругооборота потоков какое утверждение верно для рынка ресурсов (факторов производства)?",
        "opts_en": [
            "Households buy resources from business firms",
            "Households sell products to business firms",
            "Households sell resources to business firms",
            "Business firms sell goods and services to households",
            "Business firms sell resources to households"
        ],
        "opts_ru": [
            "Домохозяйства покупают ресурсы у фирм",
            "Домохозяйства продают готовую продукцию фирмам",
            "Домохозяйства продают ресурсы фирмам",
            "Фирмы продают товары и услуги домохозяйствам",
            "Фирмы продают ресурсы домохозяйствам"
        ],
        "ans": 2
    },
    {
        "q_en": "Which of the following is the best measure of the production or output of an economy?",
        "q_ru": "Какой из показателей лучше всего измеряет совокупный объем производства (выпуска) в экономике?",
        "opts_en": [
            "Consumer price index",
            "Unemployment rate",
            "Gross domestic product",
            "Prime rate",
            "Index of leading indicators"
        ],
        "opts_ru": [
            "Индекс потребительских цен (CPI)",
            "Уровень безработицы",
            "Валовой внутренний продукт (ВВП)",
            "Базовая процентная ставка",
            "Индекс опережающих индикаторов"
        ],
        "ans": 2
    },
    {
        "q_en": "The market value of all final goods and services produced within an economy in a given year is:",
        "q_ru": "Рыночная стоимость всех конечных товаров и услуг, произведенных внутри страны за данный год, — это:",
        "opts_en": [
            "Net national product",
            "National income",
            "Personal income",
            "Gross domestic product",
            "Producer price index"
        ],
        "opts_ru": [
            "Чистый национальный продукт",
            "Национальный доход",
            "Личный доход",
            "Валовой внутренний продукт (ВВП)",
            "Индекс цен производителей (PPI)"
        ],
        "ans": 3
    },
    {
        "q_en": "Which of the following people would officially be considered unemployed?",
        "q_ru": "Кто из перечисленных людей официально считается безработным?",
        "opts_en": [
            "A person who quits work to care for aging parents",
            "A person who stayed home to raise children and now starts actively looking for a job",
            "A person who quits a job to return to school full-time",
            "A qualified teacher driving a bus until a teaching job opens up",
            "A person working two part-time jobs while looking for a full-time job"
        ],
        "opts_ru": [
            "Человек, уволившийся для ухода за пожилыми родителями",
            "Человек, сидевший дома с детьми и начавший активно искать работу",
            "Человек, уволившийся ради очной учебы в университете",
            "Дипломированный учитель, работающий водителем автобуса в ожидании вакансии",
            "Человек, работающий на двух неполных ставках в поиске полной занятости"
        ],
        "ans": 1
    },
    {
        "q_en": "In Gross Domestic Product (by expenditure approach), the largest dollar component is typically:",
        "q_ru": "В структуре ВВП (по расходам) наибольшую долю обычно составляет:",
        "opts_en": [
            "Consumer spending (C)",
            "Rental payments",
            "Net exports of goods and services (NX)",
            "Gross private domestic investment (I)",
            "Government purchases of goods and services (G)"
        ],
        "opts_ru": [
            "Потребительские расходы домохозяйств (C)",
            "Арендные платежи",
            "Чистый экспорт товаров и услуг (NX)",
            "Валовые частные внутренние инвестиции (I)",
            "Государственные закупки товаров и услуг (G)"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following purchases is included in the calculation of current Gross Domestic Product?",
        "q_ru": "Какая из следующих покупок включается в расчет текущего ВВП?",
        "opts_en": [
            "A used economics textbook from a bookstore",
            "New harvesting equipment purchased by a farm",
            "1,000 shares of stock in a computer firm",
            "A car produced in a foreign country",
            "Government bonds issued by a foreign government"
        ],
        "opts_ru": [
            "Подержанный учебник по экономике из букинистического магазина",
            "Новая уборочная техника, купленная фермерским хозяйством",
            "1 000 акций компьютерной компании",
            "Автомобиль, произведенный за рубежом",
            "Государственные облигации иностранного государства"
        ],
        "ans": 1
    },
    {
        "q_en": "Which of the following would be included in the calculation of Gross Domestic Product?",
        "q_ru": "Что из перечисленного включается в расчет ВВП?",
        "opts_en": [
            "Government purchase of a new submarine",
            "Social Security pension payment to a retired officer",
            "The purchase of a home built 10 years ago",
            "Donations to a charity organization",
            "Haircut performed by a barber for his own children"
        ],
        "opts_ru": [
            "Государственная закупка новой подводной лодки",
            "Пенсионная выплата отставному военному",
            "Покупка дома, построенного 10 лет назад",
            "Благотворительные пожертвования",
            "Стрижка парикмахером собственных детей дома"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following would be counted as Investment (I) when calculating GDP?",
        "q_ru": "Что из перечисленного учитывается как инвестиции (I) при расчете ВВП?",
        "opts_en": [
            "The purchase of a used computer by an auto manufacturer",
            "The purchase of IBM stock by an employee",
            "The construction of a new residential house",
            "The construction of public highways by the government",
            "The capital gain earned when selling shares of stock"
        ],
        "opts_ru": [
            "Покупка подержанного компьютера автопроизводителем",
            "Покупка сотрудником акций компании IBM",
            "Строительство нового жилого дома",
            "Строительство государственных автодорог правительством",
            "Прибыль от перепродажи акций на бирже"
        ],
        "ans": 2
    },
    {
        "q_en": "Which of the following is an example of an intermediate good or service?",
        "q_ru": "Что из перечисленного является примером промежуточного товара или услуги?",
        "opts_en": [
            "A calculator purchased by a college student for exams",
            "Gasoline purchased by an insurance company for agents visiting clients",
            "A house purchased by a family with four children",
            "A car purchased by parents as a gift for a student",
            "Tuition paid by a student at a state university"
        ],
        "opts_ru": [
            "Калькулятор, купленный студентом для сдачи экзаменов",
            "Бензин, закупленный страховой компанией для выездов агентов к клиентам",
            "Дом, купленный семьей с четырьмя детьми",
            "Автомобиль, купленный родителями в подарок студенту",
            "Плата за обучение студента в государственном университете"
        ],
        "ans": 1
    },
    {
        "q_en": "Which of the following is the best example of structural unemployment?",
        "q_ru": "Что из перечисленного является лучшим примером структурной безработицы?",
        "opts_en": [
            "A programmer who quits to move to a warmer climate",
            "A construction worker who loses a job in winter",
            "An auto worker laid off during an economic recession",
            "A steelworker permanently replaced by an industrial robot",
            "A worker laid off because consumers stopped buying a specific toy"
        ],
        "opts_ru": [
            "Программист, уволившийся ради переезда в более теплый климат",
            "Строитель, теряющий работу в зимний сезон",
            "Авторабочий, уволенный во время экономического спада (рецессии)",
            "Сталевар, навсегда замененный промышленным роботом",
            "Работник фабрики игрушек, закрывшейся из-за падения спроса на ее модель"
        ],
        "ans": 3
    },
    {
        "q_en": "Which of the following is true about the natural rate of unemployment?",
        "q_ru": "Какое утверждение верно относительно естественного уровня безработицы?",
        "opts_en": [
            "It is always fixed at zero percent",
            "It is strictly 2 percent or less of the labor force",
            "It equals the structural unemployment rate alone",
            "It includes frictional and cyclical unemployment",
            "It equals the total unemployment rate minus the cyclical unemployment rate"
        ],
        "opts_ru": [
            "Он всегда строго равен нулю процентов",
            "Он всегда составляет 2% или менее от рабочей силы",
            "Он равен исключительно уровню структурной безработицы",
            "Он включает фрикционную и циклическую безработицу",
            "Он равен фактическому уровню безработицы за вычетом циклической безработицы"
        ],
        "ans": 4
    },
    {
        "q_en": "Which economic concept is the direct opposite of inflation (a general fall in the price level)?",
        "q_ru": "Какое экономическое понятие прямо противоположно инфляции (общее снижение уровня цен)?",
        "opts_en": [
            "Stagflation",
            "Deflation",
            "Recession",
            "Disinflation",
            "Stagnation"
        ],
        "opts_ru": [
            "Стагфляция",
            "Дефляция",
            "Рецессия",
            "Дезинфляция",
            "Стагнация"
        ],
        "ans": 1
    },
    {
        "q_en": "Which of the following is the most widely used measure of consumer inflation?",
        "q_ru": "Какой из перечисленных показателей наиболее широко используется для измерения потребительской инфляции?",
        "opts_en": [
            "Prime interest rate",
            "Consumer Price Index (CPI)",
            "Unemployment rate",
            "Current account balance",
            "Monetary base"
        ],
        "opts_ru": [
            "Базовая ставка кредитования",
            "Индекс потребительских цен (CPI)",
            "Уровень безработицы",
            "Сальдо счета текущих операций",
            "Денежная база"
        ],
        "ans": 1
    },
    {
        "q_en": "In Year 1, the CPI was 124.0. In Year 2, it was 130.7. What was the approximate rate of inflation over this period?",
        "q_ru": "В 1-м году индекс CPI составлял 124.0, а во 2-м году — 130.7. Чему равен темп инфляции за этот период?",
        "opts_en": [
            "5.4 percent",
            "30.7 percent",
            "Cannot be determined without the base year",
            "5.1 percent",
            "6.7 percent"
        ],
        "opts_ru": [
            "5.4 процента",
            "30.7 процента",
            "Невозможно определить без знания базового года",
            "5.1 процента",
            "6.7 процента"
        ],
        "ans": 0
    },
    {
        "q_en": "The market 'basket' on which the Consumer Price Index (CPI) is based is composed of:",
        "q_ru": "Потребительская «корзина», на основе которой рассчитывается индекс CPI, состоит из:",
        "opts_en": [
            "All goods produced domestically",
            "Products and services purchased by a typical urban consumer",
            "Raw materials purchased by manufacturing firms",
            "Only food and energy commodities",
            "Capital goods and industrial machinery"
        ],
        "opts_ru": [
            "Всех товаров, произведенных внутри страны",
            "Товаров и услуг, приобретаемых типичным потребителем",
            "Сырья и материалов, закупаемых промышленными фирмами",
            "Исключительно продовольствия и энергоносителей",
            "Инвестиционных товаров и промышленного оборудования"
        ],
        "ans": 1
    },
    {
        "q_en": "In a closed economy, if GDP = €1,000, consumption = €600, taxes = €100, and government purchases = €200, how much are national saving and investment?",
        "q_ru": "В закрытой экономике ВВП = €1,000, потребление = €600, налоги = €100, госзакупки = €200. Чему равны национальные сбережения и инвестиции?",
        "opts_en": [
            "Saving = €300, Investment = €300",
            "Saving = €200, Investment = €100",
            "Saving = €100, Investment = €200",
            "Saving = €0, Investment = €0",
            "Saving = €200, Investment = €200"
        ],
        "opts_ru": [
            "Сбережения = €300, Инвестиции = €300",
            "Сбережения = €200, Инвестиции = €100",
            "Сбережения = €100, Инвестиции = €200",
            "Сбережения = €0, Инвестиции = €0",
            "Сбережения = €200, Инвестиции = €200"
        ],
        "ans": 4
    },
    {
        "q_en": "The Central Bank's refinancing (discount) rate is:",
        "q_ru": "Ставка рефинансирования (учетная ставка) Центрального банка — это:",
        "opts_en": [
            "The rate at which commercial banks lend to each other overnight",
            "The interest rate the Central Bank pays on required reserves",
            "The interest rate the public pays when borrowing from commercial banks",
            "The interest rate the Central Bank charges on loans to commercial banks",
            "The interest rate commercial banks pay on household deposits"
        ],
        "opts_ru": [
            "Ставка, по которой коммерческие банки кредитуют друг друга",
            "Ставка, которую ЦБ выплачивает по обязательным резервам",
            "Процентная ставка, по которой население берет кредиты в банках",
            "Процентная ставка, под которую ЦБ выдает кредиты коммерческим банкам",
            "Ставка, которую банки выплачивают по вкладам населения"
        ],
        "ans": 3
    },
    {
        "q_en": "The three main traditional tools of monetary policy are:",
        "q_ru": "Тремя основными традиционными инструментами денежно-кредитной политики являются:",
        "opts_en": [
            "Fiat, commodity, and deposit money",
            "Open-market operations, reserve requirements, and the refinancing/discount rate",
            "Money supply, government purchases, and income taxation",
            "Government expenditures, taxation, and reserve requirements",
            "Coins, paper currency, and demand deposits"
        ],
        "opts_ru": [
            "Фиатные, товарные и депозитные деньги",
            "Операции на открытом рынке, норма обязательных резервов и ставка рефинансирования",
            "Денежная масса, государственные закупки и подоходный налог",
            "Государственные расходы, налоги и резервные требования",
            "Монеты, бумажные деньги и депозиты до востребования"
        ],
        "ans": 1
    },
    {
        "q_en": "If the nominal interest rate is 6 percent and the inflation rate is 3 percent, the real interest rate is:",
        "q_ru": "Если номинальная процентная ставка равна 6%, а темп инфляции составляет 3%, то реальная процентная ставка равна:",
        "opts_en": [
            "2 percent",
            "3 percent",
            "6 percent",
            "18 percent",
            "9 percent"
        ],
        "opts_ru": [
            "2 процента",
            "3 процента",
            "6 процентов",
            "18 процентов",
            "9 процентов"
        ],
        "ans": 1
    },
    {
        "q_en": "Which of the following is an example of frictional unemployment?",
        "q_ru": "Что из перечисленного является примером фрикционной безработицы?",
        "opts_en": [
            "A person voluntarily quits a job to search for a better position",
            "A person lacks the technical skills for any available job",
            "A person loses a job due to an economy-wide recession",
            "A person retires permanently from the labor force",
            "A discouraged worker stops looking for a job"
        ],
        "opts_ru": [
            "Человек добровольно увольняется, чтобы найти более подходящую работу",
            "У человека отсутствуют навыки для всех имеющихся вакансий",
            "Человек теряет работу из-за общеэкономической рецессии",
            "Человек окончательно выходит на пенсию",
            "Отчаявшийся работник прекращает поиски работы"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following best describes the Aggregate Demand (AD) curve?",
        "q_ru": "Какое утверждение лучше всего описывает кривую совокупного спроса (AD)?",
        "opts_en": [
            "The AD curve has a positive slope",
            "The AD curve is strictly vertical",
            "The AD curve is strictly horizontal",
            "The AD curve has a negative (downward) slope",
            "The AD curve is a 45-degree line"
        ],
        "opts_ru": [
            "Кривая AD имеет положительный наклон",
            "Кривая AD является строго вертикальной",
            "Кривая AD является строго горизонтальной",
            "Кривая AD имеет отрицательный (нисходящий) наклон",
            "Кривая AD представляет собой линию под углом 45 градусов"
        ],
        "ans": 3
    },
    {
        "q_en": "Gross Domestic Product (GDP) measures the market value of:",
        "q_ru": "Валовой внутренний продукт (ВВП) учитывает рыночную стоимость:",
        "opts_en": [
            "Only consumption goods",
            "All final goods and services",
            "Only capital investment goods",
            "All intermediate goods",
            "Only goods exported abroad"
        ],
        "opts_ru": [
            "Только потребительских товаров",
            "Всех конечных товаров и услуг",
            "Только инвестиционных товаров",
            "Всех промежуточных товаров",
            "Только товаров, поставляемых на экспорт"
        ],
        "ans": 1
    },
    {
        "q_en": "If both Nominal GDP and the overall price level increase at the exact same percentage rate, it means:",
        "q_ru": "Если номинальный ВВП и общий уровень цен выросли на одинаковый процент, это означает, что:",
        "opts_en": [
            "Real GDP does not change",
            "Real GDP decreases",
            "Real GDP increases slightly less than prices",
            "Real GDP increases faster than prices",
            "There is not enough information to determine Real GDP"
        ],
        "opts_ru": [
            "Реальный ВВП не изменился",
            "Реальный ВВП снизился",
            "Реальный ВВП вырос немного меньше, чем цены",
            "Реальный ВВП вырос быстрее, чем цены",
            "Недостаточно данных для оценки реального ВВП"
        ],
        "ans": 0
    },
    {
        "q_en": "Milton Friedman is famous for developing which theory of consumption behavior?",
        "q_ru": "Милтон Фридман известен как автор какой гипотезы (теории) потребительского поведения?",
        "opts_en": [
            "The Absolute Income Hypothesis",
            "The Permanent Income Hypothesis",
            "The Keynesian Cross Model",
            "The Life-Cycle Hypothesis",
            "The Liquidity Trap Theory"
        ],
        "opts_ru": [
            "Гипотеза абсолютного дохода",
            "Гипотеза перманентного (постоянного) дохода",
            "Модель кейнсианского креста",
            "Гипотеза жизненного цикла",
            "Теория ликвидной ловушки"
        ],
        "ans": 1
    },
    {
        "q_en": "Suppose personal income is $3,500 billion, personal taxes are $1,000 billion, and depreciation is $500 billion. Disposable income equals:",
        "q_ru": "Допустим, личный доход равен $3,500 млрд, личные налоги — $1,000 млрд, амортизация — $500 млрд. Чему равен располагаемый доход?",
        "opts_en": [
            "$1,500 billion",
            "$2,000 billion",
            "$2,500 billion",
            "$3,000 billion",
            "$4,500 billion"
        ],
        "opts_ru": [
            "$1,500 млрд",
            "$2,000 млрд",
            "$2,500 млрд",
            "$3,000 млрд",
            "$4,500 млрд"
        ],
        "ans": 2
    },
    {
        "q_en": "One reason the Aggregate Demand curve slopes downward is that:",
        "q_ru": "Одной из причин отрицательного наклона кривой совокупного спроса (AD) является то, что:",
        "opts_en": [
            "As the price level increases, nominal wages automatically fall",
            "As the domestic price level increases, consumers substitute domestic goods for foreign goods",
            "All prices and total consumer incomes remain constant",
            "Changes in the price level affect the real value of wealth (the wealth effect)",
            "Nominal interest rates rise as the price level decreases"
        ],
        "opts_ru": [
            "При росте уровня цен номинальная зарплата автоматически падает",
            "При росте внутренних цен потребители заменяют отечественные товары импортными",
            "Все цены и совокупные доходы потребителей остаются неизменными",
            "Изменение уровня цен влияет на реальную стоимость богатства (эффект богатства)",
            "Номинальные ставки растут при снижении уровня цен"
        ],
        "ans": 3
    },
    {
        "q_en": "Which of the following best describes the Long-Run Aggregate Supply (LRAS) curve?",
        "q_ru": "Какое утверждение лучше всего описывает кривую долгосрочного совокупного предложения (LRAS)?",
        "opts_en": [
            "The LRAS curve has a positive slope",
            "The LRAS curve is vertical at the natural level of output",
            "The LRAS curve is horizontal",
            "The LRAS curve has a negative slope",
            "The LRAS curve is a 45-degree line"
        ],
        "opts_ru": [
            "Кривая LRAS имеет положительный наклон",
            "Кривая LRAS вертикальна на уровне потенциального (естественного) выпуска",
            "Кривая LRAS горизонтальна",
            "Кривая LRAS имеет отрицательный наклон",
            "Кривая LRAS представляет собой линию под углом 45 градусов"
        ],
        "ans": 1
    },
    {
        "q_en": "Which of the following events would directly generate cost-push inflation?",
        "q_ru": "Какое из следующих событий напрямую вызовет инфляцию издержек (cost-push inflation)?",
        "opts_en": [
            "A sharp increase in wages and energy prices",
            "A decrease in the price of substitute inputs",
            "An increase in household consumption spending",
            "A decrease in government purchases",
            "An increase in the money supply"
        ],
        "opts_ru": [
            "Резкий рост заработной платы и цен на энергоносители",
            "Снижение цен на взаимозаменяемые ресурсы",
            "Рост потребительских расходов домохозяйств",
            "Сокращение государственных закупок",
            "Увеличение денежной массы"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following equations represents the Keynesian consumption function?",
        "q_ru": "Какое из следующих уравнений представляет собой кейнсианскую функцию потребления?",
        "opts_en": [
            "C + I + G + NX = Y",
            "M × V = P × Y",
            "r = i - π",
            "C = a + MPC × (Y - T)",
            "i = r + π"
        ],
        "opts_ru": [
            "C + I + G + NX = Y",
            "M × V = P × Y",
            "r = i - π",
            "C = a + MPC × (Y - T)",
            "i = r + π"
        ],
        "ans": 3
    },
    {
        "q_en": "Other things equal, a short-run increase in national income (GDP) could be caused by a decrease in:",
        "q_ru": "При прочих равных условиях краткосрочный рост национального дохода (ВВП) может быть вызван сокращением:",
        "opts_en": [
            "Consumption (C)",
            "Investment (I)",
            "Imports (IM)",
            "Government spending (G)",
            "Exports (EX)"
        ],
        "opts_ru": [
            "Потребления (C)",
            "Инвестиций (I)",
            "Импорта (IM)",
            "Государственных расходов (G)",
            "Экспорта (EX)"
        ],
        "ans": 2
    },
    {
        "q_en": "According to the Quantity Theory of Money (assuming constant velocity), the quantity of money is directly related:",
        "q_ru": "Согласно количественной теории денег (при постоянной скорости обращения), количество денег в экономике прямо связано:",
        "opts_en": [
            "Negatively to the nominal interest rate",
            "Negatively to the price level",
            "Positively to the velocity of money",
            "Positively to the unemployment rate",
            "Positively to Nominal Gross Domestic Product (P × Y)"
        ],
        "opts_ru": [
            "Отрицательно с номинальной процентной ставкой",
            "Отрицательно с уровнем цен",
            "Положительно со скоростью обращения денег",
            "Положительно с уровнем безработицы",
            "Положительно с номинальным ВВП (P × Y)"
        ],
        "ans": 4
    },
    {
        "q_en": "The annual inflation rate is most commonly measured as the percentage change in the:",
        "q_ru": "Годовой темп инфляции чаще всего измеряется как процентное изменение:",
        "opts_en": [
            "Real GDP",
            "Consumer Price Index (CPI)",
            "Gini coefficient",
            "Marginal propensity to save (MPS)",
            "Marginal propensity to consume (MPC)"
        ],
        "opts_ru": [
            "Реального ВВП",
            "Индекса потребительских цен (CPI)",
            "Коэффициента Джини",
            "Предельной склонности к сбережению (MPS)",
            "Предельной склонности к потреблению (MPC)"
        ],
        "ans": 1
    },
    {
        "q_en": "Country X both imports and produces coffee. If Country X imposes a tariff on imported coffee, which of the following will occur?",
        "q_ru": "Страна X и импортирует, и производит кофе. Если она введет импортную пошлину (тариф) на кофе, что произойдет?",
        "opts_en": [
            "Total domestic coffee consumption will increase",
            "Domestic coffee production will decrease",
            "Employment in the domestic coffee industry will increase",
            "The domestic price of coffee will decrease",
            "World coffee prices will double"
        ],
        "opts_ru": [
            "Совокупное потребление кофе внутри страны вырастет",
            "Внутреннее производство кофе сократится",
            "Занятость в отечественной кофейной отрасли вырастет",
            "Внутренняя цена на кофе снизится",
            "Мировые цены на кофе удвоятся"
        ],
        "ans": 2
    },
    {
        "q_en": "Which of the following events will shift the Aggregate Demand (AD) curve?",
        "q_ru": "Какое из следующих событий вызовет сдвиг кривой совокупного спроса (AD)?",
        "opts_en": [
            "A movement along the curve due to the wealth effect",
            "An increase in the overall price level",
            "Cost-push inflation caused by oil shocks",
            "A change in the exchange-rate effect along the curve",
            "Changes in government purchases (G) or taxes (T)"
        ],
        "opts_ru": [
            "Движение вдоль кривой из-за эффекта богатства",
            "Изменение общего уровня цен в экономике",
            "Инфляция издержек, вызванная нефтяным шоком",
            "Изменение эффекта обменного курса при росте цен",
            "Изменение государственных закупок (G) или налогов (T)"
        ],
        "ans": 4
    },
    {
        "q_en": "Which of the following best describes an economy operating at full employment?",
        "q_ru": "Какое утверждение лучше всего характеризует экономику в состоянии полной занятости?",
        "opts_en": [
            "There is only structural and cyclical unemployment",
            "There is only cyclical unemployment",
            "There is only frictional and cyclical unemployment",
            "There is zero unemployment of any kind",
            "There is only structural and frictional unemployment (cyclical = 0)"
        ],
        "opts_ru": [
            "Существует только структурная и циклическая безработица",
            "Существует только циклическая безработица",
            "Существует только фрикционная и циклическая безработица",
            "Безработица любого вида полностью отсутствует (0%)",
            "Существует только структурная и фрикционная безработица (циклическая = 0)"
        ],
        "ans": 4
    },
    {
        "q_en": "An increase in the UK's real interest rates relative to other countries will most likely lead to:",
        "q_ru": "Повышение реальных процентных ставок в Великобритании относительно других стран вероятнее всего приведет к:",
        "opts_en": [
            "An immediate surge in UK exports",
            "A sharp decrease in UK imports",
            "A reduced government budget deficit",
            "Net financial capital inflow into the UK",
            "Depreciation of the British pound"
        ],
        "opts_ru": [
            "Резкому росту британского экспорта",
            "Резкому сокращению британского импорта",
            "Сокращению дефицита государственного бюджета",
            "Притоку финансового капитала в Великобританию",
            "Обесценению британского фунта стерлингов"
        ],
        "ans": 3
    },
    {
        "q_en": "Which model demonstrates how the interest rate affects households' optimal cash holdings and transaction frequency?",
        "q_ru": "Какая модель показывает, как процентная ставка влияет на оптимальный запас наличности и частоту снятия денег населением?",
        "opts_en": [
            "The Baumol–Tobin Model",
            "Friedman's Modern Quantity Theory",
            "The Purchasing Power Parity Theory",
            "The Solow Growth Model",
            "The Phillips Curve Model"
        ],
        "opts_ru": [
            "Модель Баумоля — Тобина",
            "Современная количественная теория Фридмана",
            "Теория паритета покупательной способности",
            "Модель экономического роста Солоу",
            "Модель кривой Филлипса"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following is typically included in the broader monetary aggregate M2 (beyond M1)?",
        "q_ru": "Что из перечисленного включается в широкий денежный агрегат M2 (помимо компонентов M1)?",
        "opts_en": [
            "Commercial bank reserves at the Central Bank",
            "Corporate stocks",
            "Savings deposits and small-denomination time deposits",
            "Treasury bonds",
            "Corporate bonds"
        ],
        "opts_ru": [
            "Резервы коммерческих банков в Центральном банке",
            "Акции корпораций",
            "Сберегательные вклады и срочные депозиты",
            "Долгосрочные казначейские облигации",
            "Корпоративные облигации"
        ],
        "ans": 2
    },
    {
        "q_en": "Which theory emphasizes the transactions, precautionary, and speculative motives for holding money?",
        "q_ru": "Какая теория выделяет трансакционный, предосторожности и спекулятивный мотивы спроса на деньги?",
        "opts_en": [
            "The Baumol–Tobin Model",
            "Friedman's Permanent Income Hypothesis",
            "Classical Quantity Theory of Money",
            "Purchasing Power Parity Theory",
            "Keynes's Liquidity Preference Theory"
        ],
        "opts_ru": [
            "Модель Баумоля — Тобина",
            "Гипотеза перманентного дохода Фридмана",
            "Классическая количественная теория денег",
            "Теория паритета покупательной способности",
            "Теория предпочтения ликвидности Кейнса"
        ],
        "ans": 4
    },
    {
        "q_en": "Which curve illustrates the theoretical relationship between tax rates and resulting government tax revenue?",
        "q_ru": "Какая кривая иллюстрирует теоретическую зависимость между налоговыми ставками и объемом налоговых поступлений в бюджет?",
        "opts_en": [
            "Phillips curve",
            "Aggregate demand curve",
            "Lorenz curve",
            "Aggregate supply curve",
            "Laffer curve"
        ],
        "opts_ru": [
            "Кривая Филлипса",
            "Кривая совокупного спроса",
            "Кривая Лоренца",
            "Кривая совокупного предложения",
            "Кривая Лаффера"
        ],
        "ans": 4
    },
    {
        "q_en": "Which tool of the Central Bank is the primary day-to-day mechanism for controlling the monetary base and money supply?",
        "q_ru": "Какой инструмент Центрального банка является основным повседневным механизмом регулирования денежной базы и денежной массы?",
        "opts_en": [
            "Discount window lending",
            "Fiscal taxation",
            "Open-market operations",
            "Government infrastructure spending",
            "Changing reserve requirements"
        ],
        "opts_ru": [
            "Кредитование через дисконтное окно",
            "Фискальное налогообложение",
            "Операции на открытом рынке",
            "Государственные инфраструктурные расходы",
            "Изменение нормы обязательных резервов"
        ],
        "ans": 2
    },
    {
        "q_en": "Open-market operations take place when the Central Bank:",
        "q_ru": "Операции на открытом рынке происходят, когда Центральный банк:",
        "opts_en": [
            "Buys or sells corporate stocks on the exchange",
            "Buys or sells government bonds in the financial market",
            "Increases or decreases the refinancing rate",
            "Changes reserve requirements for commercial banks",
            "Lends directly to non-financial corporations"
        ],
        "opts_ru": [
            "Покупает или продает акции корпораций на бирже",
            "Покупает или продает государственные облигации на рынке",
            "Повышает или понижает ставку рефинансирования",
            "Изменяет норму обязательных резервов для банков",
            "Выдает кредиты напрямую нефинансовым компаниям"
        ],
        "ans": 1
    },
    {
        "q_en": "A country's national (public) debt represents:",
        "q_ru": "Государственный долг страны представляет собой:",
        "opts_en": [
            "The annual excess of government spending over tax revenue",
            "The amount owed by commercial banks to the Central Bank",
            "The total amount of paper currency held by foreigners",
            "The trade deficit accumulated over one fiscal year",
            "The total accumulated amount owed by the government to holders of government securities"
        ],
        "opts_ru": [
            "Годовое превышение государственных расходов над налоговыми доходами",
            "Задолженность коммерческих банков перед Центральным банком",
            "Объем наличной валюты на руках у нерезидентов",
            "Дефицит торгового баланса за один финансовый год",
            "Общую накопленную сумму задолженности государства перед держателями госбумаг"
        ],
        "ans": 4
    },
    {
        "q_en": "To counter an economic recession using expansionary monetary policy, the Central Bank might:",
        "q_ru": "Для борьбы с экономической рецессией с помощью стимулирующей монетарной политики Центральный банк может:",
        "opts_en": [
            "Increase reserve requirements and sell government securities",
            "Increase capital gains taxes and sell government bonds",
            "Decrease reserve requirements and raise the discount rate",
            "Decrease the discount rate and buy government securities on the open market",
            "Sell government securities and raise the refinancing rate"
        ],
        "opts_ru": [
            "Повысить резервные требования и продать гособлигации",
            "Повысить налог на прирост капитала и продать облигации",
            "Снизить резервные требования и повысить учетную ставку",
            "Снизить учетную ставку и купить государственные облигации на открытом рынке",
            "Продать гособлигации и повысить ставку рефинансирования"
        ],
        "ans": 3
    },
    {
        "q_en": "An increase in which of the following will shift the money demand curve to the right?",
        "q_ru": "Рост какого из следующих показателей вызовет сдвиг кривой спроса на деньги вправо?",
        "opts_en": [
            "The nominal interest rate",
            "The supply of money",
            "The overall price level",
            "The velocity of money",
            "The trade deficit"
        ],
        "opts_ru": [
            "Номинальной процентной ставки",
            "Предложения денег",
            "Общего уровня цен в экономике",
            "Скорости обращения денег",
            "Дефицита торгового баланса"
        ],
        "ans": 2
    },
    {
        "q_en": "The market for loanable funds is best described as bringing together:",
        "q_ru": "Рынок заемных средств лучше всего описать как механизм, сводящий вместе:",
        "opts_en": [
            "Savers and borrowers",
            "Exporters and importers",
            "Central banks and foreign governments",
            "Taxpayers and fiscal authorities",
            "Producers and consumers of final goods"
        ],
        "opts_ru": [
            "Сберегателей (кредиторов) и заемщиков",
            "Экспортеров и импортеров",
            "Центральные банки и иностранные правительства",
            "Налогоплательщиков и налоговые органы",
            "Производителей и потребителей конечных товаров"
        ],
        "ans": 0
    },
    {
        "q_en": "If the Central Bank conducts an open-market purchase of government bonds, which of the following will occur?",
        "q_ru": "Если Центральный банк проводит покупку государственных облигаций на открытом рынке, что произойдет?",
        "opts_en": [
            "Bond prices rise and the money supply increases",
            "The money supply decreases",
            "Total commercial bank reserves decrease",
            "Interest rates rise and consumption falls",
            "The government automatically balances its budget"
        ],
        "opts_ru": [
            "Цены на облигации вырастут, а денежная масса увеличится",
            "Денежная масса сократится",
            "Совокупные резервы коммерческих банков уменьшатся",
            "Процентные ставки вырастут, а потребление упадет",
            "Правительство автоматически сбалансирует бюджет"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following is most likely to increase the real interest rate in Country Z?",
        "q_ru": "Что из перечисленного с наибольшей вероятностью приведет к росту реальной процентной ставки в стране Z?",
        "opts_en": [
            "Country Z's Central Bank buys government securities from banks",
            "Country Z sharply reduces government expenditures",
            "Country Z's Central Bank sells government securities on the open market",
            "Citizens increase their private saving rate",
            "Foreign capital floods into Country Z's banking system"
        ],
        "opts_ru": [
            "Центральный банк страны Z покупает гособлигации у банков",
            "Правительство страны Z резко сокращает госрасходы",
            "Центральный банк страны Z продает гособлигации на открытом рынке",
            "Граждане увеличивают норму личных сбережений",
            "Иностранный капитал массово притекает в банковскую систему страны Z"
        ],
        "ans": 2
    },
    {
        "q_en": "The money demand curve is downward sloping because:",
        "q_ru": "Кривая спроса на деньги имеет отрицательный наклон, потому что:",
        "opts_en": [
            "The transactions demand for money falls as interest rates fall",
            "People hold less money as the opportunity cost of holding money (the interest rate) rises",
            "Money becomes less liquid when interest rates rise",
            "Banks create less money when interest rates fall",
            "Higher incomes cause people to hold zero cash"
        ],
        "opts_ru": [
            "Трансакционный спрос на деньги падает при снижении ставок",
            "Люди держат меньше наличных денег по мере роста альтернативных издержек (процентной ставки)",
            "Деньги теряют ликвидность при росте процентных ставок",
            "Банки создают меньше денег при падении ставок",
            "Рост доходов заставляет людей полностью отказаться от наличных"
        ],
        "ans": 1
    },
    {
        "q_en": "If the marginal propensity to consume (MPC) is 0.75, the simple expenditure multiplier equals:",
        "q_ru": "Если предельная склонность к потреблению (MPC) равна 0.75, то простой мультипликатор расходов равен:",
        "opts_en": [
            "4",
            "7.5",
            "1.33",
            "5",
            "0.75"
        ],
        "opts_ru": [
            "4",
            "7.5",
            "1.33",
            "5",
            "0.75"
        ],
        "ans": 0
    },
    {
        "q_en": "Gross Domestic Product (GDP) would include which of the following?",
        "q_ru": "Что из перечисленного будет включено в расчет ВВП?",
        "opts_en": [
            "The imputed value of taking a day off from work",
            "Paid business consulting services",
            "Intermediate steel sales to an automaker",
            "Illegal underground drug sales",
            "Unpaid household cleaning and cooking"
        ],
        "opts_ru": [
            "Условная стоимость выходного дня работника",
            "Оплаченные услуги бизнес-консалтинга",
            "Продажа промежуточной стали автопроизводителю",
            "Нелегальная продажа запрещенных веществ",
            "Неоплачиваемая домашняя уборка и приготовление пищи"
        ],
        "ans": 1
    },
    {
        "q_en": "If a family buys a newly built residential house, this transaction is recorded in GDP under:",
        "q_ru": "Если семья покупает новый только что построенный жилой дом, эта сделка отражается в ВВП в составе:",
        "opts_en": [
            "Investment (I)",
            "Net exports (NX)",
            "Government purchases (G)",
            "Consumption (C)",
            "Transfer payments"
        ],
        "opts_ru": [
            "Инвестиций (I)",
            "Чистого экспорта (NX)",
            "Государственных закупок (G)",
            "Потребления (C)",
            "Трансфертных платежей"
        ],
        "ans": 0
    },
    {
        "q_en": "An example of a government transfer payment is:",
        "q_ru": "Примером государственного трансфертного платежа является:",
        "opts_en": [
            "Corporate profit",
            "Apartment rent",
            "Unemployment insurance benefits",
            "Government purchase of military aircraft",
            "Civil servant wages"
        ],
        "opts_ru": [
            "Корпоративная прибыль",
            "Арендная плата за квартиру",
            "Пособия по безработице",
            "Государственная закупка военной авиации",
            "Заработная плата государственных служащих"
        ],
        "ans": 2
    },
    {
        "q_en": "The value of plant and equipment worn out in the process of manufacturing goods and services is measured by:",
        "q_ru": "Стоимость зданий и оборудования, изношенных в процессе производства товаров и услуг, измеряется показателем:",
        "opts_en": [
            "Intermediate production",
            "Net National Product",
            "Net investment",
            "Depreciation (consumption of fixed capital)",
            "Personal consumption"
        ],
        "opts_ru": [
            "Промежуточного производства",
            "Чистого национального продукта",
            "Чистых инвестиций",
            "Амортизации (потребления основного капитала)",
            "Личного потребления"
        ],
        "ans": 3
    },
    {
        "q_en": "An economy that interacts freely with other economies around the world through trade and finance is known as:",
        "q_ru": "Экономика, которая свободно взаимодействует с другими экономиками мира через торговлю и движение капитала, называется:",
        "opts_en": [
            "An autarky",
            "A closed economy",
            "An open economy",
            "A command economy",
            "A barter economy"
        ],
        "opts_ru": [
            "Автаркией",
            "Закрытой экономикой",
            "Открытой экономикой",
            "Командной экономикой",
            "Бартерной экономикой"
        ],
        "ans": 2
    },
    {
        "q_en": "The TONIA rate in Kazakhstan's financial market is:",
        "q_ru": "Ставка TONIA на финансовом рынке Казахстана — это:",
        "opts_en": [
            "The overnight interest rate at which commercial banks in KZ lend to and borrow from each other",
            "The interest rate the National Bank of KZ pays on statutory reserves",
            "The mortgage interest rate offered to households",
            "The penalty rate charged on overdue tax payments",
            "The yield on 10-year US Treasury bonds"
        ],
        "opts_ru": [
            "Ставка овернайт, по которой коммерческие банки РК кредитуют друг друга на денежном рынке",
            "Ставка, которую Нацбанк РК платит по обязательным резервам",
            "Ипотечная ставка для физических лиц",
            "Пеня за просрочку налоговых платежей",
            "Доходность 10-летних казначейских облигаций США"
        ],
        "ans": 0
    },
    {
        "q_en": "The US Federal Funds rate is:",
        "q_ru": "Ставка по федеральным фондам США (Federal Funds rate) — это:",
        "opts_en": [
            "The interest rate at which commercial banks in the US lend reserves to each other overnight",
            "The interest rate the Federal Reserve pays on consumer deposits",
            "The interest rate the public pays on credit card debt",
            "The interest rate the US Treasury pays on foreign aid",
            "The statutory corporate income tax rate"
        ],
        "opts_ru": [
            "Ставка, по которой коммерческие банки США кредитуют друг друга резервами овернайт",
            "Ставка, которую ФРС платит по вкладам населения",
            "Ставка, которую граждане платят по кредитным картам",
            "Ставка по программам внешней помощи Казначейства США",
            "Ставка корпоративного подоходного налога"
        ],
        "ans": 0
    },
    {
        "q_en": "When prices rise at an extraordinarily rapid rate (typically exceeding 50% per month), it is called:",
        "q_ru": "Чрезвычайно быстрый рост общего уровня цен (обычно превышающий 50% в месяц) называется:",
        "opts_en": [
            "Hyperinflation",
            "Disinflation",
            "Deflation",
            "Creeping inflation",
            "Stagnation"
        ],
        "opts_ru": [
            "Гиперинфляцией",
            "Дезинфляцией",
            "Дефляцией",
            "Ползучей инфляцией",
            "Стагнацией"
        ],
        "ans": 0
    },
    {
        "q_en": "If the overall price level doubles, then:",
        "q_ru": "Если общий уровень цен в экономике удваивается, то:",
        "opts_en": [
            "The real value (purchasing power) of money is cut in half",
            "The quantity demanded of nominal money falls by half",
            "Nominal income is completely unaffected",
            "The real interest rate doubles",
            "The money supply is automatically cut in half"
        ],
        "opts_ru": [
            "Реальная стоимость (покупательная способность) денег сокращается вдвое",
            "Величина номинального спроса на деньги падает вдвое",
            "Номинальный доход совершенно не затрагивается",
            "Реальная процентная ставка удваивается",
            "Денежная масса автоматически сокращается вдвое"
        ],
        "ans": 0
    },
    {
        "q_en": "In the long run, the demand for money is most dependent upon:",
        "q_ru": "В долгосрочном периоде спрос на деньги в наибольшей степени зависит от:",
        "opts_en": [
            "The overall level of prices",
            "The short-term nominal interest rate",
            "The number of bank branches",
            "The availability of credit cards",
            "Government tariff policy"
        ],
        "opts_ru": [
            "Общего уровня цен в экономике",
            "Краткосрочной номинальной процентной ставки",
            "Количества банковских отделений",
            "Доступности кредитных карт",
            "Таможенно-тарифной политики государства"
        ],
        "ans": 0
    },
    {
        "q_en": "The classical Quantity Theory of Money concludes that a sustained increase in the money supply causes:",
        "q_ru": "Классическая количественная теория денег утверждает, что устойчивый рост денежной массы вызывает:",
        "opts_en": [
            "A proportional increase in the price level",
            "A proportional increase in real output",
            "A proportional decrease in velocity",
            "A proportional increase in velocity",
            "A proportional decrease in the price level"
        ],
        "opts_ru": [
            "Пропорциональный рост уровня цен",
            "Пропорциональный рост реального выпуска",
            "Пропорциональное снижение скорости обращения денег",
            "Пропорциональный рост скорости обращения денег",
            "Пропорциональное снижение уровня цен"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following is an example of a real variable?",
        "q_ru": "Что из перечисленного является примером реальной (а не номинальной) переменной?",
        "opts_en": [
            "The hourly wage rate measured in euros",
            "The market price of corn in tenge",
            "The nominal interest rate on a bank loan",
            "The ratio of the wage rate to the price of goods (real wage)",
            "Nominal GDP measured in current dollars"
        ],
        "opts_ru": [
            "Часовая ставка заработной платы, измеренная в евро",
            "Рыночная цена кукурузы в тенге",
            "Номинальная процентная ставка по банковскому кредиту",
            "Отношение заработной платы к цене товаров (реальная зарплата)",
            "Номинальный ВВП в текущих долларах"
        ],
        "ans": 3
    },
    {
        "q_en": "According to the principle of monetary neutrality, in the long run:",
        "q_ru": "Согласно принципу нейтральности денег, в долгосрочном периоде:",
        "opts_en": [
            "An increase in the money supply has no effect on any variable",
            "A change in the money supply affects only real variables such as real GDP",
            "A change in the money supply reduces velocity proportionally",
            "A change in the money supply affects only nominal variables such as prices and nominal wages",
            "The money supply cannot be altered by the Central Bank"
        ],
        "opts_ru": [
            "Увеличение денежной массы не влияет ни на какие показатели",
            "Изменение денежной массы влияет только на реальные переменные (реальный ВВП)",
            "Изменение денежной массы пропорционально снижает скорость обращения",
            "Изменение денежной массы влияет только на номинальные переменные (цены и номинальные зарплаты)",
            "Денежная масса не может регулироваться Центральным банком"
        ],
        "ans": 3
    },
    {
        "q_en": "According to the quantity equation (assuming constant velocity), if the money supply grows by 5% and real output grows by 2%, prices should rise by approximately:",
        "q_ru": "Согласно уравнению обмена (при постоянной скорости обращения), если денежная масса растет на 5%, а реальный ВВП — на 2%, то цены вырастут примерно на:",
        "opts_en": [
            "5 percent",
            "7 percent",
            "3 percent",
            "10 percent",
            "2 percent"
        ],
        "opts_ru": [
            "5 процентов",
            "7 процентов",
            "3 процента",
            "10 процентов",
            "2 процента"
        ],
        "ans": 2
    },
    {
        "q_en": "The velocity of money refers to:",
        "q_ru": "Скорость обращения денег (velocity of money) — это:",
        "opts_en": [
            "The speed at which new banknotes are printed",
            "The rate at which inflation accelerates",
            "The rate at which money loses its purchasing power",
            "The rate at which money changes hands in transactions",
            "The time required to clear an international wire transfer"
        ],
        "opts_ru": [
            "Скорость печати новых банкнот монетным двором",
            "Темп ускорения инфляции",
            "Скорость потери деньгами покупательной способности",
            "Частота, с которой денежная единица переходит из рук в руки в сделках",
            "Время проведения международного банковского перевода"
        ],
        "ans": 3
    },
    {
        "q_en": "Governments typically resort to an 'inflation tax' (printing money to finance deficits) when:",
        "q_ru": "Правительства обычно прибегают к «инфляционному налогу» (эмиссии денег для покрытия дефицита), когда:",
        "opts_en": [
            "The government has a large budget surplus",
            "Government spending is high, tax collection is inadequate, and borrowing is difficult",
            "An inflation tax is the most progressive and equitable tax",
            "Inflation has already dropped below zero",
            "Commercial banks refuse to hold excess reserves"
        ],
        "opts_ru": [
            "В стране наблюдается крупный профицит госбюджета",
            "Госрасходы высоки, налоговых сборов не хватает, а заимствования затруднены",
            "Инфляционный налог является самым прогрессивным и справедливым",
            "Инфляция опустилась ниже нуля",
            "Коммерческие банки отказываются держать избыточные резервы"
        ],
        "ans": 1
    },
    {
        "q_en": "If the price of apples rises sharply and consumers buy fewer apples and more oranges instead, a fixed-basket CPI will overstate inflation due to:",
        "q_ru": "Если цена на яблоки резко растет, и потребители покупают меньше яблок и больше апельсинов, индекс CPI с фиксированной корзиной завышает инфляцию из-за:",
        "opts_en": [
            "Base-year bias",
            "Substitution bias",
            "Unmeasured quality change",
            "Introduction of new goods",
            "Sample rounding error"
        ],
        "opts_ru": [
            "Искажения базового года",
            "Эффекта замещения (substitution bias)",
            "Неучтенного изменения качества",
            "Появления новых товаров",
            "Ошибки округления выборки"
        ],
        "ans": 1
    },
    {
        "q_en": "An 'inflation tax' is effectively a tax levied on:",
        "q_ru": "«Инфляционный налог» по своей экономической сути является налогом на:",
        "opts_en": [
            "People who hold cash and non-interest-bearing money",
            "Corporate capital gains only",
            "People who hold inflation-indexed government bonds",
            "Exporters of agricultural commodities",
            "Governments with balanced budgets"
        ],
        "opts_ru": [
            "Людей, хранящих наличные деньги и беспроцентные денежные остатки",
            "Исключительно прирост капитала корпораций",
            "Держателей индексируемых государственных облигаций",
            "Экспортеров сельскохозяйственной продукции",
            "Правительства со сбалансированным бюджетом"
        ],
        "ans": 0
    },
    {
        "q_en": "Suppose the nominal interest rate is 7% while the money supply grows at 5% per year. If the Central Bank raises money growth from 5% to 9%, the Fisher effect predicts that in the long run the nominal interest rate will become:",
        "q_ru": "Допустим, номинальная ставка равна 7%, а денежная масса растет на 5% в год. Если ЦБ ускорит рост денежной массы с 5% до 9%, по эффекту Фишера в долгосрочном периоде номинальная ставка составит:",
        "opts_en": [
            "9 percent",
            "11 percent",
            "4 percent",
            "16 percent",
            "12 percent"
        ],
        "opts_ru": [
            "9 процентов",
            "11 процентов",
            "4 процента",
            "16 процентов",
            "12 процентов"
        ],
        "ans": 1
    },
    {
        "q_en": "If actual inflation turns out to be significantly higher than people had expected when signing a loan contract, then:",
        "q_ru": "Если фактическая инфляция оказалась значительно выше ожидаемой при заключении кредитного договора, то:",
        "opts_en": [
            "No redistribution of wealth occurs",
            "Wealth is redistributed from borrowers to lenders",
            "The ex-post real interest rate remains unaffected",
            "Wealth is redistributed from lenders to borrowers",
            "Both lenders and borrowers gain real purchasing power"
        ],
        "opts_ru": [
            "Перераспределения богатства не происходит",
            "Богатство перераспределяется от заемщиков к кредиторам",
            "Фактическая реальная ставка процента не меняется",
            "Богатство перераспределяется от кредиторов к заемщикам",
            "И кредиторы, и заемщики выигрывают в покупательной способности"
        ],
        "ans": 3
    },
    {
        "q_en": "Which of the following costs of inflation occurs ONLY when inflation is variable and unpredictable (and NOT when inflation is steady and anticipated)?",
        "q_ru": "Какие издержки инфляции возникают ТОЛЬКО при изменчивой и непредсказуемой инфляции (и отсутствуют при стабильной и ожидаемой)?",
        "opts_en": [
            "Inflation-induced tax distortions",
            "Arbitrary redistributions of wealth between debtors and creditors",
            "Shoeleather costs",
            "Menu costs",
            "Inconvenience of recalculating prices"
        ],
        "opts_ru": [
            "Налоговые искажения, вызванные инфляцией",
            "Произвольное перераспределение богатства между должниками и кредиторами",
            "Издержки «стоптанных башмаков»",
            "Издержки «меню»",
            "Неудобства, связанные с пересчетом цен"
        ],
        "ans": 1
    },
    {
        "q_en": "Because of high inflation, a restaurant must print and distribute new menus with updated prices every week. This is an example of:",
        "q_ru": "Из-за высокой инфляции ресторан вынужден каждую неделю печатать и распространять новые меню с обновленными ценами. Это пример:",
        "opts_en": [
            "Shoeleather costs",
            "Costs due to confusion and inconvenience",
            "Arbitrary redistribution of wealth",
            "Inflation-induced tax distortion",
            "Menu costs"
        ],
        "opts_ru": [
            "Издержек «стоптанных башмаков»",
            "Издержек путаницы и неудобств",
            "Произвольного перераспределения богатства",
            "Инфляционных налоговых искажений",
            "Издержек «меню» (menu costs)"
        ],
        "ans": 4
    },
    {
        "q_en": "Because of high inflation, people visit the bank every morning to withdraw small amounts of cash so they hold less currency. This is an example of:",
        "q_ru": "Из-за высокой инфляции люди ходят в банк каждое утро, чтобы снимать деньги мелкими порциями и не держать наличность. Это пример:",
        "opts_en": [
            "Relative-price variability",
            "Menu costs",
            "Shoeleather costs",
            "Tax distortion costs",
            "Fiscal drag"
        ],
        "opts_ru": [
            "Искажения относительных цен",
            "Издержек «меню»",
            "Издержек «стоптанных башмаков» (shoeleather costs)",
            "Издержек налоговых искажений",
            "Фискального тормоза"
        ],
        "ans": 2
    },
    {
        "q_en": "If the real interest rate is 4%, the inflation rate is 6%, and the tax rate on nominal interest income is 25%, what is the after-tax real interest rate?",
        "q_ru": "Если реальная ставка процента равна 4%, инфляция — 6%, а налог на номинальный процентный доход — 25%, чему равна реальная ставка после уплаты налога?",
        "opts_en": [
            "5.0 percent",
            "1.5 percent",
            "1.0 percent",
            "3.0 percent",
            "4.0 percent"
        ],
        "opts_ru": [
            "5.0 процентов",
            "1.5 процента",
            "1.0 процент",
            "3.0 процента",
            "4.0 процента"
        ],
        "ans": 1
    },
    {
        "q_en": "Which of the following is NOT one of the three standard functions of money?",
        "q_ru": "Что из перечисленного НЕ относится к трем классическим функциям денег?",
        "opts_en": [
            "Guaranteed hedge against hyperinflation",
            "Medium of exchange",
            "Unit of account",
            "Store of value",
            "Standard of deferred payment"
        ],
        "opts_ru": [
            "Гарантированная защита от гиперинфляции",
            "Средство обращения (обмена)",
            "Мера стоимости (расчетная единица)",
            "Средство сбережения (накопления)",
            "Средство платежа"
        ],
        "ans": 0
    },
    {
        "q_en": "An example of fiat money is:",
        "q_ru": "Примером фиатных (декретных) денег являются:",
        "opts_en": [
            "Paper banknotes (such as euros, dollars, or tenge)",
            "Gold bullion",
            "Pure silver coins",
            "Cigarettes used as currency in prisons",
            "Copper ingots"
        ],
        "opts_ru": [
            "Бумажные банкноты (например, евро, доллары или тенге)",
            "Золотые слитки",
            "Монеты из чистого серебра",
            "Сигареты, используемые как валюта в закрытых учреждениях",
            "Медные слитки"
        ],
        "ans": 0
    },
    {
        "q_en": "Commodity money is defined as money that:",
        "q_ru": "Товарные деньги определяются как деньги, которые:",
        "opts_en": [
            "Takes the form of a commodity with intrinsic value (such as gold)",
            "Has zero intrinsic value",
            "Is issued exclusively by digital central banks",
            "Cannot be used as a medium of exchange",
            "Exists only as electronic ledger entries"
        ],
        "opts_ru": [
            "Имеют форму товара, обладающего внутренней стоимостью (например, золото)",
            "Не имеют никакой внутренней стоимости",
            "Выпускаются исключительно в цифровой форме",
            "Не могут использоваться как средство обращения",
            "Существуют только в виде электронных записей"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following statements about interest rates is correct?",
        "q_ru": "Какое из следующих утверждений о процентных ставках является верным?",
        "opts_en": [
            "The real interest rate equals the nominal interest rate minus the inflation rate",
            "The nominal interest rate equals the inflation rate minus the real interest rate",
            "The real interest rate equals the sum of nominal rate and inflation",
            "The nominal interest rate equals the real rate minus inflation",
            "Real and nominal interest rates are always identical"
        ],
        "opts_ru": [
            "Реальная процентная ставка равна номинальной ставке минус темп инфляции",
            "Номинальная ставка равна темпу инфляции минус реальная ставка",
            "Реальная ставка равна сумме номинальной ставки и инфляции",
            "Номинальная ставка равна реальной ставке минус инфляция",
            "Реальная и номинальная процентные ставки всегда совпадают"
        ],
        "ans": 0
    },
    {
        "q_en": "If inflation is 8 percent and the real interest rate is 3 percent, then the nominal interest rate must be:",
        "q_ru": "Если инфляция составляет 8%, а реальная процентная ставка равна 3%, то номинальная ставка должна составлять:",
        "opts_en": [
            "3/8 percent",
            "5 percent",
            "11 percent",
            "24 percent",
            "-5 percent"
        ],
        "opts_ru": [
            "3/8 процента",
            "5 процентов",
            "11 процентов",
            "24 процента",
            "-5 процентов"
        ],
        "ans": 2
    },
    {
        "q_en": "Under which of the following conditions would you most prefer to be a LENDER?",
        "q_ru": "При каких из перечисленных условий вам выгоднее всего выступать в роли КРЕДИТОРА?",
        "opts_en": [
            "Nominal interest rate = 15%, inflation rate = 14%",
            "Nominal interest rate = 20%, inflation rate = 25%",
            "Nominal interest rate = 12%, inflation rate = 9%",
            "Nominal interest rate = 5%, inflation rate = 1%",
            "Nominal interest rate = 8%, inflation rate = 8%"
        ],
        "opts_ru": [
            "Номинальная ставка = 15%, инфляция = 14%",
            "Номинальная ставка = 20%, инфляция = 25%",
            "Номинальная ставка = 12%, инфляция = 9%",
            "Номинальная ставка = 5%, инфляция = 1%",
            "Номинальная ставка = 8%, инфляция = 8%"
        ],
        "ans": 3
    },
    {
        "q_en": "Under which of the following conditions would you most prefer to be a BORROWER?",
        "q_ru": "При каких из перечисленных условий вам выгоднее всего выступать в роли ЗАЕМЩИКА?",
        "opts_en": [
            "Nominal interest rate = 12%, inflation rate = 9%",
            "Nominal interest rate = 20%, inflation rate = 25%",
            "Nominal interest rate = 5%, inflation rate = 1%",
            "Nominal interest rate = 15%, inflation rate = 14%",
            "Nominal interest rate = 10%, inflation rate = 6%"
        ],
        "opts_ru": [
            "Номинальная ставка = 12%, инфляция = 9%",
            "Номинальная ставка = 20%, инфляция = 25%",
            "Номинальная ставка = 5%, инфляция = 1%",
            "Номинальная ставка = 15%, инфляция = 14%",
            "Номинальная ставка = 10%, инфляция = 6%"
        ],
        "ans": 1
    },
    {
        "q_en": "Each of the following is a major reason why international trade has expanded in recent decades EXCEPT:",
        "q_ru": "Все перечисленное является важной причиной расширения международной торговли в последние десятилетия, КРОМЕ:",
        "opts_en": [
            "New maritime fuel regulations increasing shipping costs",
            "Containerization and larger cargo ships reducing transport costs",
            "Improvements in global telecommunications and the internet",
            "Trade liberalization through GATT and the World Trade Organization (WTO)",
            "Technological advances enabling global supply chains"
        ],
        "opts_ru": [
            "Новых экологических требований к судовому топливу, удорожающих перевозки",
            "Контейнеризации и крупных судов, снизивших транспортные издержки",
            "Развития глобальных телекоммуникаций и интернета",
            "Либерализации торговли в рамках ГАТТ и ВТО",
            "Технологического прогресса, позволившего создавать глобальные цепочки поставок"
        ],
        "ans": 0
    },
    {
        "q_en": "When an initial increase in government purchases raises household incomes, leading those households to spend part of that extra income on consumer goods, this illustrates:",
        "q_ru": "Когда первоначальный рост госзакупок увеличивает доходы граждан, а они тратят часть этого дополнительного дохода на потребительские товары, это иллюстрирует:",
        "opts_en": [
            "The multiplier effect",
            "Supply-side tax cuts",
            "Automatic stabilizers",
            "The crowding-out effect",
            "The Fisher effect"
        ],
        "opts_ru": [
            "Эффект мультипликатора",
            "Налоговое стимулирование предложения",
            "Автоматические стабилизаторы",
            "Эффект вытеснения (crowding-out)",
            "Эффект Фишера"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following statements is always true for a country experiencing a trade deficit?",
        "q_ru": "Какое утверждение всегда верно для страны, имеющей дефицит торгового баланса?",
        "opts_en": [
            "Net exports (NX) are negative",
            "Net capital outflow must be positive",
            "Exports exceed imports",
            "Net exports (NX) are positive",
            "The government budget must be in surplus"
        ],
        "opts_ru": [
            "Чистый экспорт (NX) является отрицательным",
            "Чистый отток капитала должен быть положительным",
            "Экспорт превышает импорт",
            "Чистый экспорт (NX) является положительным",
            "Государственный бюджет должен быть профицитным"
        ],
        "ans": 0
    },
    {
        "q_en": "Which of the following events would generate demand-pull inflation?",
        "q_ru": "Какое из следующих событий вызовет инфляцию спроса (demand-pull inflation)?",
        "opts_en": [
            "A sharp increase in the price of labor",
            "A sudden spike in crude oil prices",
            "A surge in household consumption and business investment",
            "A major cut in government purchases",
            "A contraction in the money supply"
        ],
        "opts_ru": [
            "Резкий рост стоимости рабочей силы",
            "Внезапный скачок цен на сырую нефть",
            "Бум потребительских расходов домохозяйств и инвестиций бизнеса",
            "Существенное сокращение государственных закупок",
            "Сжатие денежной массы"
        ],
        "ans": 2
    },
    {
        "q_en": "If government purchases and transfer expenditures exceed government tax revenues in a given year, then:",
        "q_ru": "Если государственные расходы превышают налоговые поступления в бюджет за год, то в экономике возникает:",
        "opts_en": [
            "There is a government budget deficit",
            "Public saving is positive",
            "There is a government budget surplus",
            "The national debt automatically shrinks",
            "Net exports must be zero"
        ],
        "opts_ru": [
            "Дефицит государственного бюджета",
            "Положительные государственные сбережения",
            "Профицит государственного бюджета",
            "Автоматическое сокращение госдолга",
            "Нулевой чистый экспорт"
        ],
        "ans": 0
    }
];

const t1SavedAnswers = {};

// ДЕТЕРМИНИРОВАННЫЙ ГЕНЕРАТОР 6 УНИКАЛЬНЫХ ВОПРОСОВ ДЛЯ КАЖДОГО СТУДЕНТА
function getStudentQuestionsMC2(studentIdx) {
    const pseudoRandom = (seed) => {
        let x = Math.sin(seed * 91.3458) * 47453.5453;
        return x - Math.floor(x);
    };

    const shuffleQuestionOptions = (qObj, seed, targetLetterIdx) => {
        const letters = ["A", "B", "C", "D", "E"];
        const origCorrectIdx = qObj.ans;

        let wrongIndices = [0, 1, 2, 3, 4].filter(idx => idx !== origCorrectIdx);
        for (let i = wrongIndices.length - 1; i > 0; i--) {
            let j = Math.floor(pseudoRandom(seed + i * 19) * (i + 1));
            [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
        }

        let finalIndices = [];
        let wPtr = 0;
        for (let pos = 0; pos < 5; pos++) {
            if (pos === targetLetterIdx) {
                finalIndices.push(origCorrectIdx);
            } else {
                finalIndices.push(wrongIndices[wPtr++]);
            }
        }

        let newOptsEn = [];
        let newOptsRu = [];
        finalIndices.forEach((origIdx, newIdx) => {
            const letter = letters[newIdx];
            newOptsEn.push(`${letter}) ${qObj.opts_en[origIdx]}`);
            newOptsRu.push(`${letter}) ${qObj.opts_ru[origIdx]}`);
        });

        return {
            q_en: qObj.q_en,
            q_ru: qObj.q_ru,
            opts_en: newOptsEn,
            opts_ru: newOptsRu,
            ans: letters[targetLetterIdx]
        };
    };

    const count = 6;
    let selectedIndices = [];
    let usedSet = new Set();
    let step = 0;

    while (selectedIndices.length < count) {
        let candidateIdx = Math.floor(pseudoRandom((studentIdx + 1) * 37 + step * 53) * MC2_THEORY_POOL.length);
        if (!usedSet.has(candidateIdx)) {
            usedSet.add(candidateIdx);
            selectedIndices.push(candidateIdx);
        }
        step++;
    }

    let targetPositions = [0, 1, 2, 3, 4, Math.floor(pseudoRandom((studentIdx + 1) * 107) * 5)];
    for (let i = targetPositions.length - 1; i > 0; i--) {
        let j = Math.floor(pseudoRandom((studentIdx + 1) * 71 + i * 29) * (i + 1));
        [targetPositions[i], targetPositions[j]] = [targetPositions[j], targetPositions[i]];
    }

    return selectedIndices.map((poolIdx, qNum) => {
        return shuffleQuestionOptions(
            MC2_THEORY_POOL[poolIdx],
            (studentIdx + 1) * 1000 + poolIdx * 17 + qNum,
            targetPositions[qNum]
        );
    });
}

function renderTask1MC2(studentIdx, lang) {
    const container = document.getElementById('task1-container');
    if (!container) return;

    const isEn = lang === 'en';
    const selectedQuestions = getStudentQuestionsMC2(studentIdx);
    const savedMap = t1SavedAnswers[studentIdx] || {};

    const qHTML = selectedQuestions.map((qObj, i) => {
        const qText = isEn ? qObj.q_en : qObj.q_ru;
        const opts = isEn ? qObj.opts_en : qObj.opts_ru;
        const qName = `p1-q${i + 1}`;
        const qLabel = isEn ? `Question 1.${i + 1}` : `Вопрос 1.${i + 1}`;

        let optionsHTML = '';
        for (let oIdx = 0; oIdx < opts.length; oIdx++) {
            const optText = opts[oIdx];
            const letter = String.fromCharCode(65 + oIdx);
            const checked = savedMap[qName] === letter ? 'checked' : '';
            optionsHTML += `
                <label class="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition">
                    <input type="radio" name="${qName}" value="${letter}" data-ans="${qObj.ans}" ${checked}
                           onchange="if(!t1SavedAnswers[${studentIdx}]) t1SavedAnswers[${studentIdx}]={}; t1SavedAnswers[${studentIdx}]['${qName}']=this.value"
                           class="mt-0.5 accent-cyan-400">
                    <span class="text-xs md:text-sm text-slate-200">${optText}</span>
                </label>
            `;
        }

        return `
            <div class="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-3">
                <span class="text-[11px] bg-cyan-500/10 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-500/20 uppercase font-mono font-bold inline-block">${qLabel}</span>
                <div class="text-xs md:text-sm font-bold text-white leading-relaxed">${qText}</div>
                <div class="space-y-2">
                    ${optionsHTML}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="card p-6 border-t-2 border-cyan-500 space-y-5">
            <div class="flex flex-wrap justify-between items-center gap-2">
                <span class="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md border border-cyan-500/20 uppercase font-black tracking-widest">
                    ${isEn ? 'Task 1 • Macroeconomic Theory (20 pts)' : 'Задание 1 • Теоретический блок (20 баллов)'}
                </span>
                <span class="text-xs font-mono text-slate-400">
                    ${isEn ? '6 personalized questions × 3.33 pts = 20 pts' : '6 персональных вопросов × 3.33 балла = 20 баллов'}
                </span>
            </div>
            <div class="space-y-4">
                ${qHTML}
            </div>
        </div>
    `;
}
