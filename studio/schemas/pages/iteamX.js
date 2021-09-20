export default {
  name: 'iteamX',
  type: 'document',
  title: 'Om oss',
  fields: [
    { type: 'hero', name: 'hero', title: 'Lägg till hero' },
    {
      type: 'textGrid',
      name: 'textGrid',
      title: 'Text Grid',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'textWithTags',
      name: 'textWithTags',
      title: 'Text med flera olika taggar',
    },
    {
      type: 'sectionWithImageAndCta',
      name: 'sectionWithImageAndCta',
      title: 'Sektion för titel, text, cta och bild',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithCtaAndTextGrid',
      name: 'sectionWithCtaAndTextGrid',
      title: 'Sektion för titel, text, cta och text grid',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'document',
      name: 'quote',
      title: 'Citat',
      options: {
        collapsible: true,
      },
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
          name: 'logo',
          title: 'Logotype',
        },
        {
          type: 'imageWithAlt',
          name: 'image',
          title: 'Bild',
        },
      ],
    },
  ],
};
