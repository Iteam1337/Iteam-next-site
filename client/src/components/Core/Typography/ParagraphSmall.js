import React from 'react'
import clsx from 'clsx'

export const ParagraphSmall = ({ children, additionalClassName }) => {
  return (
    <p
      className={clsx(
        additionalClassName,
        'tw-mb-0 tw-text-base tw-font-light tw-leading-6 tw-tracking-normal'
      )}
    >
      {children}
    </p>
  )
}
