import { HiOutlineDocumentAdd } from 'react-icons/hi'

export default {
  // Setup a 'document' type to house the page builder field

  name: 'project',
  type: 'document',
  icon: HiOutlineDocumentAdd,
  title: 'Project',
  fields: [
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: './blocks/textWithImage' },
        { type: './blocks/largeImage' }, // hero.js (same applies for the other types)
        { type: './blocks/testimonial' },
        { type: './blocks/gallery' },
        { type: './blocks/video' },
        { type: './blocks/callToAction' },
        { type: './blocks/form' },
      ],
    },
  ],
}
