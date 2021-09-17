export default {
    name: 'coworker',
    title: 'Medarbetare',
    type: 'document',
    fields: [
        {
            type: 'imageWithAlt', name: 'image', title: 'Bakgrundsbild', validation: (Rules) =>
                Rules.required().error('Välj en bakgrundsbild'),
        },
        {
            type: 'string', name: 'coworker', title: 'Medarbetare', validation: (Rules) =>
                Rules.required().error('Du behöver fylla i ett namn'),
        },
        {
            type: 'string', name: 'role', title: 'Roll', validation: (Rules) =>
                Rules.required().error('Du behöver fylla i en roll'),
        },
        { type: 'string', name: 'contact', title: 'Kontakt', initialValue: 'Kontakt' },
        { type: 'string', name: 'phoneNumber', title: 'Telefonnummer' },
        {
            type: 'string', name: 'mail', title: 'Mailadress', validation: (Rules) =>
                Rules.required().error('Du behöver fylla i en mailadress'),
        },
        { type: 'string', name: 'whyTech', title: 'Varför Jobbar du med teknik?', initialValue: 'Varför jobbar du med teknik?' },
        {
            type: 'blockText', name: 'answerTech', title: 'Varför jobbar du med teknik?', validation: (Rules) =>
                Rules.required().error('Du behöver svara på varför jobbar med teknik'),
        },
        { type: 'string', name: 'background', title: 'Bakgrund', initialValue: 'Bakgrund' },
        {
            type: 'blockText', name: 'backgroundAnswer', title: 'Bakgrund', validation: (Rules) =>
                Rules.required().error('Berätta lite om din bakgrund'),
        },
        { type: 'string', name: 'competence', title: 'Specialistkompetens', initialValue: 'Specialistkompetens' },
        {
            type: 'blockText', name: 'competenceAnswer', title: 'Specialistkompetens', validation: (Rules) =>
                Rules.required().error('Vad är din specialistkompetens?'),
        },
    ]
}