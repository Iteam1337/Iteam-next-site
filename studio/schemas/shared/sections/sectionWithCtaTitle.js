export default {
    type: 'object', name: 'sectionWithCtaTitle', title: 'Kort', fields:
        [
            { type: 'title', name: 'title', title: 'Rubrik' },
            {
                name: 'reference',
                type: 'reference',
                weak: true,
                title: 'Referens',
                description:
                    'Här sätter du vart man ska ledas om man klickar på rubriken ovan.',
                to: [
                    { type: 'aboutPage' },
                    { type: 'careerPage' },
                    { type: 'casePage' },
                    { type: 'casePost' },
                    { type: 'coworker' },
                    { type: 'mvpPage' },
                    { type: 'newsPage' },
                    { type: 'newsPost' },
                    { type: 'openPositions' },
                    { type: 'scaleUpPage' },
                    { type: 'startPage' },
                    { type: 'xPage' },
                ],
            },
            { type: 'text', name: 'text', title: 'Textruta' },
            { type: 'imageWithAlt', name: 'image' }
        ]
}