export default {
    name: 'casePage',
    type: 'document',
    title: 'Case',
    fields: [
        { type: 'title', name: 'title' },
        { type: 'text', name: 'subtitle', title: 'Undertitel' },
    ],
    preview: {
        select: {
            title: 'pageName'
        },
        prepare({ name = 'add-case' }) {
            const path = `/${name}`
            return {
                path,
                name,
                title
            }
        }
    }
}