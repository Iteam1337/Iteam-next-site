import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "3gob9bjq",
  dataset: process.env.NODE_ENV,
  useCdn: true,
  token: process.env.SANITY_READ_DATA_TOKEN,
  watchMode: true,
})
