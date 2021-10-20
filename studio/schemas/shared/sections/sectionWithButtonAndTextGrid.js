export default {
  type: 'document',
  name: 'sectionWithButtonAndTextGrid',
  title: 'Sektion med rubrik, text, cta och text grid.',
  fields: [
    {
      type: 'section',
      name: 'section',
      title: 'Rubrik och text',
      validation: (Rules) => Rules.required().error('Ange en rubrik.'),
    },
    {
      type: 'title',
      name: 'button',
      title: 'Titel för knappen',
      description:
        'Denna knapp kommer leda längre ner på sidan där det finns ett bokningsformulär.',
      validation: (Rules) =>
        Rules.required().error('Lägg till text för knappen.'),
    },
    { type: 'textGrid', name: 'textGrid' },
  ],
}
