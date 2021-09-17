export default {
  type: 'document',
  name: 'textWithTags',
  title: 'Text med tags',
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
      description: 'Lägg till keywords som du vill associera med denna sida.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
