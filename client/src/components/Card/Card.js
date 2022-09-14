import React from 'react'
import { Title, Box, Typography, Anchor } from '../Core'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'

const Card = ({ link, img, preTitle, title, children, readMore }) => {
  const imageProps = useNextSanityImage(client, img.asset._ref)
  return (
    <li className="tw-group tw-relative tw-flex tw-flex-col focus-within:tw-shadow-xl hover:tw-shadow-xl">
      <h3 className="tw-peer tw-order-3">
        <a
          aria-label={`${title}, Läs mer…`}
          href={link}
          className="after:tw-absolute after:tw-inset-0 focus-visible:tw-outline-none"
        >
          {title}
        </a>
      </h3>
      {preTitle && (
        <Typography.Caption additionalClassName="tw-order-2">
          {preTitle}
        </Typography.Caption>
      )}
      <img {...imageProps} alt={img.alt} className="tw-order-1" />
      <div className="tw-order-4">{children}</div>
      {readMore && (
        <Typography.Caption
          ariaHidden="true"
          additionalClassName="peer-focus-within:tw-underline group-hover:tw-underline tw-order-5"
        >
          Läs mer...
        </Typography.Caption>
      )}
    </li>
  )
}

export default Card
