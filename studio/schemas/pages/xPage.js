export default {
  name: 'xPage',
  type: 'document',
  title: 'Om oss',
  fields: [
    {
      name: 'hero',
      type: 'object',
      title: 'Hero',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Titel',
          type: 'string',
          validation: (Rules) =>
            Rules.required().error('Du behöver sätta en rubrik.'),
        },
        {
          name: 'subtitle',
          title: 'Underrubrik',
          type: 'text',
          validation: (Rules) =>
            Rules.required().error(
              'En underrubrik kan vara snyggt att ha också.'
            ),
        },
        {
          name: 'cta',
          type: 'document',
          title: 'Cta',
          description:
            'Knapp som leder till "Boka en gratis rådgivning" längre ner på sidan.',
          fields: [
            {
              name: 'title',
              type: 'string',
              description: 'Ange text till CTA.',
              title: 'Text på knappen',
            },
          ],
        },
        {
          name: 'mediaType',
          title: 'Media',
          type: 'mediaType',
          description:
            'Här kan du lägga in vad du vill ha för hero genom att välja mellan att använda en bild, länka till en video eller välja en bakgrundsfärg.',
          validation: (Rules) =>
            Rules.required().error('Välj vad för typ av hero du vill ha.'),
        },
      ],
    },
    {
      type: 'textGrid',
      name: 'textGrid',
      title: 'Text Grid',
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
      name: 'sectionWithImageAndCta',
      title: 'Sektion med rubrik, text, cta och bild',
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
      type: 'document',
      name: 'quote',
      title: 'Citat',
      options: {
        collapsible: true,
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          title: 'Namn',
        },
        {
          type: 'string',
          name: 'role',
          title: 'Roll',
        },
        {
          type: 'text',
          name: 'quote',
          title: 'Citat',
        },
        {
          type: 'imageWithAlt',
          name: 'logo',
          title: 'Logotype',
        },
        {
          type: 'imageWithAlt',
          name: 'image',
          title: 'Bild',
        },
      ],
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
    prepare({ title = 'Iteam X', name = 'iteamX' }) {
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
