import React from 'react'

export const CardListGrid = ({ children }) => {
  return (
    <ul className="tw-grid-flow-ro tw-flex tw-gap-8 sm:tw-grid-cols-2 md:tw-grid-cols-3 [@supports(display:grid)]:tw-grid">
      {children}
    </ul>
  )
}
