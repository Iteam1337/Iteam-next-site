export default {
    name: 'title',
    type: 'string',
    title: 'title',
    description: 'Namnge denna post eller sida.',
    validation: (Rules) => Rules.required().error('Du behöver ange en rubrik!'),
}
