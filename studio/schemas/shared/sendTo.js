export default {
  name: 'sendTo',
  title: 'Link',
  type: 'object',
  title: 'Välj vilken typ av länk som du vill använda',
  description:
    'External links: tex. `https://www.google.com` eller `https://iteam.se/scaleup#pricing`. Internal links: Länka till en annan sida som finns här i CMS:et.',
  fields: [
    {
      title: 'URL',
      name: 'external',
      type: 'url',
      hidden: ({ parent, value }) => !value && parent?.internal,
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      name: 'internal',
      type: 'defaultReference',
      title: 'Internal',
      hidden: ({ parent, value }) => !value && parent?.external,
    },
  ],
}
