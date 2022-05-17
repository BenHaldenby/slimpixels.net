// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import post from './posts'
import author from './author'
import category from './category'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import project from './documents/project'
import pageBuilder from './objects/pageBuilder'
import callToAction from './objects/callToAction'
import form from './objects/form'
import gallery from './objects/gallery'
import largeImage from './objects/largeImage'
import testimonial from './objects/testimonial'
import textWithImage from './objects/textWithImage'
import threeImages from './objects/threeImages'
import video from './objects/video'
import zoomImage from './objects/zoomImage'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  //.concat(allPlugs),
  // We name our schema
  name: 'project',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // ...all other documents
    project,

    // ...all other objects
    pageBuilder,
    largeImage,
    zoomImage,
    textWithImage,
    threeImages,
    testimonial,
    video,
    gallery,
    form,
    callToAction,
  ]),

  // The following are document types which will appear
  // in the studio.
  /*
    {
      name: 'project',
      type: 'document',
      title: 'Project',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
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
          name: 'excerpt',
          description: 'Write a short pararaph of this post (For SEO Purposes)',
          title: 'Excerpt',
          rows: 5,
          type: 'text',
          validation: (Rule) =>
            Rule.max(160).error(
              'SEO descriptions are usually better when its below 160'
            ),
        },
        {
          name: 'pageBuilder',
          title: 'Page content',
          type: 'array',
          of: [
            { type: 'form' },
            { type: 'gallery' },
            { type: 'hero' },
            { type: 'testimonial' },
            { type: 'textWithIllustration' },
            { type: 'video' },
          ],
        },
      ],
    },
      name: 'post',
      type: 'document',
      title: 'Post',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
          },
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'excerpt',
          title: 'Excerpt',
          type: 'string',
        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image',
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime',
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    },

    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'picture',
          title: 'Picture',
          type: 'image',
        },
      ],
  },
  ]),
    */
})
