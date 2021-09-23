export default {
  name: 'casePage',
  type: 'document',
  title: 'Case',
  fields: [
    { type: 'title', name: 'title', title: 'Rubrik' },
    { type: 'string', name: 'subtitle', title: 'Underrubrik' },
    { type: 'imageCard', name: 'imageCardOne', title: 'Kort' },
    { type: 'imageCard', name: 'imageCardTwo', title: 'Kort' },
    { type: 'titleWithCTA', name: 'titleWithCTA', title: 'Text med CTA knapp' },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'title',
    },
    prepare({ title = 'Case', name = 'case' }) {
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
