export default {
  type: 'document',
  name: 'textGrid',
  title: 'Flera texter',
  fields: [
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
