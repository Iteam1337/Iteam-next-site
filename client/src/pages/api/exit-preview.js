const exitPreview = (req, res) => {
  res.clearPreviewData()

  res.writeHead(307, { Location: req?.query?.slug ?? `/` })

  return res.end()
}

export default exitPreview
