export default {
  name: 'textWithImage',
  type: 'document',
  title: 'Text + Bild',
  fields: [
    { type: 'imageWithAlt', name: 'Bild' },
    { type: 'blockText', name: 'Text' },
  ],
}
