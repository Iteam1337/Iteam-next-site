export default {
  type: 'document',
  name: 'sectionWithImageAndCta',
  title: 'Text med bild och cta',
  fields: [
    {
      type: 'title',
      name: 'title',
    },
    {
      type: 'cta',
      name: 'cta',
      title: 'Knapp'
    },
    {
      type: 'blockText',
      name: 'blockText',
    },
    {
      type: 'imageWithAlt',
      name: 'imageWithAlt',
    },
  ],
};
