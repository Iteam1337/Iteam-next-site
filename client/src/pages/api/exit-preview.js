import { toSafeRedirectPath } from '../../utils/safeRedirect'

const exitPreview = (req, res) => {
  res.clearPreviewData()

  res.writeHead(307, { Location: toSafeRedirectPath(req?.query?.slug) })

  return res.end()
}

export default exitPreview
