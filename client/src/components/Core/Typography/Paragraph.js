import React from 'react'
import clsx from 'clsx'

export const Paragraph = ({ children, className }) => {
  return <p className={clsx(className, 'tw-mb-0')}>{children}</p>
}
