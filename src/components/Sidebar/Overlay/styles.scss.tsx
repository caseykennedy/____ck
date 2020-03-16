// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { readableColor, lighten } from 'polished'

// Theme
import theme from '../../../../config/theme'

// Elements
import { Box, AnimatedFlex, Flex } from '../../../elements'

// Styles
import { Rotate } from '../../../styles/transitions'

// Begin Styles
// ___________________________________________________________________

export const Overlay = styled.div`
  &.nav-bg {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    position: fixed;
    width: 40vw;
    height: 100%;
    top: 0;
    right: 40vw;
    bottom: 0;
    /* left: 0; */

    background: ${theme.colors.black};
    padding: ${theme.space[3]};
    z-index: 20;

    visibility: hidden;
    opacity: 1;

    transition: ${theme.transition.all};

    &.nav-bg--open {
      visibility: visible;
      opacity: 1;
      right: 0;
    }
  }
`

// ___________________________________________________________________ Styles
