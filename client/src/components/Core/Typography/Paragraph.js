import React from 'react'
import clsx from 'clsx'

export const Paragraph = ({ children, additionalClassName, light }) => {
  return (
    <p
      className={clsx(
        'tw-mb-0 tw-text-xl tw-font-light tw-leading-8 tw-tracking-normal',
        light ? 'tw-text-gray-light' : 'tw-text-gray-dark',
        additionalClassName
      )}
    >
      {children}
    </p>
  )
}
