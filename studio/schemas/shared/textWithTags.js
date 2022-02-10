export default {
  type: 'document',
  name: 'textWithTags',
  title: 'Text med taggar',
  options: {
    collapsible: true,
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Rubrik',
      validation: (Rules) => Rules.required().error('Ange en rubrik.'),
    },
    {
      type: 'blockText',
      name: 'subtitle',
      title: 'Underrubrik',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description:
        'Lägg till flera olika områden som vi jobbar inom. Klicka enter när du lagt till en tagg och vill lägga till en ny.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
}
