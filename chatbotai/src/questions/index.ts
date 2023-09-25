export interface Question {
    id: number;
    question: string;
    answerType: string;
    options: {id: number; name: string}[] | null;
    nextQuestion: { id: number; value: string | number | null }[] | null;
    answer?: any;
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
        question: 'Do you have alias name?',
        answerType: 'boolean',
        options: null,
        nextQuestion: [{
            id: 5,
            value: "Yes",
        },
        {
            id: 7,
            value: "No",
        }
    ]
    },
    {
        id: 5,
        question: 'What is your alias first name?',
        answerType: 'text',
        options: null,
        nextQuestion: [{
            id: 6,
            value: null,
        }]
    },
    {
        id: 6,
        question: 'What is your alias last name?',
        answerType: 'text',
        options: null,
        nextQuestion: [{
            id: 7,
            value: null,
        }]
    },
    {
        id: 7,
        question: 'What is your UCI?',
        answerType: 'intetger',
        options: null,
        nextQuestion: [{
            id: 8,
            value: null,
        }]
    },
    {
        id: 8,
        question: 'How many family members including you are in this application?',
        answerType: 'number',
        options: null,
        nextQuestion: [{
            id: 8,
            value: null,
        }]
    },
]