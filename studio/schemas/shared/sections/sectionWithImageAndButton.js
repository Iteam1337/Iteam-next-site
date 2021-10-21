export default {
  type: 'document',
  name: 'sectionWithImageAndButton',
  title: 'Text med bild och knapp',
  fields: [
    {
      type: 'title',
      name: 'title',
      validation: (Rules) => Rules.required().error('Ange en rubrik.'),
    },
    {
      type: 'title',
      name: 'button',
      title: 'Titel för knappen',
      validation: (Rules) =>
        Rules.required().error('Lägg till text för knappen.'),
    },
    {
      type: 'blockText',
      name: 'blockText',
      validation: (Rules) => Rules.required().error('Ange en text.'),
    },
    {
      type: 'imageWithAlt',
      name: 'imageWithAlt',
      validation: (Rules) => Rules.required().error('Ange en bild.'),
    },
  ],
}
