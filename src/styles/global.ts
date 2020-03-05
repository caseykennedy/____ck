// Global styles

// ___________________________________________________________________

// Core
import { createGlobalStyle } from 'styled-components'

// Theme
import theme from '../../config/theme'

// Styles
import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
  
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    
    border: 0;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Cursor */
  html,
  a,
  button {
    cursor: none;

    &:hover {
      cursor: none;
    }
  }

  .popup {
    color: white;
    mix-blend-mode: difference;
    position: absolute;
    pointer-events: none;
    z-index: 99999;
    font-size: 3rem;
    top: 0;
    right: 0px;

    visibility: hidden;
    opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, 32);
    transition: ${theme.transition.all};

    &.show {
      visibility: visible;
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
`

export default GlobalStyles

// ___________________________________________________________________
