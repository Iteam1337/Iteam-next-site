export default {
  name: 'openSourceLesson',
  type: 'document',
  title: 'Skapa en lektion i OSS',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Rubrik',
      placeholder: 'Vad är en MVP?',
      validation: (Rules) =>
        Rules.required().error('Skriv en bra rubrik'),
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
      type: 'string',
      name: 'youtubeId',
      title: 'Youtube Video ID',
      description: 'Klipp in v-parametern i en expanderad youtube-länk, i ex.vis: https://www.youtube.com/watch?v=Iz-XLYvzXyU är v-parametern: Iz-XLYvzXyU',
      validation: (Rules) =>
        Rules.required().error('Du behöver klippa in ett Youtube Video ID'),
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
    prepare({ title = 'No name', slug = {}, name = 'open-source-skolan' }) {
      const path = `/${name}/${slug.current}`;

      return {
        path,
        title,
        subtitle: path,
      };
    },
  },
};
