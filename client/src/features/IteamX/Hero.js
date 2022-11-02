import React from 'react'

import { Typography, Span } from '../../components/Core'
import { BaseHero } from '../Hero'

export const Hero = ({ title, subtitle, mediaType, link }) => {
  const [splitTitle] = title.split('.')
  return (
    <BaseHero subtitle={subtitle} mediaType={mediaType} link={link}>
      {splitTitle && (
        <Typography.H1 className="tw-text-white">
          {splitTitle}
          <Span color="secondary">.</Span>
        </Typography.H1>
      )}
    </BaseHero>
  )
}
