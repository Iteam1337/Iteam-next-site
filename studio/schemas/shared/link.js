export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      title: 'Välj vilken typ av länk som du vill använda',
      description:
        'External links: tex. `https://www.google.com` eller `https://iteam.se/scaleup#pricing`. Internal links: Länka till en annan sida som finns här i CMS:et.',
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          { title: 'External', value: 'external' },
          { title: 'Internal', value: 'internal' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external', // hidden if link type is not external
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Open in new tab?',
      name: 'blank',
      description: 'Read https://css-tricks.com/use-target_blank/',
      type: 'boolean',
      hidden: ({ parent }) => parent?.linkType !== 'external',
    },
    {
      name: 'internalLink',
      type: 'defaultReference',
      title: 'Internal Link',
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    },
  ],
}
