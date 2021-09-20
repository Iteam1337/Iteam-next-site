export default {
  type: 'document',
  name: 'carousel',
  title: 'Karusell section',
  fields: [
    {
      type: 'string',
      title: 'Titel',
      name: 'title',
    },
    {
      type: 'string',
      title: 'Paragraf',
      name: 'paragraph',
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
              name: 'name',
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
