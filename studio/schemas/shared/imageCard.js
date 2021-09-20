export default {
  name: 'imageCard',
  type: 'document',
  title: 'test',
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: 'Rubrik',
      name: 'title',
      type: 'title',
      validation: (Rules) =>
        Rules.required().error('Ange en rubrik.'),
    },
    {
      title: 'Text',
      name: 'description',
      type: 'text',
      validation: (Rules) =>
        Rules.required().error('Ange en beskrivning.'),
    },
    {
      title: 'Bild',
      name: 'image',
      type: 'image',
      validation: (Rules) =>
        Rules.required().error('Lägg in en bild.'),
    },
  ],
};
