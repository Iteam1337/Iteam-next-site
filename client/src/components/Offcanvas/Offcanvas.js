import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '../Logo'

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ show }) => (show ? '1' : '0')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: all 0.3s ease-out;
`

const Drawer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 999999;
  background: #000;
  overflow-y: auto;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
  transition: all 0.15s ease-out;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  .dropdown-menu {
    position: static !important;
    will-change: initial !important;
    transform: initial !important;
    float: none !important;
  }
`

const LogoContainer = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
`

const Offcanvas = ({ show, onHideOffcanvas, children }) => {
  return (
    <>
      <Overlay show={show} onClick={onHideOffcanvas} />
      <Drawer show={show}>
        <Container>
          <div className="p-3">
            <i className="icon icon-simple-remove icon-close"></i>
            <LogoContainer className="my-3">
              <Logo white onClick={onHideOffcanvas} />
            </LogoContainer>
            <div className="pt-4">{children}</div>
          </div>
        </Container>
      </Drawer>
    </>
  )
}

export default Offcanvas
