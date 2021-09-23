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
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ]

        },
        { type: 'imageWithAlt' },
      ],
    },
  ],
};
