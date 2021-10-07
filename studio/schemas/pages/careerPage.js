export default {
  name: 'careerPage',
  type: 'document',
  title: 'Karriär',
  fields: [
    { type: 'hero', name: 'hero' },
    { type: 'section', name: 'section' },
    { type: 'textGrid', name: 'textGrid' },
    {
      type: 'openings',
      name: 'openings',
      title: 'Rubrik för våra lediga tjänster',
      description:
        'Lägg in en rubrik och underribrik för våra ansökningar. Under dessa kommer vi att visa länkar till de öppningar vi har just nu',
    },
  ],

  preview: {
    select: {
      title: 'section.title',
      subtitle: 'section',
    },
    prepare({ title = 'Karriar', name = 'karriar' }) {
      const path = `/${name}`;
      return {
        path,
        name,
        title,
        subtitle: path,
      };
    },
  },
};
