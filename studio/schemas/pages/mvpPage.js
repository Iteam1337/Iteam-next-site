export default {
  name: 'mvpPage',
  type: 'document',
  title: 'Om oss',
  fields: [
    { type: 'hero', name: 'hero' },
    {
      type: 'sectionWithButtonAndTextGrid',
      name: 'sectionWithButtonAndTextGrid',
      title: 'Sektion med rubrik, text, knapp och text grid',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithImageAndCta',
      name: 'sectionWithImageAndCta',
      title: 'Sektion med rubrik, text, cta och bild',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'textWithTags',
      name: 'textWithTags',
      title: 'Text med taggar',
    },
    {
      type: 'sectionWithImageAndCta',
      name: 'sectionWithImageAndCta2',
      title: 'Sektion med rubrik, text, cta och bild',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithImage',
      name: 'sectionWithImage',
      title: 'Sektion med rubrik, text och bild',
      options: {
        collapsible: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
    },
    prepare({ title = 'Iteam MVP', name = 'mvp' }) {
      const path = `/${name}`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
