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
      type: 'sectionWithImageAndButton',
      name: 'sectionWithImageAndButton',
      title:
        'Sektion med rubrik, text, bild och en knapp som leder till kalendern längre ner på sidan.',
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
      type: 'sectionWithImageAndButton',
      name: 'sectionWithImageAndButton2',
      title:
        'Sektion med rubrik, text, bild och en knapp som leder till kalendern längre ner på sidan.',
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
