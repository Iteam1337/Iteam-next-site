import React, { useState } from 'react'
import styled from 'styled-components'
import {
  space,
  border,
  typography,
  shadow,
  flexbox,
  layout,
} from 'styled-system'

const SwitchStyled = styled.button`
  display: inline-block;
  cursor: pointer;
  width: 72px;
  height: 33px;
  border-radius: 17px;
  transition: all 0.3s ease-out;
  background: ${({ active, theme, bg }) =>
    active ? theme.colors[bg] : theme.colors.darkShade};
  position: relative;
  margin: 0 15px;
  white-space: nowrap;
  ${border};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 3px;
  }
  :focus:not(:focus-visible) {
    outline: none;
  }
`

const Round = styled.span`
  width: 21px;
  height: 21px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.dark : theme.colors.light};
  position: absolute;
  transition: all 0.3s ease-out;
  left: ${({ active }) => (active ? `calc(100% - 33px)` : `0`)};
  margin-left: 6px;
  top: 0;
  margin-top: 6px;
  transition: 0.4s;
  border-radius: 500px;
  pointer-events: none;
`

export const Switch = ({ bg = 'secondary', ...rest }) => {
  const [active, setActive] = useState(false)

  const handleSwitch = () => {
    setActive(!active)
  }

  return (
    <SwitchStyled
      bg={bg}
      {...rest}
      onClick={handleSwitch}
      active={active ? 1 : 0}
      aria-label={active ? 'Klicka för löpande pris' : 'Klicka för fast avtal'}
    >
      <Round active={active ? 1 : 0} aria-hidden="true" />
    </SwitchStyled>
  )
}
