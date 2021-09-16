export default {
  type: 'document',
  name: 'carouselContent',
  title: 'Text',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Namn',
    },
    {
      type: 'string',
      name: 'position',
      title: 'Position',
    },
    {
      type: 'text',
      name: 'quote',
      title: 'Citat',
    },
    {
      type: 'imageWithAlt',
      name: 'image',
    },
  ],
};
