export default {
  name: 'careerPage',
  type: 'document',
  title: 'Karriär',
  fields: [
    { type: 'hero', name: 'hero' },
    { type: 'section', name: 'section' },

    {
      name: 'coworkerCarouselOne',
      title: 'Medarbetarkarusell',
      type: 'array',
      of: [{ type: 'defaultReference' }],
      description:
        'Här kan du välja vilka som kommer visas i medarbetarkarusellen där bild, titel och svaret på frågan "Varför jobbar du med teknik?" syns. En av dessa karuseller kommer att slumpas fram varje gång man går in på karriärssidan.',
    },
    {
      name: 'coworkerCarouselTwo',
      title: 'Medarbetarkarusell',
      type: 'array',
      of: [{ type: 'defaultReference' }],
      description:
        'Här kan du välja vilka som kommer visas i medarbetarkarusellen där bild, titel och svaret på frågan "Varför jobbar du med teknik?" syns. En av dessa karuseller kommer att slumpas fram varje gång man går in på karriärssidan.',
    },
    { type: 'textGrid', name: 'textGrid' },
    {
      type: 'openings',
      name: 'openings',
      title: 'Rubrik för våra lediga tjänster',
      description:
        'Lägg in en rubrik och underribrik för våra ansökningar. Under dessa kommer vi att visa länkar till de öppningar vi har just nu',
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
      title: 'section.title',
      subtitle: 'section',
    },
    prepare({ title = 'Karriar', name = 'karriar' }) {
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
