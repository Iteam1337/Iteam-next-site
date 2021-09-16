export default {
  name: 'imageWithAlt',
  type: 'image',
  title: 'Bild',
  options: {
    hotspot: true,
  },
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
};
