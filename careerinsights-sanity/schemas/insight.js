export default {
  name: 'insight',
  type: 'document',
  title: 'Insight',
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
      title: 'Experience',
      name: 'experience',
      type: 'reference',
      to: [{type: 'experience'}]
    }
  ]
}