export default {
  name: 'callToAction',
  type: 'document',
  title: 'Cta',
  validation: (Rule) =>
    Rule.custom((fields) => {
      const checkLinkField = () =>
        fields?.link?.internal || fields?.link?.external

      if (!fields?.title && checkLinkField())
        return 'Lägg till en text till din knapp'

      if (fields?.title && !checkLinkField())
        return 'Lägg till en referens för vart din knapp ska leda'

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
      name: 'link',
      type: 'sendTo',
      options: {
        collapsible: false,
      },
    },
  ],
}
