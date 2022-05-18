import { createGlobalStyle } from 'styled-components'

// todo: create styles for headings, sync with src/components/Typography

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
    color: ${({ theme }) => theme.colors.secondary};  
    transition: all 0.3s ease-out; 
    &:hover, &:active, &:focus{
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: none;
      outline: none !important;
    }
    &:hover {
      text-decoration: underline;
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
`

export default globalStyle
