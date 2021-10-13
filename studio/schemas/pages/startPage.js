export default {
  name: 'startPage',
  type: 'document',
  title: 'Startsida',
  fields: [
    { type: 'hero', name: 'hero' },
    { type: 'layout', name: 'layout' },
    {
      type: 'document',
      name: 'defaultLayout',
      title: 'Default layout',
      description:
        'Denna delen är fast layout som inte struktureras om. Den är placerad i slutet av startsidan. Karusellen över kunder och "Våra priser" ligger här också, de kan redigeras under Moduler',
      options: {
        collapsible: true,
      },
      fields: [
        {
          type: 'document',
          name: 'ourOffers',
          title: 'Våra erbjudanden',
          options: {
            collapsible: true,
          },
          fields: [
            { type: 'string', name: 'title', title: 'Rubrik' },
            {
              type: 'array',
              name: 'offers',
              title: 'Erbjudanden',
              of: [
                {
                  type: 'document',
                  name: 'offers',
                  fields: [
                    {
                      type: 'string',
                      name: 'title',
                      title: 'Namn på erbjudande',
                    },
                    {
                      type: 'string',
                      name: 'subtitle',
                      title: 'Kort beskrivning',
                    },
                    {
                      type: 'defaultReference',
                      name: 'reference',
                    },
                  ],
                },
              ],
            },
            {
              type: 'imageWithAlt',
              name: 'imageWithAlt',
              title: 'Bild',
            },
            {
              type: 'document',
              name: 'message',
              title: 'Meddelande som visas vid bild',
              options: {
                collapsible: false,
              },
              fields: [
                {
                  type: 'text',
                  name: 'text',
                  title: 'Text',
                },
              ],
            },
          ],
        },

        {
          type: 'array',
          name: 'clients',
          title: 'Kunder',
          description:
            'Här lägger vi in logotyper till kunder vi har arbetat med.',
          options: {
            layout: 'grid',
          },
          of: [{ type: 'imageWithAlt', name: 'logotype', title: 'Logotype' }],
        },

        {
          type: 'array',
          name: 'faq',
          title: 'FAQ',
          description: 'Här kan du lägga till vanliga frågor och svar.',
          of: [
            {
              type: 'document',
              name: 'faq',
              fields: [
                { type: 'string', name: 'title', title: 'Frågeställning' },
                { type: 'blockText', name: 'blocktext' },
              ],
            },
          ],
        },
        {
          type: 'titleWithCTA',
          name: 'titleWithCta',
          title: 'Rubrik med en CTA',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'pageName',
      subtitle: 'description',
    },
    prepare({ title = 'Startsida', name = 'startpage' }) {
      const path = `/`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
