export default {
  name: 'xPage',
  type: 'document',
  title: 'Om oss',
  fields: [
    { type: 'hero', name: 'hero' },
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
      title: 'Text med taggar',
    },
    {
      type: 'sectionWithImageAndCta',
      name: 'sectionWithImageAndCta',
      title: 'Sektion med rubrik, text, cta och bild',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithCtaAndTextGrid',
      name: 'sectionWithCtaAndTextGrid',
      title: 'Sektion med rubrik, text, cta och text grid',
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
