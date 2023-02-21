import Image from 'next/image'
import React from 'react'

import { Typography } from '../../components/Core'

export const CaseFooterSection = ({ img, title, alt, blocks }) => {
  return (
    <section className="tw-flex">
      <div className="tw-relative tw-w-1/5 tw-overflow-hidden">
        <Image
          src={img}
          alt={alt}
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        />
      </div>
      <div className="tw-w-4/5 tw-pl-8">
        <Typography.H3>{title}</Typography.H3>
        <Typography.BlockContent blocks={blocks.blockText} />
      </div>
    </section>
  )
}
