export default {
  name: 'scaleUpPage',
  type: 'document',
  title: 'Scale up',
  fields: [
    {
      type: 'hero',
      name: 'hero',
      title: 'Hero',
    },
    {
      type: 'sectionWithImageAndButton',
      name: 'sectionWithImageAndButton',
      title:
        'Sektion med rubrik, text, bild och en knapp som leder till priserna längre ner på sidan.',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithButtonAndTextGrid',
      name: 'sectionWithButtonAndTextGrid',
      title: 'Sektion med rubrik, text, knapp och text grid',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'textWithTags',
      name: 'textWithTagsFirst',
      title: 'Text med taggar',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithImage',
      name: 'sectionWithImage',
      title: 'Sektion med bild',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'textWithTags',
      name: 'textWithTagsSecond',
      title: 'Text med taggar',
      options: {
        collapsible: true,
      },
    },
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      title: 'Referens till ett case',
      description:
        'Här väljer du ett case som du vill ska förhandvisas på sidan.',
      to: [{ type: 'casePost' }],
      options: {
        collapsible: true,
      },
    },
    {
      type: 'textWithTags',
      name: 'textWithTagsThirs',
      title: 'Text med taggar',
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

  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
    },
    prepare({ title = 'Iteam Scale-up', name = 'scaleup' }) {
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
