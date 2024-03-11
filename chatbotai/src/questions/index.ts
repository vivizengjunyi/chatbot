export interface Question {
    id: number;
    question: string;
    answerType: string;
    options: { id: number; name: string }[] | null;
    nextQuestion: { id: number | null; value: string | number | null }[] | null;
    answer?: any;
    questionTimestamp?: any;
    answerTimestamp?: any;
}
export const questions: Question[] = [
    {
        id: 1,
        question: 'What is your first name?',
        answerType: 'text',
        options: null,
        nextQuestion: [{
            id: 2,
            value: null,
        }]
    },
    {
        id: 2,
        question: 'What is your last name?',
        answerType: 'text',
        options: null,
        nextQuestion: [{
            id: 3,
            value: null,
        }]
    },
    {
        id: 3,
        question: 'What is your gender?',
        answerType: 'dropdown',
        options: [
            {
                id: 1,
                name: 'Male',
            },
            {
                id: 2,
                name: 'Female',
            },
            {
                id: 3,
                name: 'Unknown',
            },
            {
                id: 4,
                name: 'Another gender',
            },
        ],
        nextQuestion: [{
            id: 4,
            value: null,
        }]
    },
    {
        id: 4,
        question: 'What is your email address?',
        answerType: 'email',
        options: null,
        nextQuestion: [{
            id: 5,
            value: null,
        }
        ]
    },
    {
        id: 5,
        question: 'What is the province you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Alberta" },
            { "id": 2, "name": "British Columbia" },
            { "id": 3, "name": "Manitoba" },
            { "id": 4, "name": "New Brunswick" },
            { "id": 5, "name": "Newfoundland and Labrador" },
            { "id": 6, "name": "Nova Scotia" },
            { "id": 7, "name": "Ontario" },
            { "id": 8, "name": "Prince Edward Island" },
            { "id": 9, "name": "Quebec" },
            { "id": 10, "name": "Saskatchewan" }
        ],
        nextQuestion: [
            {
                id: 6,
                value: "Alberta",
            },
            {
                id: 7,
                value: "British Columbia",
            },
            {
                id: 8,
                value: "Manitoba",
            },
            {
                id: 9,
                value: "New Brunswick",
            },
            {
                id: 10,
                value: "Newfoundland and Labrador",
            },
            {
                id: 11,
                value: "Nova Scotia",
            },
            {
                id: 12,
                value: "Ontario",
            },
            {
                id: 13,
                value: "Prince Edward Island",
            },
            {
                id: 14,
                value: "Quebec",
            },
            {
                id: 15,
                value: "Saskatchewan",
            },
        ]
    },
    {
        id: 6,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Calgary" },
            { "id": 2, "name": "Edmonton" },
            { "id": 3, "name": "Red Deer" },
            { "id": 4, "name": "Lethbridge" },
            { "id": 5, "name": "St. Albert" },
            { "id": 6, "name": "Medicine Hat" },
            { "id": 7, "name": "Grande Prairie" },
            { "id": 8, "name": "Airdrie" },
            { "id": 9, "name": "Spruce Grove" },
            { "id": 10, "name": "Leduc" },
            { "id": 11, "name": "Fort Saskatchewan" },
            { "id": 12, "name": "Chestermere" },
            { "id": 13, "name": "Lloydminster" },
            { "id": 14, "name": "Camrose" },
            { "id": 15, "name": "Cold Lake" },
            { "id": 16, "name": "Brooks" },
            { "id": 17, "name": "Wetaskiwin" }
        ],
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 7,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Vancouver" },
            { "id": 2, "name": "Victoria" },
            { "id": 3, "name": "Kelowna" },
            { "id": 4, "name": "Burnaby" },
            { "id": 5, "name": "Surrey" },
            { "id": 6, "name": "Richmond" },
            { "id": 7, "name": "Abbotsford" },
            { "id": 8, "name": "Coquitlam" },
            { "id": 9, "name": "Saanich" },
            { "id": 10, "name": "Kamloops" },
            { "id": 11, "name": "Nanaimo" },
            { "id": 12, "name": "Chilliwack" },
            { "id": 13, "name": "Langley" },
            { "id": 14, "name": "Delta" },
            { "id": 15, "name": "North Vancouver" },
            { "id": 16, "name": "Maple Ridge" },
            { "id": 17, "name": "New Westminster" },
            { "id": 18, "name": "Penticton" },
            { "id": 19, "name": "Prince George" },
            { "id": 20, "name": "Vernon" },
            { "id": 21, "name": "Courtenay" }
        ],
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 8,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Winnipeg" },
            { "id": 2, "name": "Brandon" },
            { "id": 3, "name": "Steinbach" },
            { "id": 4, "name": "Thompson" },
            { "id": 5, "name": "Portage la Prairie" },
            { "id": 6, "name": "Winkler" },
            { "id": 7, "name": "Selkirk" },
            { "id": 8, "name": "Dauphin" },
            { "id": 9, "name": "Morden" },
            { "id": 10, "name": "The Pas" },
            { "id": 11, "name": "Flin Flon" },
            { "id": 12, "name": "Swan River" },
            { "id": 13, "name": "Neepawa" },
            { "id": 14, "name": "Gimli" },
            { "id": 15, "name": "Churchill" },
            { "id": 16, "name": "Altona" },
            { "id": 17, "name": "Virden" }
        ],
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 9,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Fredericton" },
            { "id": 2, "name": "Moncton" },
            { "id": 3, "name": "Saint John" },
            { "id": 4, "name": "Miramichi" },
            { "id": 5, "name": "Bathurst" },
            { "id": 6, "name": "Edmundston" },
            { "id": 7, "name": "Campbellton" },
            { "id": 8, "name": "Dieppe" },
            { "id": 9, "name": "Riverview" },
            { "id": 10, "name": "Quispamsis" },
            { "id": 11, "name": "Rothesay" },
            { "id": 12, "name": "Sackville" },
            { "id": 13, "name": "Shediac" },
            { "id": 14, "name": "Sussex" },
            { "id": 15, "name": "Oromocto" },
            { "id": 16, "name": "Grand Falls" },
            { "id": 17, "name": "Woodstock" }
        ]
        ,
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 10,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "St. John's" },
            { "id": 2, "name": "Corner Brook" },
            { "id": 3, "name": "Mount Pearl" },
            { "id": 4, "name": "Conception Bay South" },
            { "id": 5, "name": "Paradise" },
            { "id": 6, "name": "Grand Falls-Windsor" },
            { "id": 7, "name": "Gander" },
            { "id": 8, "name": "Happy Valley-Goose Bay" },
            { "id": 9, "name": "Torbay" },
            { "id": 10, "name": "Labrador City" },
            { "id": 11, "name": "Stephenville" },
            { "id": 12, "name": "Portugal Cove-St. Philip's" },
            { "id": 13, "name": "Clarenville" },
            { "id": 14, "name": "Bay Roberts" },
            { "id": 15, "name": "Deer Lake" },
            { "id": 16, "name": "Carbonear" },
            { "id": 17, "name": "Bonavista" }
        ],
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 11,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Halifax" },
            { "id": 2, "name": "Sydney" },
            { "id": 3, "name": "Dartmouth" },
            { "id": 4, "name": "Truro" },
            { "id": 5, "name": "New Glasgow" },
            { "id": 6, "name": "Glace Bay" },
            { "id": 7, "name": "Sydney Mines" },
            { "id": 8, "name": "Kentville" },
            { "id": 9, "name": "Amherst" },
            { "id": 10, "name": "Bridgewater" },
            { "id": 11, "name": "Yarmouth" },
            { "id": 12, "name": "Antigonish" },
            { "id": 13, "name": "Wolfville" },
            { "id": 14, "name": "Sackville" },
            { "id": 15, "name": "Digby" },
            { "id": 16, "name": "Shelburne" },
            { "id": 17, "name": "Lunenburg" }
        ]
        ,
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 12,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Toronto" },
            { "id": 2, "name": "Ottawa" },
            { "id": 3, "name": "Mississauga" },
            { "id": 4, "name": "Brampton" },
            { "id": 5, "name": "Hamilton" },
            { "id": 6, "name": "London" },
            { "id": 7, "name": "Markham" },
            { "id": 8, "name": "Vaughan" },
            { "id": 9, "name": "Kitchener" },
            { "id": 10, "name": "Windsor" },
            { "id": 11, "name": "Richmond Hill" },
            { "id": 12, "name": "Oakville" },
            { "id": 13, "name": "Burlington" },
            { "id": 14, "name": "Greater Sudbury" },
            { "id": 15, "name": "Oshawa" },
            { "id": 16, "name": "Barrie" },
            { "id": 17, "name": "St. Catharines" },
            { "id": 18, "name": "Cambridge" },
            { "id": 19, "name": "Kingston" },
            { "id": 20, "name": "Guelph" },
            { "id": 21, "name": "Thunder Bay" },
            { "id": 22, "name": "Waterloo" },
            { "id": 23, "name": "Brantford" }
        ]
        ,
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 13,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Charlottetown" },
            { "id": 2, "name": "Summerside" },
            { "id": 3, "name": "Stratford" },
            { "id": 4, "name": "Cornwall" },
            { "id": 5, "name": "Montague" },
            { "id": 6, "name": "Kensington" },
            { "id": 7, "name": "Souris" },
            { "id": 8, "name": "Alberton" },
            { "id": 9, "name": "Tignish" },
            { "id": 10, "name": "Georgetown" }
        ],
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 14,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Montreal" },
            { "id": 2, "name": "Quebec City" },
            { "id": 3, "name": "Laval" },
            { "id": 4, "name": "Gatineau" },
            { "id": 5, "name": "Longueuil" },
            { "id": 6, "name": "Sherbrooke" },
            { "id": 7, "name": "Saguenay" },
            { "id": 8, "name": "Levis" },
            { "id": 9, "name": "Trois-Rivières" },
            { "id": 10, "name": "Terrebonne" },
            { "id": 11, "name": "Saint-Jean-sur-Richelieu" },
            { "id": 12, "name": "Repentigny" },
            { "id": 13, "name": "Drummondville" },
            { "id": 14, "name": "Saint-Jérôme" },
            { "id": 15, "name": "Granby" },
            { "id": 16, "name": "Blainville" },
            { "id": 17, "name": "Saint-Hyacinthe" },
            { "id": 18, "name": "Dollard-Des Ormeaux" },
            { "id": 19, "name": "Rimouski" },
            { "id": 20, "name": "Chateauguay" },
            { "id": 21, "name": "Saint-Eustache" },
            { "id": 22, "name": "Victoriaville" },
            { "id": 23, "name": "Rouyn-Noranda" }
        ]
        ,
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 15,
        question: 'What is the city you are currently living in?',
        answerType: 'dropdown',
        options: [
            { "id": 1, "name": "Saskatoon" },
            { "id": 2, "name": "Regina" },
            { "id": 3, "name": "Prince Albert" },
            { "id": 4, "name": "Moose Jaw" },
            { "id": 5, "name": "Lloydminster" },
            { "id": 6, "name": "Swift Current" },
            { "id": 7, "name": "Yorkton" },
            { "id": 8, "name": "North Battleford" },
            { "id": 9, "name": "Estevan" },
            { "id": 10, "name": "Weyburn" },
            { "id": 11, "name": "Martensville" },
            { "id": 12, "name": "Melfort" },
            { "id": 13, "name": "Humboldt" },
            { "id": 14, "name": "Meadow Lake" },
            { "id": 15, "name": "Melville" },
            { "id": 16, "name": "Flin Flon" }
        ],
        nextQuestion: [{
            id: 16,
            value: null,
        }]
    },
    {
        id: 16,
        question: 'What is your phone number?',
        answerType: 'text',
        options: null,
        nextQuestion: [{
            id: 17,
            value: null,
        }]
    },
    {
        id: 17,
        question: 'What is your professional summary?',
        answerType: 'text',
        options: null,
        nextQuestion: [{
            id: 18,
            value: null,
        }]
    },
    {
        id: 18,
        question: 'Do you have any work experience?',
        answerType: 'boolean',
        options: null,
        nextQuestion: [
            {
                id: 19,
                value: "Yes",
            },
            {
                id: 26,
                value: "No",
            },
        ]
    },
    {
        id: 19,
        question: 'What is your job title?',
        answerType: 'text',
        options: null,
        nextQuestion: [
            {
                id: 20,
                value: null,
            }
        ]
    },
    {
        id: 20,
        question: 'What is your employer?',
        answerType: 'text',
        options: null,
        nextQuestion: [
            {
                id: 21,
                value: null,
            }
        ]
    },
    {
        id: 21,
        question: 'Where is your employer located?',
        answerType: 'text',
        options: null,
        nextQuestion: [
            {
                id: 22,
                value: null,
            }
        ]
    },
    {
        id: 22,
        question: 'When did you start working?',
        answerType: 'date',
        options: null,
        nextQuestion: [
            {
                id: 23,
                value: null,
            }
        ]
    },
    {
        id: 23,
        question: 'when did you stop working?',
        answerType: 'date',
        options: null,
        nextQuestion: [
            {
                id: 24,
                value: null,
            }
        ]
    },
    {
        id: 24,
        question: 'What is your job description?',
        answerType: 'date',
        options: null,
        nextQuestion: [
            {
                id: 25,
                value: null,
            }
        ]
    },
    {
        id: 25,
        question: 'Do you want to add another work experience?',
        answerType: 'boolean',
        options: null,
        nextQuestion: [
            {
                id: 19,
                value: "Yes",
            },
            {
                id: 26,
                value: "No",
            }
        ]
    },
    {
        id: 26,
        question: 'What is the name of the institution where you obtained or are obtaining your degree?',
        answerType: 'text',
        options: null,
        nextQuestion: [
            {
                id: 27,
                value: null,
            }
        ]
    },
    {
        id: 27,
        question: 'Where is the institution located? Please specify the city and country.',
        answerType: 'text',
        options: null,
        nextQuestion: [
            {
                id: 28,
                value: null,
            }
        ]
    },
    {
        id: 28,
        question: 'What degree did you obtain?',
        answerType: 'text',
        options: null,
        nextQuestion: [
            {
                id: 29,
                value: null,
            }
        ]
    },
    {
        id: 29,
        question: 'What was your field of study or major during your course at the institution?',
        answerType: 'text',
        options: null,
        nextQuestion: [
            {
                id: 30,
                value: null,
            }
        ]
    },
    {
        id: 30,
        question: 'What is your graduation date, or when do you expect to graduate?',
        answerType: 'date',
        options: null,
        nextQuestion: [
            {
                id: 31,
                value: null,
            }
        ]
    },
    {
        id: 31,
        question: 'Do you want to add another education?',
        answerType: 'boolean',
        options: null,
        nextQuestion: [
            {
                id: 26,
                value: "Yes",
            },
            {
                id: null,
                value: "No",
            }
        ]
    }
]