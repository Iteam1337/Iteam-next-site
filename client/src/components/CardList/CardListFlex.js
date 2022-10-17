import clsx from 'clsx'
import React from 'react'

export const CardListFlex = ({ column, children }) => {
  return (
    <ul
      className={clsx(
        'tw-justify-center tw-gap-8 md:tw-flex',
        column && 'tw-flex-col tw-gap-2'
      )}
    >
      {children}
    </ul>
  )
}
