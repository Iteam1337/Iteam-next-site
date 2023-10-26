import React from 'react'

import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

const SimpleCardPreTitle = ({ icon, preTitle, ariaLabel }) => {
  if (icon) {
    return (
      <div className="tw-flex tw-gap-1">
        <i className={`icon ${icon}`} aria-hidden="true" />
        <Typography.Caption ariaLabel={ariaLabel}>
          {preTitle}
        </Typography.Caption>
      </div>
    )
  } else {
    return (
      <>{preTitle && <Typography.Caption>{preTitle}</Typography.Caption>}</>
    )
  }
}

export const SimpleCard = ({
  link,
  icon,
  preTitle,
  title,
  children,
  ariaLabel,
  bgDark,
  className,
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
      centerContent={false}
      bgDark={bgDark}
      className={className}
    >
      {children && (
        <Typography.ParagraphSmall>{children}</Typography.ParagraphSmall>
      )}
    </BaseCard>
  )
}
