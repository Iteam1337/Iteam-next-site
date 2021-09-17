export default {
  name: 'employeeQuote',
  title: 'Citat från anställd',
  type: 'document',
  options: {
    collapsible: true,
  },
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Namn på anställd',
      validation: (Rules) =>
        Rules.required().error('Du behöver ange ett namn på en anställd.'),
    },
    {
      type: 'string',
      name: 'role',
      title: 'Roll',
      validation: (Rules) =>
        Rules.required().error('Ange vilken roll den anställda har.'),
    },

    {
      type: 'blockText',
      name: 'qoute',
      title: 'Citat från anställd',
      validation: (Rules) => Rules.required().error('Glöm inte citatet.'),
    },
    {
      type: 'imageWithAlt',
      name: 'image',
      title: 'Bild på anställd',
      validation: (Rules) =>
        Rules.required().error(
          'Glöm inte att lägga in en bild på den anställda.'
        ),
    },
  ],
};
