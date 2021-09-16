export default {
    name: 'casePage',
    type: 'document',
    title: 'Case',
    fields: [
        { type: 'title', name: 'title', title: 'Rubrik' },
        { type: 'string', name: 'subtitle', title: 'Underrubrik', validation: (Rules) => Rules.required().error('Du behöver ange en rubrik') },
        { type: 'imageCard', name: 'imageCardOne', title: 'Kort' },
        { type: 'imageCard', name: 'imageCardTwo', title: 'Kort' }
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