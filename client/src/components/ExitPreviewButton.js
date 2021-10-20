import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const ExitPreviewButton = () => {
  const router = useRouter()
  return (
    <div
      style={{
        backgroundColor: 'red',
        zIndex: 99999,
        position: 'absolute',
        top: 0,
      }}
    >
      <a href={`/api/exit-preview?slug=${router.asPath}`}>
        Preview Mode Activated!
      </a>
    </div>
  )
}

export default ExitPreviewButton
