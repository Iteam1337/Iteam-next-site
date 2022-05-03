import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '3gob9bjq',
  dataset: process.env.NODE_ENV,
  token: process.env.SANITY_READ_DATA_TOKEN,
})
