import React from 'react'
import clsx from 'clsx'

export const Paragraph = ({ children, additionalClassName }) => {
  return <p className={clsx(additionalClassName, 'tw-mb-0')}>{children}</p>
}
