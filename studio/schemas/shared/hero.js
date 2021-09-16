export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubTitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'heroCta',
      title: 'Hero Call to action',
      type: 'cta',
    },

    {
      name: 'mediaTypes',
      title: 'Hero MediaType',
      type: 'mediaTypes',
    },
  ],
};
