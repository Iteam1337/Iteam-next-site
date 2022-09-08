import React from 'react'

const Text = ({ children, variant, color }) => {
  return (
    <p
      className={`tw-mb-0 tw-font-light tw-tracking-normal ${
        color === 'light' ? 'tw-text-gray-light' : 'tw-text-gray-dark'
      } ${
        variant === 'small'
          ? 'tw-text-base tw-leading-7'
          : 'tw-text-xl tw-leading-8'
      }`}
    >
      {children}
    </p>
  )
}

export default Text
