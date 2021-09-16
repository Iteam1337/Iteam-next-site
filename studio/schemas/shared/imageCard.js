export default {
  name: 'imageCard',
  type: 'document',
  title: 'test',
  fields: [
    {
      title: 'Rubrik',
      name: 'title',
      type: 'title',
      validation: (Rules) =>
        Rules.required().error('Du behöver ange en rubrik'),
    },
    {
      title: 'Text',
      name: 'description',
      type: 'text',
      validation: (Rules) =>
        Rules.required().error('Du behöver ange en beskrivning'),
    },
    {
      title: 'Bild',
      name: 'image',
      type: 'image',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in en bild'),
    },
  ],
};
