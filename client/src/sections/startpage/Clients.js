import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { Box } from '../../components/Core'
import sanityClient from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'

const Brand = styled(Box)`
  opacity: 0.7;
  filter: grayscale(100%);
  width: 100px;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
`

const Clients = ({ clients }) => (
  <Box py={'30px'}>
    <h3 className="visibility-hidden">Kunder</h3>
    <Container>
      <Box
        className="d-flex justify-content-center justify-content-lg-between
         align-items-center flex-wrap"
        mx="-32px"
      >
        {clients.map((client, i) => {
          const imageProps = useNextSanityImage(
            sanityClient,
            client?.asset._ref
          )
          return (
            <Brand key={i} className="" py={3} mx={4}>
              <img {...imageProps} alt={client.alt} className="img-fluid" />
            </Brand>
          )
        })}
      </Box>
    </Container>
  </Box>
)

export default Clients
