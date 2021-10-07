export default {
  type: 'document',
  name: 'openings',
  title: 'Text för våra lediga tjänster',
  fields: [
    {
      type: 'title',
      name: 'title',
      title: 'Rubrik',
      validation: (Rules) =>
        Rules.required().error('Ange en rubrik.'),
    },
    {
      type: 'blockText',
      name: 'subtitle',
      title: 'Underrubrik',
      validation: (Rules) =>
        Rules.required().error('Ange en underrubrik.'),
    },
  ],
};
