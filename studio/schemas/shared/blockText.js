export default {
  type: 'document',
  name: 'blockText',
  title: 'Text',
  options: {
    collapsible: false,
  },
  fields: [
    {
      title: 'Text',
      name: 'blockText',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
