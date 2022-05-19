import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #ff3b5c;
  z-index: 99999;
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;

  a {
    color: white;
    font-weight: 700;
  }
`

const ExitPreviewLink = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <a href={`/api/exit-preview?slug=${router.asPath}`}>
        Preview Mode Activated. Click to exit preview mode.
      </a>
    </Wrapper>
  )
}

export default ExitPreviewLink
