export default {
  name: 'role',
  type: 'document',
  title: 'Role',
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
    {
      title: 'Organization',
      name: 'org',
      type: 'reference',
      to: [{type: 'org'}]
    }
  ]
}