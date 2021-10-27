export default {
  name: 'casePage',
  type: 'document',
  title: 'Case',
  fields: [
    { type: 'title', name: 'title', title: 'Rubrik' },
    { type: 'string', name: 'subtitle', title: 'Underrubrik' },
    { type: 'sectionWithImage', name: 'sectionWithImageOne', title: 'Kort' },
    { type: 'sectionWithImage', name: 'sectionWithImageTwo', title: 'Kort' },
    { type: 'titleWithCTA', name: 'titleWithCTA', title: 'Text med CTA knapp' },
    {
      type: 'metaTags',
      name: 'metaTags',
      options: {
        collapsible: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'title',
    },
    prepare({ title = 'Case', name = 'case' }) {
      const path = `/${name}`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
