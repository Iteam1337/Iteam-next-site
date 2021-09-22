export default {
  name: 'casePost',
  type: 'document',
  title: 'Lägg till nytt case',
  fields: [
    {
      type: 'string',
      name: 'company',
      title: 'Företag',
      validation: (Rules) =>
        Rules.required().error('Du behöver ange ett företag'),
    },
    { type: 'title', name: 'title', title: 'Rubrik' },
    { type: 'string', name: 'subtitle', title: 'Underrubrik' },
    {
      name: 'typeOfCase',
      type: 'string',
      title: 'Typ av projekt',
      description:
        'Här väljer du vilken typ a projekt som beskrivs om, Iteam MVP, Iteam Scale-up eller Iteam X',
      options: {
        list: [
          { title: 'Iteam MVP', value: 'mvp' },
          { title: 'Iteam Scale-up', value: 'scaleUp' },
          { title: 'Iteam X', value: 'x' },
        ],
      },
    },
    {
      type: 'blockText',
      name: 'blockText',
      title: 'Case',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in ett case'),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Taggar',
      description:
        'Lägg in olika taggar som relaterar till projektet. t.ex AI, React, Research och analys, Design, ',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    { type: 'imageCard', name: 'imageCard', title: 'Förhandsvisning' },
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
  prepare({ name = 'case' }) {
    const path = `/${name}`;
    return {
      path,
      name,
      title,
    };
  },
};
