export default {
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
        Rules.required().error('En underrubrik kan vara snyggt att ha också.'),
    },
    {
      name: 'link',
      title: 'Call to action',
      type: 'callToAction',
      description:
        'Om du vill ha en CTA på hero sektionen så fyller du i det här.',
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
}
