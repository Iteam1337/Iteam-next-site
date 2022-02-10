export default {
  type: 'document',
  name: 'sectionWithImageAndCta',
  title: 'Text med bild och cta',
  fields: [
    {
      type: 'string',
      name: 'hiddenTitle',
      title: 'Titel',
      initialValue: 'Titel, en tillhörande text, CTA och en bild',
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
      type: 'cta',
      name: 'cta',
      title: 'Knapp',
      validation: (Rules) => Rules.required().error('Lägg in allt för CTA.'),
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
