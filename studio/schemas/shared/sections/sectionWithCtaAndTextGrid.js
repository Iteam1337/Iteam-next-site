export default {
  type: 'document',
  name: 'sectionWithCtaAndTextGrid',
  title: 'Sektion med titel, text, cta och text grid.',
  fields: [
    { type: 'section', name: 'section', title: 'Rubrik och text' },
    { type: 'cta', name: 'cta', title: 'Knapp' },
    { type: 'textGrid', name: 'textGrid' },
  ],
};
