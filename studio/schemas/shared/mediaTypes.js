export default {
  name: 'mediaTypes',
  title: 'Media',
  type: 'document',
  fields: [
    {
      name: 'mediaType',
      type: 'string',
      initialValue: 'image',
      title: 'Val av media',
      options: {
        list: [
          { title: 'Bild', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Bakgrunsfärg', value: 'color' }
        ],
      },
    },

    {
      name: 'image',
      title: 'Bild',
      type: 'imageWithAlt',
      hidden: ({ parent }) => parent?.mediaType !== 'image',
    },
    {
      name: 'video',
      title: 'Video url',
      type: 'string',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    },
    {
      name: 'color',
      title: 'Bakgrundsfärg',
      type: 'colorPicker',
      description: 'Välj bakgrundsfärg till din hero här',
      hidden: ({ parent }) => parent?.mediaType !== 'color',
    }
  ],
};
