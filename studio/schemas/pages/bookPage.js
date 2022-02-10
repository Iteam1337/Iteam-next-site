export default {
  name: 'bookPage',
  type: 'document',
  title: 'Book',
  fields: [
    { type: 'hero', name: 'hero' },
    { type: 'title', name: 'title', title: 'Rubrik' },
    {
      type: 'object',
      name: 'call',
      title: 'Ring oss',
      fields: [
        {
          type: 'title',
          name: 'title',
          title: 'Rubrik',
          initialValue: 'Ring oss',
        },
        {
          name: 'contactPersons',
          title: 'Kontaktuppgifter',
          type: 'array',
          of: [{ type: 'defaultReference' }],
          description:
            'Här kan du lägga in flera kontaktpersoner som är relevanta för sidan.',
        },
        { type: 'cta', name: 'cta' },
      ],
    },
    {
      type: 'object',
      name: 'mail',
      title: 'Maila oss',
      fields: [
        {
          type: 'title',
          name: 'title',
          title: 'Rubrik',
          initialValue: 'Maila?',
        },
        {
          name: 'emails',
          title: 'Mail',
          type: 'array',
          of: [
            {
              type: 'email',
              name: 'emailAddress',
            },
          ],
          description:
            'Här kan du lägga in flera mailadresser som ska visas, och länkas till, på sidan',
        },
      ],
    },
    {
      type: 'object',
      name: 'visit',
      title: 'Besök oss',
      fields: [
        {
          name: 'address',
          title: 'Adress',
          type: 'array',
          of: [
            {
              name: 'location',
              type: 'section',
              title: 'Plats och address',
              description: 'Skriv plats och adressen till vårt kontor',
            },
          ],
          description: 'Våra adresser',
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
    prepare({ title = 'Book', name = 'book' }) {
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
