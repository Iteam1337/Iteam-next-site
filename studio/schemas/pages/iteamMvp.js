export default {
  name: 'iteamMvp',
  type: 'document',
  title: 'Om oss',
  fields: [
    { type: 'hero', name: 'hero', title: 'Lägg till hero' },
    {
      type: 'sectionWithCtaAndTextGrid',
      name: 'sectionWithCtaAndTextGrid',
      title: 'Sektion för titel, text, cta och text grid',
      options: {
        collapsible: true,
      },
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
      type: 'textWithTags',
      name: 'textWithTags',
    },
    {
      type: 'sectionWithImageAndCta',
      name: 'sectionWithImageAndCta2',
      title: 'Sektion för titel, text, cta och bild',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithImage',
      name: 'sectionWithImage',
      title: 'Sektion med title, text och bild',
      options: {
        collapsible: true,
      },
    },
  ],
};
