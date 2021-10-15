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
      type: 'sectionWithImageAndCta',
      name: 'sectionWithImageAndCtaFirst',
      title: 'Sektion med rubrik, text, cta och bild',
      options: {
        collapsible: true,
      },
    },
    {
      type: 'sectionWithCtaAndTextGrid',
      name: 'sectionWithCtaAndTextGrid',
      title: 'Sektion med rubrik, text, cta och text grid',
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
      title: 'Sektion med rubrik, text och bild',
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
      type: 'sectionWithImageAndCta',
      name: 'sectionWithImageAndCtaSecond',
      title: 'Sektion med rubrik, text, cta och bild',
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
