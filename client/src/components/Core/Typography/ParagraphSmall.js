import React from 'react'
import clsx from 'clsx'

export const ParagraphSmall = ({ children, className }) => {
  return (
    <p
      className={clsx(
        className,
        'tw-mb-0 tw-text-base tw-leading-6 tw-tracking-normal'
      )}
    >
      {children}
    </p>
  )
}
