export default {
  type: 'document',
  name: 'carousel',
  title: 'Karusell section',
  fields: [
    {
      type: 'string',
      title: 'Titel',
      name: 'title',
      validation: (Rules) =>
        Rules.required().error('Ange en rubrik.'),

    },
    {
      type: 'string',
      title: 'Underrubrik',
      name: 'subtitle',
      validation: (Rules) =>
        Rules.required().error('Ange en underrubrik.'),
    },
    {
      name: 'texts',
      title: 'Rekommendationer',
      type: 'array',
      description:
        'Folk som vi vill använda citat från och visa upp i en karusell på sidan.',
      of: [
        {
          type: 'document',
          name: 'carouselContent',
          title: 'Text',
          fields: [
            {
              type: 'string',
              name: 'fullname',
              title: 'Namn',
            },
            {
              type: 'string',
              name: 'role',
              title: 'Roll',
            },
            {
              type: 'text',
              name: 'quote',
              title: 'Citat',
            },
            {
              type: 'imageWithAlt',
              name: 'image',
              title: 'Bild',
            },
          ],
        },
      ],
    },
  ],
};
