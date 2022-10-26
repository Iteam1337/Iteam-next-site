import React from 'react'
import clsx from 'clsx'

import { Typography } from '../../components/Core'
import { BaseHero } from './BaseHero'

export const Hero = ({ title, subtitle, mediaType, link, className }) => {
  return (
    <BaseHero
      subtitle={subtitle}
      mediaType={mediaType}
      link={link}
      className={className}
    >
      <Typography.H1
        className={clsx(
          mediaType.darkGradient || mediaType.type === 'color'
            ? 'tw-text-white'
            : 'tw-text-gray-dark'
        )}
      >
        {title}
      </Typography.H1>
    </BaseHero>
  )
}
