import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ListGroup, Collapse } from 'react-bootstrap'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'
import Link from 'next/link'
import GlobalContext from '../../context/GlobalContext'

const NestedMenuContainer = styled.div`
  a {
    color: #fff !important;
    transition: all 0.3s ease-out;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    background-color: #000;
    color: #fff;
    font-size: 33px;
    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`

const ExpandButton = styled.button`
  color: ${({ theme }) => theme.colors.light};
  margin-top: -4px;
`

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const hasSubItems = Array.isArray(items)

  const gContext = useContext(GlobalContext)

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className="d-flex align-items-center justify-content-between"
        >
          <span>{label}</span>
          <ExpandButton aria-label={open ? 'Dölj undermeny' : 'Visa undermeny'}>
            {open ? (
              <FaAngleDown aria-hidden="true" />
            ) : (
              <FaAngleRight aria-hidden="true" />
            )}
          </ExpandButton>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
          `}
          className="tw-my-1"
        >
          {isExternal ? (
            <a
              href={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas()
                  document.body.style.overflow = 'visible'
                }
              }}
            >
              {label}
            </a>
          ) : (
            <Link href={`/${name}`}>
              <a
                onClick={() => {
                  if (gContext.visibleOffCanvas) {
                    gContext.toggleOffCanvas()
                    document.body.style.overflow = 'visible'
                  }
                }}
              >
                {label}
              </a>
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  )
}

const NestedMenu = ({ menuItems = defaultMenuItems }) => {
  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}
      </ListGroup>
    </NestedMenuContainer>
  )
}

export default NestedMenu
