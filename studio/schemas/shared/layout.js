export default {
  name: 'layout',
  title: 'Layout',
  type: 'array',
  of: [
    { type: 'imageWithAlt' },
    {
      type: 'blockText',
    },
    { type: 'textWithImage' },
    { type: 'textGrid', title: 'Flera texter' },
  ],
  description:
    'Här kan du bygga upp hur du vill att sidan ska se ut, genom att lägga till block och ändra ordningen på dem kan du välja själv hur ser ska se ut på sajten.',
};
