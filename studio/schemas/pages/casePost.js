export default {
    name: 'casePost',
    type: 'document',
    title: 'Lägg till nytt case',
    fields: [
        { type: 'previewCard', name: 'previewCard', title: 'Förhandsvisning' },
    ],
    preview: {
        select: {
            title: 'pageName'
        },
        prepare({ name = 'case' }) {
            const path = `/${name}`
            return {
                path,
                name,
                title
            }
        }
    }
}