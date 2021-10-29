export default {
  name: 'imageWithAlt',
  type: 'image',
  title: 'Bild',
  options: {
    hotspot: true,
  },
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (fields?.asset && !fields?.alt)
        return 'Lägg in en alternativ text för bilden.'

      return true
    }),
  fields: [
    {
      type: 'string',
      name: 'alt',
      title: 'Alternativ text',
      description: `Beskrivande text för personer med någon form av synsvårighet.`,
      options: {
        isHighlighted: true,
      },
    },
  ],
}
