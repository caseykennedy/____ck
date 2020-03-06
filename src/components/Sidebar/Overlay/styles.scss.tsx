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
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: ${theme.colors.background};
    padding: ${theme.space[2]} ${theme.space[3]} ${theme.space[2]} ${theme.sidebarWidth.collapsed};
    z-index: 30;

    visibility: hidden;
    opacity: 0;
    transform: matrix(1, 0, 0, 1, 32, 32);

    transition: ${theme.transition.all};

    &.nav-bg--open {
      visibility: visible;
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
`

// ___________________________________________________________________ Styles
