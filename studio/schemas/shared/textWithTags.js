export default {
  type: 'document',
  name: 'textWithTags',
  title: 'Text med tags',
  options: {
    collapsible: true,
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Rubrik',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Lägg till flera olika områden som vi jobbar inom',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
