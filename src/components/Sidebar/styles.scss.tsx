// Sidebar Styles:

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

// export const Sidebar = styled(Box)<{ bg: string }>`
export const Sidebar = styled(AnimatedFlex)`
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  position: fixed;
  right: 0;
  /* width: ${theme.siteWidth}; */
  width: ${theme.sidebarWidth.expanded};

  height: 100vh;
  padding: ${theme.space[3]};
  border-left: ${theme.border};

  transition: all 0.333s ease-in-out;
  z-index: 31;

  &.expanded {
    width: ${theme.sidebarWidth.expanded};
    opacity: 0.94;
    box-shadow: 6rem 0rem 8rem white;
  }
`

export const SidebarInner = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled(Box)`
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  position: relative;

  /* .symbol {
    animation: ${Rotate} 20s infinite linear;
  } */

  a {
    display: flex;

    svg {
      mix-blend-mode: difference;
      fill: ${theme.colors.white};
      margin-right: ${theme.space[2]};
      position: relative;
      top: 3px;

      @media ${theme.mq.medium} {
        height: initial;
        width: initial;
      }
    }
  }
`

export const Nav = styled.nav`
  display: inherit;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: ${theme.border};
  padding: 0 ${theme.space[3]} ${theme.space[3]} ${theme.space[3]};
  margin: 0 -${theme.space[3]};

  width: calc(100% + ${theme.space[5]});

  a {
    text-decoration: none;
    font-size: ${theme.fontSizes[2]};
    line-height: 1.5;

    width: 100%;

    &:hover,
    &:focus,
    &.navlink-active {
      color: ${lighten(0.3, `${theme.colors.primary}`)};
    }
  }
`

export const Toggle = styled.div`
  font-size: calc(${theme.fontSizes[3]});
  font-weight: 400;

  /* &::after {
    content: '';
    position: relative;
    background: transparent;
  } */

  /* @media ${theme.mq.medium} {
    transform-origin: 5px 5px;
    width: ${theme.space[6]};
  } */
`

// ___________________________________________________________________
