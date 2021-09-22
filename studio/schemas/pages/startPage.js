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
        'Denna delen är fast layout som inte struktureras om. Den är placerad i slutet av startsidan.',
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
                  name: 'faq',
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
                {
                  type: 'datetime',
                  name: 'datetime',
                  title: 'Datum och tid',
                  description:
                    'Visas som att ett meddelande har skickats vid den utsädda tiden.',
                },
              ],
            },
          ],
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
          options: {
            collapsible: false,
          },
        },
      ],
    },
  ],
};
