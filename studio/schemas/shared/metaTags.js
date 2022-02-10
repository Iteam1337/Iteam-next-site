export default {
  type: 'document',
  name: 'metaTags',
  title: 'Meta tags',
  validation: (Rules) =>
    Rules.required().error('Du behöver lägga in meta tags'),
  fields: [
    {
      type: 'title',
      name: 'title',
      validation: (Rules) => Rules.required().error('Ange en rubrik.'),
    },
    {
      type: 'text',
      name: 'description',
      validation: (Rules) =>
        Rules.required().error(
          'Ange en beskrivning som används som meta data.'
        ),
    },
    {
      type: 'imageWithAlt',
      name: 'imageWithAlt',
      validation: (Rules) =>
        Rules.required().error('Lägg in en bild som visas som meta data.'),
    },
  ],
}
