export default {
  name: 'cta',
  type: 'document',
  title: 'Cta',
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (fields?.title && !fields?.reference)
        return 'Lägg till en referens för vart din knapp ska leda';
      if (!fields?.title && fields?.reference)
        return 'Lägg till en text till din knapp';

      return true;
    }),
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Om du vill har en CTA så kan du namnge den här',
      title: 'Text på knappen',
    },
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      title: 'Referens',
      description:
        'Här sätter du vart man ska ledas om man klickar på knappen.',
      to: [{ type: 'startPage' }, { type: 'casePage' }, { type: 'casePost' }],
    },
  ],
};
