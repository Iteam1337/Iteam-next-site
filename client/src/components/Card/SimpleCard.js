import React from 'react'
import clsx from 'clsx'

import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

const SimpleCardPreTitle = ({ preTitle }) => {
  return (
    <div className="tw-flex tw-gap-1">
      <i className="icon icon-pin-3" aria-hidden="true" />
      <Typography.Caption
        ariaLabel={`Plats: ${preTitle}`}
        additionalClassName={clsx('tw-order-1')}
        children={preTitle}
      />
    </div>
  )
}

export const SimpleCard = ({ link, preTitle, title, variant }) => {
  return (
    <BaseCard
      link={link}
      preTitle={<SimpleCardPreTitle preTitle={preTitle} />}
      title={title}
      readMore={true}
      centerContent={false}
    />
  )
}
