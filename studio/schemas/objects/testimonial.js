export default {
  name: 'testimonial',
  type: 'object',
  title: 'Testimonial',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
  ],
}
