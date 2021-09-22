export default {
  name: 'newsPost',
  type: 'document',
  title: 'Lägg till en nyhet',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Rubrik',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in en rubrik'),
    },
    {
      type: 'date',
      name: 'date',
      title: 'Datum',
      validation: (Rules) =>
        Rules.required().error('Du behöver välja ett datum'),
    },
    {
      type: 'blockText',
      name: 'blockText',
      title: 'Nyhet',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in en nyhet'),
    },
    {
      type: 'imageCard',
      name: 'imageCard',
      title: 'Förhandsvisning',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in en förhandsvisning'),
    },
  ],
  orderings: [
    {
      name: 'createdDateAsc',
      title: 'Created date new–>old',
      by: [
        {
          field: '_createdAt',
          direction: 'desc',
        },
      ],
    },
  ],
  prepare({ name = 'aktuellt' }) {
    const path = `/${name}`;
    return {
      path,
      name,
      title,
    };
  },
};
