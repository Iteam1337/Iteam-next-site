import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import { Button } from "../Core";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";
import { menuItems } from "./menuItems";

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
    content: "";
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
    font-family: "Roboto", sans-serif;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.66px;
  }
`;

const ToggleButton = styled.button`
  color: ${({ dark, theme }) => (dark ? "#fff" : "#000")} !important;
  border-color: ${({ dark, theme }) => (dark ? "#fff" : "#000")} !important;
`;

const Menu = styled.ul`
  @media ${device.lg} {
    display: flex;
    justify-content: flex-end;
  }

  .dropdown-toggle {
    cursor: pointer;
  }
  > li {
    > .nav-link {
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
      }
      &:hover {
        color: ${({ theme }) => theme.colors.primary} !important;
      }
    }
  }
  .nav-item.dropdown {
    @media ${device.lg} {
      position: relative;
      z-index: 99;
    }
    &:hover {
      > .menu-dropdown {
        @media ${device.lg} {
          top: 90%;
          opacity: 1;
          pointer-events: visible;
        }
      }
    }
  }
`;

const MenuDropdown = styled.ul`
  list-style: none;
  @media ${device.lg} {
    top: 110%;
    position: absolute;
    min-width: 227px;
    max-width: 227px;
    box-shadow: 0 52px 54px rgba(65, 62, 101, 0.3);
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
    padding: 15px 0px;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.4s, top 0.4s;
    pointer-events: none;
    left: -90%;
    border-radius: 0 0 10px 10px;
    border: 1px solid #eae9f2;
    background-color: #ffffff;
    display: block;
    border-top: ${({ theme }) => `3px solid ${theme.colors.secondary}`};
  }
  > .drop-menu-item {
    color: '${({ theme }) => theme.colors.dark};'
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
      &.dropdown-toggle::after {
        display: inline-block;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.325em solid;
        border-right: 0.325em solid transparent;
        border-bottom: 0;
        border-left: 0.325em solid transparent;
        position: relative;
        top: 1px;
        margin-left: auto;
        transform: rotate(-90deg);
        transition: 0.4s;
      }
    }

    &:hover {
      > a {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        &::after {
          transform: rotate(0deg);
        }
      }
    }
    &.dropdown {
      position: relative;

      &:hover {
        > .menu-dropdown {
          @media ${device.lg} {
            top: 10px;
            opacity: 1;
            pointer-events: visible;
            transform: translateX(-100%);
          }
        }
      }
      > .menu-dropdown {
        border-top-color: ${({ theme }) => theme.colors.primary};
        @media ${device.lg} {
          top: 10px;
          left: 0%;
          opacity: 0;
          transform: translateX(-110%);
          transition: 0.4s;
          pointer-events: none;
        }
        > .drop-menu-item {
          @media ${device.lg} {
            padding-left: 30px;
            padding-right: 30px;
          }
        }
      }
    }
  }
  &.dropdown-right {
    left: auto;
    right: -90%;
  }
`;

const CrossWrapper = styled.div`
    position: absolute;
    top: 11px;
    right: 24px;
}
`

const Header = ({ isDark = false }) => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const size = useWindowSize();
  const isMobile = size.width < 622;


  const toggleMenu = () => {
    gContext.toggleOffCanvas()
    document.body.style.overflow = "hidden";
  }

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      if (typeof window !== "undefined") {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

  return (
    <>
      <SiteHeader
        className={`sticky-header ${showScrolling ? "scrolling" : ""} ${showReveal ? "reveal-header" : ""
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
                >

                  {menuItems.map(
                    (
                      { label, isExternal = false, name, items, ...rest },
                      index
                    ) => {
                      const hasSubItems = Array.isArray(items);
                      return (
                        <React.Fragment key={name + index}>
                          {hasSubItems ? (
                            <li className="nav-item dropdown" {...rest}>
                              <a
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                href="/#"
                                onClick={(e) => e.preventDefault()}
                              >
                                {label}
                              </a>
                              <MenuDropdown
                                className="menu-dropdown dropdown-right"
                                dark={isDark ? 1 : 0}
                              >
                                {items.map((subItem, indexSub) => {
                                  const hasInnerSubItems = Array.isArray(
                                    subItem.items
                                  );
                                  return (
                                    <React.Fragment
                                      key={subItem.name + indexSub}
                                    >
                                      {hasInnerSubItems ? (
                                        <li className="drop-menu-item dropdown">
                                          <a
                                            className="dropdown-toggle"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                            href="/#"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            {subItem.label}
                                          </a>
                                          <MenuDropdown
                                            className="menu-dropdown dropdown-right"
                                            dark={isDark ? 1 : 0}
                                          >
                                            {subItem.items.map(
                                              (itemInner, indexInnerMost) => (
                                                <li
                                                  className="drop-menu-item"
                                                  key={
                                                    itemInner.name +
                                                    indexInnerMost
                                                  }
                                                >
                                                  {itemInner.isExternal ? (
                                                    <a
                                                      href={`${itemInner.name}`}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                    >
                                                      {itemInner.label}
                                                    </a>
                                                  ) : (
                                                    <Link
                                                      href={`/${itemInner.name}`}
                                                    >
                                                      <a>{itemInner.label}</a>
                                                    </Link>
                                                  )}
                                                </li>
                                              )
                                            )}
                                          </MenuDropdown>
                                        </li>
                                      ) : (
                                        <li className="drop-menu-item">
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
                                              <a>{subItem.label}</a>
                                            </Link>
                                          )}
                                        </li>
                                      )}
                                    </React.Fragment>
                                  );
                                })}
                              </MenuDropdown>
                            </li>
                          ) : (
                            <li className="nav-item" {...rest}>
                              {isExternal ? (
                                <a
                                  className="nav-link"
                                  href={`${name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {label}
                                </a>
                              ) : (
                                <Link href={`/${name}`}>
                                  <a
                                    className="nav-link"
                                    role="button"
                                    aria-expanded="false"
                                  >
                                    {label}
                                  </a>
                                </Link>
                              )}
                            </li>
                          )}
                        </React.Fragment>
                      );
                    }
                  )}
                </Menu>
              </div>
            </div>
            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${gContext.visibleOffCanvas ? "collapsed" : ""
                }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
              dark={isDark ? 1 : 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill={isDark ? "white" : "black"} class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <CrossWrapper onClick={() => {
          document.body.style.overflow = "visible";
          gContext.toggleOffCanvas()
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </CrossWrapper>
        <NestedMenu menuItems={menuItems} />
      </Offcanvas>
    </>
  );
};

export default Header;
