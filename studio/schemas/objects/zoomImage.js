export default {
  name: 'zoomImage',
  type: 'object',
  title: 'Zoom Image',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        },
      ],
    },
  ],
}
