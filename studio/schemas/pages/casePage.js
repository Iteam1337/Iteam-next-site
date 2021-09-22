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
      title: 'Case startsida',
      slug: 'slug',
    },
    prepare({ title = 'Case startsida', slug = {}, name = 'case' }) {
      const path = `/${name}/${slug.current}`;
      return {
        path,
        title,
      };
    },
  },
};
