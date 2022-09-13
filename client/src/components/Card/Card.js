import React from 'react'
import { Title, Box, Typography, Anchor } from '../Core'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'

const Card = ({ link, img, preTitle, title, children, readMore }) => {
  const imageProps = useNextSanityImage(client, img.asset._ref)
  return (
    <li className="tw-group tw-relative focus-within:tw-shadow-xl hover:tw-shadow-xl">
      <img {...imageProps} alt={img.alt} />
      {preTitle && <Typography.Caption>{preTitle}</Typography.Caption>}
      <h3 className="tw-peer">
        <a
          aria-label={`${title}, Läs mer…`}
          href={link}
          className="after:tw-absolute after:tw-inset-0 focus-visible:tw-outline-none"
        >
          {title}
        </a>
      </h3>
      <div>{children}</div>
      {readMore && (
        <Typography.Caption
          ariaHidden="true"
          additionalClassName="peer-focus-within:tw-underline group-hover:tw-underline"
        >
          Läs mer...
        </Typography.Caption>
      )}
    </li>
  )
}

export default Card
