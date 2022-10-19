// todo: comment back this and fix related ui bugs

/* import React from 'react'
import clsx from 'clsx'

const Box = ({ className, children, ariaHidden }) => {
  return (
    <div
      aria-hidden={ariaHidden}
      className={clsx('tw-box-border tw-min-w-0', className)}
    >
      {children}
    </div>
  )
} */

import styled from 'styled-components'
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  typography,
  background,
  border,
  position,
  shadow,
} from 'styled-system'

export const Box = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
  ${typography};
  ${background};
  ${border};
  ${position};
  ${shadow};
`
