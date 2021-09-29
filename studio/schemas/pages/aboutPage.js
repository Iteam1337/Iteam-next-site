export default {
  name: 'aboutPage',
  type: 'document',
  title: 'Om oss',
  fields: [
    { type: 'hero', name: 'hero' },
    { type: 'section', name: 'section', title: 'Rubrik och tillhörande text' },
    { type: 'layoutImages', name: 'layoutImages', title: 'Ladda upp bilder' },
    {
      type: 'object',
      name: 'coworkersSection',
      title: 'Medarberate',
      fields: [
        { type: 'title', name: 'title', title: 'Rubrik för medarbetare' },
        {
          type: 'string',
          name: 'subtitle',
          title: 'Underrubrik för medarbetare',
        },
      ],
    },
    {
      type: 'titleWithCTA',
      name: 'titleWithCTA',
      title: 'Text med CTA knapp',
      validation: (Rules) => Rules.required().error('Lägg in en CTA sektion.'),
    },
  ],

  preview: {
    select: {
      title: 'section.title',
      subtitle: 'section',
    },
    prepare({ title = 'Om oss', name = 'about' }) {
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
