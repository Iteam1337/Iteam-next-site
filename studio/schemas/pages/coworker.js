export default {
  name: 'coworker',
  title: 'Medarbetare',
  type: 'document',
  fields: [
    {
      type: 'imageWithAlt',
      name: 'heroImage',
      title: 'Hero Bild',
      // validation: (Rules) => Rules.required().error('Välj en bakgrundsbild'),
    },
    {
      type: 'string',
      name: 'fullname',
      title: 'Namn',
      validation: (Rules) =>
        Rules.required().error('Du behöver fylla i ett namn'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Används för att döpa urlen. Ska vara samma som titlen men med bindessträck istället för mellanslag.',
      validation: (Rules) => [Rules.required().error('Ange en slug.')],
      options: {
        source: 'fullname',
        maxLength: 96,
      },
    },
    {
      type: 'string',
      name: 'role',
      title: 'Roll',
      validation: (Rules) =>
        Rules.required().error('Du behöver fylla i en roll'),
    },
    {
      type: 'string',
      name: 'contact',
      title: 'Kontakt',
      initialValue: 'Kontakt',
    },
    { type: 'string', name: 'phoneNumber', title: 'Telefonnummer' },
    {
      type: 'string',
      name: 'email',
      title: 'Mailadress',
      validation: (Rules) =>
        Rules.required().error('Du behöver fylla i en mailadress'),
    },
    {
      type: 'string',
      name: 'status',
      title: 'Status',
      options: {
        list: [
          { title: 'Partner', value: 'partner' },
          { title: 'Founder', value: 'founder' },
        ],
      },
    },
    {
      type: 'string',
      name: 'whyTech',
      title: 'Varför Jobbar du med teknik?',
      initialValue: 'Varför jobbar du med teknik?',
    },
    {
      type: 'text',
      name: 'answerTech',
      title: 'Varför jobbar du med teknik?',
      // validation: (Rules) =>
      //   Rules.required().error('Du behöver svara på varför jobbar med teknik'),
    },
    {
      type: 'string',
      name: 'background',
      title: 'Bakgrund',
      initialValue: 'Bakgrund',
    },
    {
      type: 'text',
      name: 'backgroundAnswer',
      title: 'Bakgrund',
      //   validation: (Rules) =>
      //     Rules.required().error('Berätta lite om din bakgrund'),
    },
    {
      type: 'string',
      name: 'competence',
      title: 'Specialistkompetens',
      initialValue: 'Specialistkompetens',
    },
    {
      type: 'text',
      name: 'competenceAnswer',
      title: 'Specialistkompetens',
      //   validation: (Rules) =>
      //     Rules.required().error('Vad är din specialistkompetens?'),
    },
  ],

  preview: {
    select: {
      title: 'fullname',
      slug: 'slug',
      subtitle: 'description',
    },
    prepare({ title = 'No name', slug = {}, name = 'about' }) {
      const path = `/${name}/${slug.current}`;

      return {
        path,
        title,
        subtitle: path,
      };
    },
  },
};
