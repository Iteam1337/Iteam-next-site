export default {
    name: 'casePost',
    type: 'document',
    title: 'Lägg till nytt case',
    fields: [
        { type: 'string', name: 'company', title: 'Företag', validation: (Rules) => Rules.required().error('Du behöver ange ett företag') },
        { type: 'title', name: 'title', title: 'Rubrik' },
        { type: 'string', name: 'subtitle', title: 'Underrubrik' },
        { type: 'blockText', name: 'blockText', title: 'Case', validation: (Rules) => Rules.required().error('Du behöver lägga in ett case') },
        { type: 'imageCard', name: 'imageCard', title: 'Förhandsvisning' },
    ],
    orderings: [
        {
            name: 'createdDateAsc',
            title: 'Created date new–>old',
            by: [
                {
                    field: '_createdAt',
                    direction: 'desc',
                },
            ],
        },
    ],
    prepare({ name = 'case' }) {
        const path = `/${name}`
        return {
            path,
            name,
            title
        }
    }
}