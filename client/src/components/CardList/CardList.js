import React from 'react'

const CardList = ({ children }) => {
  return (
    <ul className="flex tw-grid-cols-1 tw-gap-8 sm:tw-grid-cols-2 md:tw-grid-cols-3 [@supports(display:grid)]:tw-grid">
      {children}
    </ul>
  )
}

export default CardList
