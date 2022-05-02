export default {
  name: 'collection',
  title: 'Collections',
  type: 'document',
  fields: [
    {
      name: 'title',
      description: 'Enter the title of NFT drop',
      title:'Title',
      type: 'string',
    },
    {
      name: 'description',
      title:'Description',
      type: 'string',
    },
    {
      name: 'nftCollectionName',
      title:'Name Of NFT Collection',
      type: 'string',
    },
    {
      name: 'address',
      title:'Address',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'reference',
      to: {type: 'creator'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
