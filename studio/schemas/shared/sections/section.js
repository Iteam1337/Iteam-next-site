export default {
  name: 'section',
  title: 'Rubrik med en lite längre tillhörande text',
  type: 'document',
  fields: [
    { type: 'string', name: 'title', title: 'Rubrik' },
    { type: 'blockText', name: 'blockText', title: ' Text' },
  ],
};
