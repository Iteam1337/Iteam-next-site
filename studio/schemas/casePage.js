export default {
    name: 'casePage',
    type: 'document',
    title: 'Case',
    fields: [
        { type: 'text', name: 'pageName', title: 'Title' },
        { type: 'text', name: 'subtitle', title: 'Subtitle' },
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