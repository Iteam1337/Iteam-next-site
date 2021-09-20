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
    },
    {
      type: 'string',
      name: 'onGoing',
      title: 'Löpande',
      initialValue: 'Löpande',
    },
    {
      type: 'string',
      name: 'agreement',
      title: 'Avtal',
      initialValue: 'Fast avtal ( > 3 mån)',
    },
    {
      type: 'string',
      name: 'discount',
      title: 'Rabatt',
      initialValue: '15% rabatt',
    },
    {
      type: 'string',
      name: 'team',
      title: 'Helt team',
      initialValue: 'Helt team',
    },
    { type: 'string', name: 'value', title: 'Valuta' },
    { type: 'string', name: 'price', title: 'Kostnad per timme ej löpande' },
    {
      type: 'string',
      name: 'priceOngoing',
      title: 'Kostnad per timme löpande',
    },
    {
      type: 'string',
      name: 'priceIncluding',
      title: 'Kostnad gäller',
      initialValue: 'per person',
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
    { type: 'cta', name: 'cta' },
  ],
};
