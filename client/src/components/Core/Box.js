import React from 'react'
import clsx from 'clsx'

const Box = ({ additionalClassName, children }) => {
  return (
    <div className={clsx('tw-box-border tw-min-w-0', additionalClassName)}>
      {children}
    </div>
  )
}

export default Box
