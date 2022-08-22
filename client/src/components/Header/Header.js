import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Link from 'next/link'
import { useRouter } from 'next/router'

import GlobalContext from '../../context/GlobalContext'
import Offcanvas from '../Offcanvas'
import { Button } from '../Core'
import NestedMenu from '../NestedMenu'
import { device } from '../../utils'
import Logo from '../Logo'
import { menuItems } from './menuItems'

const SiteHeader = styled.header`
  padding: 10px 0 10px 3px;
  position: fixed !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;

  .container {
    padding-left: 0;
  }
  transition: 0.4s;
  &.scrolling {
    transform: translateY(-100%);
    transition: 0.4s;
  }
  &.reveal-header {
    transform: translateY(0%);
    box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
    z-index: 9999;
    background: ${({ dark, theme }) =>
      dark ? theme.colors.dark : theme.colors.light};
  }

  /* Bounce To Left */
  .hvr-bounce-to-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    z-index: 1;
  }

  .navbar {
    padding: 0;
    align-items: flex-start;
  }

  .navbar-toggler {
    border: none;
  }

  .hvr-bounce-to-left:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9544b;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition-property: transform;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  // .hvr-bounce-to-left:hover, .hvr-bounce-to-left:focus, .hvr-bounce-to-left:active {
  //   // color: #000 !important;
  // }

  .hvr-bounce-to-left:hover:before,
  .hvr-bounce-to-left:focus:before,
  .hvr-bounce-to-left:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
  .btn-red {
    font-size: 16px !important;
    width: 141px !important;
    height: 45px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #c31a12;
    background: #ff3b5c;
    color: #fff !important;
    font-family: 'Roboto', sans-serif;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.66px;
  }
`

const OpenMenuButton = styled.button`
  color: ${({ dark, theme }) => (dark ? '#fff' : '#000')} !important;
  border-color: ${({ dark, theme }) => (dark ? '#fff' : '#000')} !important;
`

const Menu = styled.ul`
  @media ${device.lg} {
    display: flex;
    justify-content: flex-end;
  }
  > li {
    > a {
      display: block;
      @media ${device.lg} {
        color: ${({ dark, theme }) =>
          dark ? theme.colors.light : theme.colors.darkShade}!important;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        padding-top: 18px !important;
        padding-bottom: 18px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
        margin-left: 9px;
        margin-right: 9px;
      }
    }
    &.with-dropdown {
      @media ${device.lg} {
        position: relative;
        z-index: 99;
      }
      & > a {
        &::after {
          display: inline-block;
          vertical-align: 0.255em;
          content: '';
          border-top: 0.325em solid;
          border-right: 0.325em solid transparent;
          border-bottom: 0;
          border-left: 0.325em solid transparent;
          position: relative;
          top: 1px;
          margin-left: auto;
          transform: ${({ open }) =>
            open ? 'rotate(0deg)' : 'rotate(-90deg)'};
          margin-left: 0.5rem;

          @media screen and (prefers-reduced-motion: no-preference) {
            transition: 0.4s;
          }
        }
      }
    }
  }
`

const DropdownMenu = styled.ul`
  list-style: none;
  @media ${device.lg} {
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    top: ${({ open }) => (open ? '116%' : '110%')};
    position: absolute;
    min-width: 227px;
    max-width: 227px;
    box-shadow: 0 52px 54px rgba(65, 62, 101, 0.3);
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
    padding: 15px 0px;
    z-index: 99;
    opacity: ${({ open }) => (open ? '1' : '0')};
    transition: none;
    pointer-events: ${({ open }) => (open ? 'visible' : 'none')};
    left: auto;
    right: -56%;
    border-radius: 0 0 10px 10px;
    border: 1px solid #eae9f2;
    background-color: #ffffff;
    display: block;
    border-top: ${({ theme }) => `3px solid ${theme.colors.secondary}`};
  }
  @media screen and (prefers-reduced-motion: no-preference) {
    transition: opacity 0.4s, top 0.4s;
  }
  > li {
    color: '${({ theme }) => theme.colors.dark}';
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    a {
      color: ${({ theme }) => theme.colors.dark};
      transition: all 0.3s ease-out;
      position: relative;
      display: flex;
      align-items: center;
    }
  }
`

