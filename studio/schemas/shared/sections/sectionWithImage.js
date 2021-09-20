export default {
  type: 'document',
  name: 'sectionWithImage',
  title: 'Text med bild',
  fields: [
    {
      type: 'title',
      name: 'title',
      validation: (Rules) =>
        Rules.required().error('Ange en rubrik.'),
    },
    {
      type: 'blockText',
      name: 'blockText',
      validation: (Rules) =>
        Rules.required().error('Ange en text.'),
    },
    {
      type: 'imageWithAlt',
      name: 'imageWithAlt',
      validation: (Rules) =>
        Rules.required().error('Lägg in en bild.'),
    },
  ],
};
