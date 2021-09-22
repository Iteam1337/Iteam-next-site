export default {
  name: 'mvpPage',
  type: 'document',
  title: 'Om oss',
  fields: [
    { type: 'hero', name: 'hero' },
    {
      type: 'sectionWithCtaAndTextGrid',
      name: 'sectionWithCtaAndTextGrid',
      title: 'Sektion med rubrik, text, cta och text grid',
      options: {
        collapsible: true,
      },
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
      type: 'textWithTags',
      name: 'textWithTags',
      title: 'Text med taggar',
    },
    {
      type: 'sectionWithImageAndCta',
      name: 'sectionWithImageAndCta2',
      title: 'Sektion med rubrik, text, cta och bild',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithImage',
      name: 'sectionWithImage',
      title: 'Sektion med rubrik, text och bild',
      options: {
        collapsible: true,
      },
    },
  ],
};