const CloseMenuButton = styled.button`
  position: absolute;
  top: 11px;
  right: 24px;

  background: none;
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0;
`

const Header = ({ isDark = false }) => {
  const gContext = useContext(GlobalContext)
  const [showScrolling, setShowScrolling] = useState(false)
  const [showReveal, setShowReveal] = useState(false)
  const [open, setOpen] = useState(false)

  const size = useWindowSize()
  const isMobile = size.width < 622

  const router = useRouter()

  const toggleMenu = () => {
    gContext.toggleOffCanvas()
    document.body.style.overflow = 'hidden'
  }

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true)
      setOpen(false)
    } else {
      setShowScrolling(false)
    }
    if (currPos.y < -300) {
      setShowReveal(true)
    } else {
      setShowReveal(false)
    }
  })

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })

    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
      }
    }, [])
    return windowSize
  }

  const getNavLinkStyle = (names) => {
    for (const name of names) {
      const regex = new RegExp(name)
      if (router.pathname.search(regex) === 1) {
        return { textDecoration: 'underline' }
      }
    }
  }

  return (
    <>
      <SiteHeader
        className={`sticky-header ${showScrolling ? 'scrolling' : ''} ${
          showReveal ? 'reveal-header' : ''
        }`}
        dark={isDark ? 1 : 0}
      >
        <Container fluid>
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              {isMobile ? (
                <Logo vertical={false} white={isDark} />
              ) : (
                <Logo vertical={!showReveal} white={isDark} />
              )}
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav ml-lg-auto mr-3">
                <Menu
                  className="navbar-nav d-none d-lg-flex"
                  dark={isDark ? 1 : 0}
                  setShowScrolling
                  open={open}
                >
                  {menuItems.map(
                    (
                      { label, isExternal = false, name, items, ...rest },
                      index
                    ) => {
                      const hasSubItems = Array.isArray(items)
                      return (
                        <React.Fragment key={name + index}>
                          {hasSubItems ? (
                            <li className="with-dropdown" {...rest}>
                              <a
                                style={getNavLinkStyle([
                                  'mvp',
                                  'scaleup',
                                  'iteamX',
                                ])}
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                href="/#"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setOpen(!open)
                                }}
                              >
                                {label}
                              </a>
                              <DropdownMenu dark={isDark ? 1 : 0} open={open}>
                                {items.map((subItem, indexSub) => {
                                  return (
                                    <React.Fragment
                                      key={subItem.name + indexSub}
                                    >
                                      <li>
                                        {subItem.isExternal ? (
                                          <a
                                            href={`${subItem.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {subItem.label}
                                          </a>
                                        ) : (
                                          <Link href={`/${subItem.name}`}>
                                            <a
                                              style={getNavLinkStyle([
                                                subItem.name,
                                              ])}
                                              onClick={(e) => {
                                                setOpen(!open)
                                              }}
                                            >
                                              {subItem.label}
                                            </a>
                                          </Link>
                                        )}
                                      </li>
                                    </React.Fragment>
                                  )
                                })}
                              </DropdownMenu>
                            </li>
                          ) : (
                            <li {...rest}>
                              {isExternal ? (
                                <a
                                  href={`${name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {label}
                                </a>
                              ) : (
                                <Link href={`/${name}`}>
                                  <a
                                    style={getNavLinkStyle([name])}
                                    role="button"
                                    aria-expanded="false"
                                    onClick={(e) => {
                                      setOpen(false)
                                    }}
                                  >
                                    {label}
                                  </a>
                                </Link>
                              )}
                            </li>
                          )}
                        </React.Fragment>
                      )
                    }
                  )}
                </Menu>
              </div>
            </div>
            <OpenMenuButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? 'collapsed' : ''
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Öppna meny"
              onClick={toggleMenu}
              dark={isDark ? 1 : 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill={isDark ? 'white' : 'black'}
                className="bi bi-list"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </OpenMenuButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <CloseMenuButton
          onClick={() => {
            document.body.style.overflow = 'visible'
            gContext.toggleOffCanvas()
          }}
          aria-label="Stäng meny"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            fill="white"
            className="bi bi-x"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </CloseMenuButton>
        <NestedMenu menuItems={menuItems} />
      </Offcanvas>
    </>
  )
}

export default Header
