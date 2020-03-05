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
    mix-blend-mode: difference;
    pointer-events: none;

    box-shadow: 2rem 1.5rem 1rem #777;
    position: absolute;
    z-index: 99999;
    top: -${theme.space[6]};
    left: 105%;

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
