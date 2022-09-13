import React from 'react'
import { Title, Box, Typography, Anchor } from '../Core'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'

const Card = ({ link, img, preTitle, title, children, readMore }) => {
  const imageProps = useNextSanityImage(client, img.asset._ref)
  return (
    <li className="tw-relative">
      <img {...imageProps} alt={img.alt} />
      {preTitle && <Typography.Caption>{preTitle}</Typography.Caption>}
      <Title variant="card">
        <a href={link} className="after:tw-absolute after:tw-inset-0">
          {title}
        </a>
      </Title>
      <div>{children}</div>
      {readMore && (
        <Box>
          <Typography.Caption>Läs mer...</Typography.Caption>
        </Box>
      )}
    </li>
  )
}

export default Card
