export default {
  name: 'title',
  type: 'string',
  title: 'title',
  validation: (Rules) => Rules.required().error('Du behöver ange en rubrik!'),
}
