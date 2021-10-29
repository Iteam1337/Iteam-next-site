export default {
  name: 'layoutImages',
  title: 'Layout för bilder',
  type: 'array',
  options: { layout: 'grid' },
  of: [{ type: 'imageWithAlt' }],
  description:
    'Här kan du ladda upp bilder som kommer att visas i samma sektion.',
}
