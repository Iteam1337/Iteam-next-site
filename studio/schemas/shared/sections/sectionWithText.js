export default {
  name: 'sectionWithText',
  title: 'Rubrik med en lite längre tillhörande text',
  type: 'document',
  fields: [
    { type: 'string', name: 'title', title: 'Rubrik' },
    { type: 'text', name: 'text', title: ' Text' },
  ],
}
