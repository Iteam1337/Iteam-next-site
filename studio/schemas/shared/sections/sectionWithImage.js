export default {
  type: 'document',
  name: 'sectionWithImage',
  title: 'Text med bild',
  fields: [
    {
      type: 'string',
      name: 'hiddenTitle',
      title: 'Titel',
      initialValue: 'Titel, en tillhörande text och en bild',
      readOnly: true,
      description: 'En fast rubrik för den här sektionen',
      hidden: true,
    },
    {
      type: 'title',
      name: 'title',
      validation: (Rules) => Rules.required().error('Ange en rubrik.'),
    },
    {
      type: 'blockText',
      name: 'blockText',
      validation: (Rules) => Rules.required().error('Ange en text.'),
    },
    {
      type: 'imageWithAlt',
      name: 'imageWithAlt',
      validation: (Rules) => Rules.required().error('Lägg in en bild.'),
    },
  ],
}
