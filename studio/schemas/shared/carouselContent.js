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
      name: 'role',
      title: 'Roll',
    },
    {
      type: 'text',
      name: 'quote',
      title: 'Citat',
    },
    {
      type: 'imageWithAlt',
      name: 'image',
      title: 'Bild',
    },
  ],
};
