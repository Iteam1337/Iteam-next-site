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
    { type: 'textGrid' },
    { type: 'carousel' },
  ],
};
