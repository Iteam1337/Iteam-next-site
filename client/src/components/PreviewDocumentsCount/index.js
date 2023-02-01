'use client'

import { usePreview } from '../../lib/sanity.preview'
import { DocumentsCount, query } from '../DocumentsCount'

// export default function PreviewDocumentsCount({ token }) {
//   const data = usePreview(token, query)
//   return <DocumentsCount data={data} />
// }

export default function PreviewDocumentsCount() {
  const data = usePreview(null, query)
  return <DocumentsCount data={data} />
}
