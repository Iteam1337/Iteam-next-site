export default {
  name: 'mediaType',
  title: 'Media',
  type: 'document',

  fields: [
    {
      name: 'type',
      type: 'string',
      initialValue: 'image',
      title: 'Val av media',
      options: {
        list: [
          { title: 'Bild', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Bakgrunsfärg', value: 'color' },
        ],
      },
    },

    {
      name: 'image',
      title: 'Bild',
      type: 'imageWithAlt',
      hidden: ({ parent }) => parent?.type !== 'image',
    },
    {
      name: 'darkGradient',
      title: 'Mörk gradient och vit text över hero bild.',
      type: 'boolean',
      initialValue: true,
      description:
        'Välj här om du vill ha en ljus eller mörk gradient över hero bilden. Om du väljer mörk kommer texten att bli ljus och virse versa. Mörk är default.',
      hidden: ({ parent }) => parent?.type !== 'image',
    },
    {
      name: 'video',
      title: 'Video url',
      type: 'string',
      hidden: ({ parent }) => parent?.type !== 'video',
    },
    {
      name: 'color',
      title: 'Bakgrundsfärg',
      type: 'colorPicker',
      description: 'Välj bakgrundsfärg till din hero här',
      hidden: ({ parent }) => parent?.type !== 'color',
    },
  ],
}
