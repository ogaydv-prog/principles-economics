/* questions_p1_p2.js — Complete Bilinguial Question Bank (EN/RU) for AlmaU MC1 (2026) */

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
        q: {
            en: "Microeconomics is the study of?",
            ru: "Что изучает микроэкономика?"
        },
        options: {
            en: [
                "the behavior of consumers",
                "how households and firms make decisions",
                "how government affects the economy",
                "how the economy as a whole works",
                "rates of unemployment and inflation"
            ],
            ru: [
                "поведение потребителей",
                "принимаемые решения домохозяйств и фирм",
                "влияние государства на экономику",
                "функционирование экономики в целом",
                "уровни безработицы и инфляции"
            ]
        }
    },
    {
        id: 2,
        q: {
            en: "Perfectly Elastic Demand Curve looks like…",
            ru: "Кривая совершенно эластичного спроса выглядит как…"
        },
        options: {
            en: [
                "as a vertical line",
                "has a negative slope",
                "as a horizontal line",
                "has a positive slope",
                "as 45-degree line"
            ],
            ru: [
                "вертикальная линия",
                "линия с отрицательным наклоном",
                "горизонтальная линия",
                "линия с положительным наклоном",
                "линия под углом 45 градусов"
            ]
        }
    },
    {
        id: 3,
        q: {
            en: "Scarcity exists because:",
            ru: "Ограниченность (редкость) ресурсов существует потому, что:"
        },
        options: {
            en: [
                "human wants exceed the productive capacity of the economy",
                "supplies of land and natural resources are unlimited",
                "physical capital does not depreciate",
                "population and labor force growth are slowing",
                "innovation causes unemployment"
            ],
            ru: [
                "потребности людей превышают производственные возможности экономики",
                "запасы земли и природных ресурсов неограниченны",
                "физический капитал не изнашивается",
                "рост населения и рабочей силы замедляется",
                "инновации вызывают безработицу"
            ]
        }
    },
    {
        id: 4,
        q: {
            en: "Which of the following is the fixed cost of a firm?",
            ru: "Что из перечисленного относится к постоянным издержкам фирмы?"
        },
        options: {
            en: [
                "Loan payment",
                "Security guard costs",
                "Rent payment",
                "Cost of raw materials",
                "Staff salary"
            ],
            ru: [
                "Выплата по кредиту",
                "Расходы на охрану",
                "Арендная плата",
                "Затраты на сырье",
                "Заработная плата штата"
            ]
        }
    },
    {
        id: 5,
        q: {
            en: "Which of the following is a variable cost of a firm?",
            ru: "Что из перечисленного относится к переменным издержкам фирмы?"
        },
        options: {
            en: [
                "Logistics costs",
                "Loan payment",
                "Depreciation of equipment",
                "Cost of raw materials",
                "Production workers hourly salary"
            ],
            ru: [
                "Логистические расходы",
                "Выплата по кредиту",
                "Амортизация оборудования",
                "Затраты на сырье и материалы",
                "Сдельная зарплата рабочих"
            ]
        }
    },
    {
        id: 6,
        q: {
            en: "Both Demand and Supply are QD = 800 – 2Р, QS = 200 + 3Р. Find equilibrium price and quantity:",
            ru: "Спрос и предложение заданы уравнениями QD = 800 – 2Р, QS = 200 + 3Р. Найдите равновесную цену и объем:"
        },
        options: {
            en: [
                "Р = 80, Q = 400",
                "Р = 400, Q = 50",
                "Р = 350, Q = 100",
                "Р = 40, Q = 120",
                "Р = 120, Q = 560"
            ],
            ru: [
                "Р = 80, Q = 400",
                "Р = 400, Q = 50",
                "Р = 350, Q = 100",
                "Р = 40, Q = 120",
                "Р = 120, Q = 560"
            ]
        }
    },
    {
        id: 7,
        q: {
            en: "Which of the following is Marginal Cost (MC)?",
            ru: "Какая формула соответствует предельным издержкам (MC)?"
        },
        options: {
            en: [
                "MC = TR / Q",
                "MC = ΔTC / ΔQ",
                "MC = P * Q",
                "MC = P * 2Q",
                "MC = ΔTR / ΔQ"
            ],
            ru: [
                "MC = TR / Q",
                "MC = ΔTC / ΔQ",
                "MC = P * Q",
                "MC = P * 2Q",
                "MC = ΔTR / ΔQ"
            ]
        }
    },
    {
        id: 8,
        q: {
            en: "Who is most interested in maximizing Marginal Utility in the economy?",
            ru: "Кто больше всего заинтересован в максимизации предельной полезности в экономике?"
        },
        options: {
            en: [
                "landlords",
                "consumers",
                "employers",
                "government",
                "firms"
            ],
            ru: [
                "землевладельцы",
                "потребители",
                "работодатели",
                "государство",
                "фирмы"
            ]
        }
    },
    {
        id: 9,
        q: {
            en: "Which of the following best describes the monopolistic competition market?",
            ru: "Что лучше всего характеризует рынок монополистической конкуренции?"
        },
        options: {
            en: [
                "Free entry",
                "Nonprice competition",
                "No controls of prices",
                "Large number of sellers",
                "Differentiated products"
            ],
            ru: [
                "Свободный вход",
                "Неценовая конкуренция",
                "Отсутствие контроля над ценами",
                "Большое количество продавцов",
                "Дифференцированная продукция"
            ]
        }
    },
    {
        id: 10,
        q: {
            en: "Which of the following best describes the oligopoly market?",
            ru: "Что лучше всего характеризует рынок олигополии?"
        },
        options: {
            en: [
                "Free entry",
                "Nonprice competition",
                "No controls of prices",
                "Large number of sellers",
                "Differentiated products"
            ],
            ru: [
                "Свободный вход",
                "Неценовая конкуренция",
                "Отсутствие контроля цен",
                "Большое число продавцов",
                "Дифференцированные товары"
            ]
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

    // Рандомизация порядка под вариант студента
    let shuffledBank = [...QUESTIONS_DATABASE];
    for (let i = shuffledBank.length - 1; i > 0; i--) {
        const j = Math.floor(pseudoRandom(seed++) * (i + 1));
        [shuffledBank[i], shuffledBank[j]] = [shuffledBank[j], shuffledBank[i]];
    }

    const selectedQuestions = shuffledBank.slice(0, 10);

    selectedQuestions.forEach((qObj, index) => {
        const textQ = qObj.q[lang] || qObj.q['en'];
        const opts = qObj.options[lang] || qObj.options['en'];

        let cardHtml = `
        <div class="card p-5 bg-slate-900/90 border border-slate-800 space-y-4 rounded-xl shadow-lg">
            <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">${lang === 'en' ? 'Question' : 'Вопрос'} #${index + 1}</span>
                <span class="text-[9px] text-slate-500 font-mono">Ref ID: ${qObj.id}</span>
            </div>
            <h4 class="text-xs font-bold text-white leading-relaxed">${textQ}</h4>
            <div class="space-y-2">
        `;

        opts.forEach((optText, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx); // A, B, C, D, E
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
