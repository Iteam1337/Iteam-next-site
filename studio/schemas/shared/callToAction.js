export default {
  name: 'callToAction',
  type: 'document',
  title: 'Cta',
  validation: (Rule) =>
    Rule.custom((fields) => {
      switch (fields?.reference.linkType) {
        case 'internal':
          if (fields?.title && !fields?.reference.internalLink)
            return 'Lägg till en referens för vart din knapp ska leda'
          if (!fields?.title && fields?.internalLink)
            return 'Lägg till en text till din knapp'
        case 'external':
          if (fields?.title && !fields?.reference.href)
            return 'Lägg till en referens för vart din knapp ska leda'
          if (!fields?.title && fields?.reference.href)
            return 'Lägg till en text till din knapp'
        default:
          return true
      }
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
