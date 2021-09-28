export default {
  name: 'casePage',
  type: 'document',
  title: 'Case',
  fields: [
    { type: 'title', name: 'title', title: 'Rubrik' },
    { type: 'string', name: 'subTitle', title: 'Underrubrik' },
    { type: 'sectionWithCtaTitle', name: 'sectionWithImageOne', title: 'Kort' },
    { type: 'sectionWithCtaTitle', name: 'sectionWithImageTwo', title: 'Kort' },
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
