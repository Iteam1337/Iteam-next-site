export default {
  name: 'openPositions',
  type: 'document',
  title: 'Lägg till en tjänst',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titel',
      description: 'Ange vilken tjänst vi söker.',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in en rubrik'),
    },
    {
      type: 'defaultSlug',
      name: 'slug',
    },
    {
      type: 'title',
      name: 'position',
      title: 'Plats',
      description: 'Vart bör denna personen jobba ifrån.',
      initialValue: 'Göteborg, Stockholm eller remote',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in en rubrik på vem vi söker'),
    },
    {
      type: 'blockText',
      name: 'blockText',
      title: 'Ansökan',
      description:
        'Beskriv vem det är vi är ute efter och vilka erfarenheter som vi söker.',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in ansökan'),
    },
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
      slug: 'slug',
      subtitle: 'position',
    },
    prepare({ title = 'No name', slug = {}, name = 'karriar' }) {
      const path = `/${name}/${slug.current}`

      return {
        path,
        title,
        subtitle: path,
      }
    },
  },
}
