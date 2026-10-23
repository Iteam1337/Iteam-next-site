import { toSafeRedirectPath } from '../../utils/safeRedirect'

export default function preview(req, res) {
  if (!req?.query?.secret) {
    return res.status(401).json({ message: 'No secret token' })
  }

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid secret token' })
  }

  if (!req.query.slug) {
    return res.status(401).json({ message: 'No slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  res.writeHead(307, { Location: toSafeRedirectPath(req.query.slug) })

  return res.end()
}
