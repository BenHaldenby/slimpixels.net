import { HiOutlineDocumentAdd } from 'react-icons/hi'

export default {
  // Setup a 'document' type to house the page builder field

  name: 'project',
  type: 'document',
  icon: HiOutlineDocumentAdd,
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'introText',
      title: 'Intro Text',
      rows: 5,
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 5,
      validation: (Rule) =>
        Rule.max(240).error(
          'SEO descriptions are usually better when its below 160'
        ),
    },
    {
      name: 'projectTags',
      title: 'Tags',
      type: 'tags',
      options: {
        predefinedTags: [
          {
            label: 'Front-End Development',
            value: 'front-end-development',
          },
          {
            label: 'JavaScript',
            value: 'javascript',
          },
          {
            label: 'WordPress',
            value: 'wordpress',
          },
        ],
      },
    },
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page sections',
    },
  ],
}
