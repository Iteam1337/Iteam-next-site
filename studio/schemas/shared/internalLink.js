module.exports = {
    name: 'internalLink',
    type: 'object',
    title: 'Intern länk',
    fields: [
        {
            name: 'reference',
            type: 'reference',
            title: 'Referens',
            description:
                'Länk till någon av de andra posterna på sidan.',
            to: [
                // { type: 'startPage' },
                { type: 'casePage' },
                // { type: 'casePost' },
                // { type: 'careerPage' },
                // { type: 'mvpPage' },
                // { type: 'xPage' },
                // { type: 'scaleUpPage' },
                // { type: 'coworker' },
                // { type: 'openPositions' },
                // { type: 'aboutPage' },
                // { type: 'newsPost' },
                // { type: 'newsPage' },
            ],
        },
    ],
}