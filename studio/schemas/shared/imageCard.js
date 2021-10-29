export default {
  name: 'imageCard',
  type: 'document',
  title: 'test',
  fields: [
    {
      title: 'Kortare text för förhandsvisning',
      name: 'description',
      type: 'text',
      validation: (Rules) => Rules.required().error('Ange en beskrivning.'),
    },
    {
      title: 'Bild',
      name: 'image',
      type: 'imageWithAlt',
      validation: (Rules) => Rules.required().error('Lägg in en bild.'),
    },
  ],
}
