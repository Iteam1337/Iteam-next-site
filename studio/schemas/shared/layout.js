export default {
  name: 'layout',
  title: 'Layout',
  type: 'array',
  of: [
    {
      type: 'sectionWithImageAndCta',
      title: 'Titel, en tillhörande text, CTA och en bild',
    },
    {
      type: 'sectionWithImageAndPosition',
      title: 'Titel, tillhörande text och en bild',
    },
    { type: 'textGrid', title: 'Flera texter' },
  ],
  description:
    'Här kan du bygga upp hur du vill att sidan ska se ut, genom att lägga till block och ändra ordningen på dem kan du välja själv hur ser ska se ut på sajten.',
}
