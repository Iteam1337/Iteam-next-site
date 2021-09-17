export default {
  name: 'openPositions',
  type: 'document',
  title: 'Lägg till en tjänst',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Titel',
      description: 'Vilken prosition är det vi söker??',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in en rubrik'),
    },
    {
      type: 'title',
      name: 'position',
      title: 'Plats',
      description: 'Vart bör denna personen jobba ifrån',
      initialValue: 'Göteborg, Stockholm eller remote',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in en titel på vem vi söker'),
    },
    {
      type: 'blockText',
      name: 'blockText',
      title: 'Ansökan',
      description:
        'Beskriv vem det är vi är ute efter och vilka erfarenheter som vi söker',
      validation: (Rules) =>
        Rules.required().error('Du behöver lägga in ansökan'),
    },
  ],
  prepare({ name = 'karriär' }) {
    const path = `/${name}`;
    return {
      path,
      title,
    };
  },
};
