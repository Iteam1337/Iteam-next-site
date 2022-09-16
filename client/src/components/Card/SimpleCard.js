import React from 'react'
import clsx from 'clsx'

import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

const SimpleCardPreTitle = ({ icon, preTitle, ariaLabel }) => {
  if (icon) {
    return (
      <div className="tw-flex tw-gap-1">
        <i className={`icon ${icon}`} aria-hidden="true" />
        <Typography.Caption
          ariaLabel={ariaLabel}
          additionalClassName={clsx('tw-order-1')}
        >
          {preTitle}
        </Typography.Caption>
      </div>
    )
  } else {
    return (
      <>
        {preTitle && (
          <Typography.Caption additionalClassName={clsx('tw-order-1')}>
            {preTitle}
          </Typography.Caption>
        )}
      </>
    )
  }
}

export const SimpleCard = ({
  link,
  icon,
  preTitle,
  title,
  children,
  readMore,
  ariaLabel,
  bgDark,
}) => {
  return (
    <BaseCard
      link={link}
      preTitle={
        <SimpleCardPreTitle
          icon={icon}
          preTitle={preTitle}
          ariaLabel={ariaLabel}
        />
      }
      title={title}
      readMore={readMore}
      centerContent={false}
      bgDark={bgDark}
    >
      <Typography.ParagraphSmall>{children}</Typography.ParagraphSmall>
    </BaseCard>
  )
}
