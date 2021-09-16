export default {
  name: 'mediaTypes',
  title: 'MediaTypes',
  type: 'document',
  fields: [
    {
      name: 'mediaType',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
      },
    },

    {
      name: 'image',
      title: 'Hero Bild',
      type: 'image',
      hidden: ({ parent }) => parent?.mediaType !== 'image',
    },
    {
      name: 'video',
      title: 'Video url',
      type: 'string',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    },
  ],
};
