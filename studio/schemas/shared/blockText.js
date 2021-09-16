export default {
  type: 'document',
  name: 'blockText',
  title: 'Text',
  fields: [
    {
      title: 'Text',
      name: 'blockText',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
