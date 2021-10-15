export const config = {
  projectId: '3gob9bjq',
  dataset: process.env.NODE_ENV,
  token: process.env.SANITY_READ_DATA_TOKEN,
  apiVersion: '2021-10-14',
  useCdn: process.env.NODE_ENV === 'production',
}
