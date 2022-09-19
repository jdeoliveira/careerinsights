export default {
  name: 'org',
  type: 'document',
  title: 'Organization',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'core',
      type: 'body',
      title: 'Core'
    },
  ]
}