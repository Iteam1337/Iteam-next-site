export default {
  name: 'imageCard',
  type: 'document',
  title: 'test',
  fields: [
    {
      title: 'Kortare text för förhandsvisning',
      description: 'Max 150 tecken',
      name: 'description',
      type: 'text',
      validation: (Rules) => [
        Rules.required().error('Ange en beskrivning.'),
        Rules.max(150),
      ],
    },
    {
      title: 'Bild',
      name: 'image',
      type: 'imageWithAlt',
      validation: (Rules) => Rules.required().error('Lägg in en bild.'),
    },
  ],
}
