import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "3gob9bjq",
  dataset: "production",
  token: process.env.SANITY_READ_DATA_TOKEN,
})
