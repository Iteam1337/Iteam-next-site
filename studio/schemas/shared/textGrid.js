export default {
  type: 'document',
  name: 'textGrid',
  title: 'Flera texter',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titel',
      initialValue: 'Flera texter',
      readOnly: true,
      description: 'En fast rubrik för den här sektionen',
    },

    {
      name: 'texts',
      title: 'Texter',
      type: 'array',
      description:
        'Här kan flera texter läggas till, de kommer att visas i ett gird',
      of: [
        {
          type: 'blockText',
        },
      ],
    },
  ],
};
