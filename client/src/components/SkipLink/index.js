import styled from 'styled-components'
import { Anchor } from '../Core'

const Link = styled(Anchor)`
  position: absolute;
  left: 25%;
  top: -1000px;
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
    top: 0;
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
