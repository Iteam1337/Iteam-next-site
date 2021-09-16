export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'heroTitle',
      title: 'Title',
      type: 'string',
      validation: (Rules) =>
        Rules.required().error('Du behöver sätta en titel!'),
    },
    {
      name: 'heroSubTitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rules) =>
        Rules.required().error('En subtitel kan vara snyggt att ha också'),
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
