import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import { Box } from '../../components/Core'
import sanityClient from '../../utils/sanity-client'

const Brand = styled(Box)`
  opacity: 0.7;
  filter: grayscale(100%);
  width: 100px;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
`

const Client = ({ client }) => {
  const imageProps = useNextSanityImage(sanityClient, client?.asset._ref)
  return (
    <Brand py={3} mx={4}>
      <Image {...imageProps} alt={client.alt} className="img-fluid" />
    </Brand>
  )
}

export const Clients = ({ clients }) => {
  return (
    <Box py={'30px'}>
      <h3 className="tw-sr-only">Kunder</h3>
      <Container>
        <Box
          className="d-flex justify-content-center justify-content-lg-between
         align-items-center flex-wrap"
          mx="-32px"
        >
          {clients.map((client, i) => {
            return <Client key={i} client={client} />
          })}
        </Box>
      </Container>
    </Box>
  )
}
