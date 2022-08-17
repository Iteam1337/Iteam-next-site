import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.bg} !important;
    color: ${({ theme }) => theme.colors.text} !important;
  }

  p, .p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 30px;
    margin-bottom: 0;
  }

  ul,.ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    transition: all 0.3s ease-out;
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.secondary} !important;
      transition: none !important;
    }
    &:hover {
      outline: none !important;
      text-decoration: none;
    }
  }

  button {
    background: none;
    border: none;
    padding: 0;
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.secondary};
      outline-offset: 3px;
    }
    :focus:not(:focus-visible) {
      outline: none;
    }
  }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type="number"] {
      -moz-appearance: textfield; /* Firefox */
    }

    .visibility-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
`

export default globalStyle
