export default {
  type: 'document',
  name: 'sectionWithCtaAndTextGrid',
  title: 'Sektion med rubrik, text, cta och text grid.',
  fields: [
    {
      type: 'section',
      name: 'section',
      title: 'Rubrik och text',
      validation: (Rules) =>
        Rules.required().error('Ange en rubrik.'),
    },
    {
      type: 'cta',
      name: 'cta',
      title: 'Knapp',
      validation: (Rules) =>
        Rules.required().error('Lägg in allt för CTA.'),
    },
    { type: 'textGrid', name: 'textGrid' },
  ],
};
