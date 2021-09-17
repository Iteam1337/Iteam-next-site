export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'heroTitle',
      title: 'Titel',
      type: 'string',
      validation: (Rules) =>
        Rules.required().error('Du behöver sätta en titel.'),
    },
    {
      name: 'heroSubTitle',
      title: 'Underrubrik',
      type: 'text',
      validation: (Rules) =>
        Rules.required().error('En subtitel kan vara snyggt att ha också.'),
    },
    {
      name: 'heroCta',
      title: 'Call to action',
      type: 'cta',
      description: 'Om du vill ha en CTA på hero sektionen så fyller du i det här.'
    },
    {
      name: 'mediaTypes',
      title: 'Media',
      type: 'mediaTypes',
      description:
        'Här kan du lägga in vad du vill ha för hero genom att välja mellan att använda en bild, länka till en video eller välja en bakgrundsfärg.',
    },

  ],
};
