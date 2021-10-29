export default {
  type: 'document',
  name: 'ourPricing',
  title: 'Våra Priser',
  fields: [
    {
      type: 'section',
      name: 'section',
      description:
        'Här fyller vi i vårt timpris per person, för ett helt team. Modulen visas på startsidan och på Scale-up sidan.',
      validation: (Rules) => Rules.required().error('Fyll i denna sektionen.'),
    },
    {
      type: 'string',
      name: 'onGoing',
      title: 'Löpande',
      initialValue: 'Löpande',
      validation: (Rules) =>
        Rules.required().error('Ange en text för löpande.'),
    },
    {
      type: 'string',
      name: 'agreement',
      title: 'Avtal',
      initialValue: 'Fast avtal ( > 3 mån)',
      validation: (Rules) => Rules.required().error('Ange en text för avtal.'),
    },
    {
      type: 'string',
      name: 'discount',
      title: 'Rabatt',
      initialValue: '15% rabatt',
      validation: (Rules) => Rules.required().error('Ange en text för rabatt.'),
    },
    {
      type: 'string',
      name: 'team',
      title: 'Helt team',
      initialValue: 'Helt team',
      validation: (Rules) =>
        Rules.required().error('Ange en text för ett helt team.'),
    },
    {
      type: 'string',
      name: 'value',
      title: 'Valuta',
      validation: (Rules) => Rules.required().error('Ange valuta.'),
    },
    {
      type: 'string',
      name: 'price',
      title: 'Kostnad per timme ej löpande',
      validation: (Rules) =>
        Rules.required().error('Ange en kostnad per timme ej löpande.'),
    },
    {
      type: 'string',
      name: 'priceOngoing',
      title: 'Kostnad per timme löpande',
      validation: (Rules) =>
        Rules.required().error('Ange en kostnad per timme löpande.'),
    },
    {
      type: 'string',
      name: 'priceIncluding',
      title: 'Kostnad gäller',
      initialValue: 'per person',
      validation: (Rules) =>
        Rules.required().error('Ange hur många kostnaden gäller för.'),
    },
    {
      type: 'array',
      name: 'includes',
      of: [
        {
          type: 'string',
          name: 'includeValues',
        },
      ],
    },
    {
      type: 'cta',
      name: 'cta',
      validation: (Rules) => Rules.required().error('Fyll i CTA.'),
    },
  ],
}
