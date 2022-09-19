export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
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
      title: 'Role',
      name: 'role',
      type: 'reference',
      to: [{type: 'role'}]
    }
  ]
}