export default {
  name: 'titleWithCTA',
  type: 'document',
  title: 'Text med CTA knapp',
  fields: [
    {
      title: 'Rubrik',
      name: 'title',
      type: 'title',
      validation: (Rules) =>
        Rules.required().error('Du behöver ange en rubrik'),
    },
    {
      title: 'CTA',
      type: 'cta',
      name: 'cta',
    },
  ],
}
