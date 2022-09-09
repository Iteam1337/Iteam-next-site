import React from 'react'

export const ParagraphSmall = ({ children, additionalClassName, light }) => {
  return (
    <p
      className={`tw-mb-0 tw-text-base tw-font-light tw-leading-7 tw-tracking-normal ${
        light ? 'tw-text-gray-light' : 'tw-text-gray-dark'
      } ${additionalClassName}`}
    >
      {children}
    </p>
  )
}
