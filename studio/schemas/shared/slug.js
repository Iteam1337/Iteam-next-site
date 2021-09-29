export default {
    name: 'defaultSlug',
    type: 'slug',
    title: 'Slug',
    description:
        'Används för att döpa urlen. Ska vara samma som titlen men med bindessträck istället för mellanslag.',
    validation: (Rules) => [
        Rules.required().error('Ange en slug.'),
    ],
    options: {
        source: 'title',
        maxLength: 96,
    },
}
