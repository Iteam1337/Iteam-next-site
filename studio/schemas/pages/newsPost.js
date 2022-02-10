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
      type: 'defaultSlug',
      name: 'slug',
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
      options: {
        collapsible: true,
      },
    },
    {
      type: 'metaTags',
      name: 'metaTags',
      options: {
        collapsible: true,
      },
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
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      subtitle: 'blockText',
    },
    prepare({ title = 'No name', slug = {}, name = 'aktuellt' }) {
      const path = `/${name}/${slug.current}`;

      return {
        path,
        title,
        subtitle: path,
      };
    },
  },
};
