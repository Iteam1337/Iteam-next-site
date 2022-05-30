import styled from 'styled-components'
import { Anchor } from '../Core'

const LinkWrapper = styled.div`
  position: absolute;
  left: 25%;
  top: 0;
  right: 25%;
  z-index: 9999;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  background: ${({ theme }) => theme.colors.dark};
  opacity: 0;
  transition: opacity 0.1s;

  &:focus-within {
    opacity: 1;
  }

  & a {
    color: ${({ theme }) => theme.colors.light};
    font-weight: 500;
    padding: 0 1rem;
  }
`
const Link = styled(Anchor)`
  position: absolute;
  left: 25%;
  top: 0;
  right: 25%;
  z-index: 9999;
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  background: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0;
  transition: opacity 0.1s;

  &:focus-visible {
    opacity: 1;
  }
`

const SkipLink = () => {
  return (
    <Link href="#main-content" color="light">
      Hoppa till innehåll
    </Link>
  )
}

export default SkipLink
