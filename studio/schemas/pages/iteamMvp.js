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
  ],
};
