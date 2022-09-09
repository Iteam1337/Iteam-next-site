import React from 'react'

export const ParagraphSmall = ({ children, className, color }) => {
  return (
    <p
      className={`tw-mb-0 tw-text-base tw-font-light tw-leading-7 tw-tracking-normal ${
        color === 'light' ? 'tw-text-gray-light' : 'tw-text-gray-dark'
      } ${className}`}
    >
      {children}
    </p>
  )
}
