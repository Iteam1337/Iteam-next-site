export default {
  name: 'newsPage',
  type: 'document',
  title: 'Aktuellt',
  fields: [
    {
      type: 'title',
      name: 'title',
      title: 'Rubrik',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'title',
    },
    prepare({ title = 'Aktuellt', name = 'aktuellt' }) {
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
