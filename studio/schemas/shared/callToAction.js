export default {
  name: 'callToAction',
  type: 'document',
  title: 'Cta',
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (fields?.title && !fields?.reference)
        return 'Lägg till en referens för vart din knapp ska leda'
      if (!fields?.title && fields?.reference)
        return 'Lägg till en text till din knapp'

      return true
    }),
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Ange text till CTA.',
      title: 'Text på knappen',
    },
    {
      name: 'reference',
      type: 'link',
      options: {
        collapsible: false,
      },
    },
  ],
}
