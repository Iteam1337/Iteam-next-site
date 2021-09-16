export default {
  name: 'cta',
  type: 'document',
  title: 'Cta',
  validation: (Rules) =>
    Rules.custom((fields) => {
      if (fields.title && !fields.url)
        return 'Lägg till en url om du vill att knappen ska leda någonstans.';
      return true;
    }),
  fields: [
    {
      name: 'Title',
      type: 'string',
      description: 'Om du vill har en CTA i heron så kan du namnge den här',
    },
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      title: 'Referens',
      description:
        'Här sätter du vart man ska ledas om man klickar på knappen.',
      to: [{ type: 'startPage' }, { type: 'casePage' }, { type: 'casePost' }],
      validation: (Rules) =>
        Rules.warning('En subtitel kan vara snyggt att ha också'),
    },
  ],
};
