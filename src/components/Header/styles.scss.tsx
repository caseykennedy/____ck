// Header Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor, lighten } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../../elements'

// Styles
import { Rotate } from '../../styles/transitions'

// Begin Styles
// ___________________________________________________________________

// export const Header = styled(Box)<{ bg: string }>`
export const Header = styled(AnimatedFlex)`
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  position: fixed;
  left: 0;
  width: ${theme.siteWidth};
  padding: ${theme.space[3]};
  border-bottom: ${theme.border};
  background: ${theme.colors.background};

  transition: all 0.333s ease-in-out;
  z-index: 30;
`

export const HeaderInner = styled(Flex)`
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;

  position: relative;
  /* z-index: 31; */
`

export const Logo = styled(Box)`
  position: relative;

  a {
    display: flex;
    color: ${theme.colors.text};
  }
`

// ___________________________________________________________________
