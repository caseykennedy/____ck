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

  background: ${theme.colors.background};
  /* border-left: ${theme.border}; */

  transition: all 0.333s ease-in-out;
  z-index: 20;

  &.expanded {
    width: ${theme.sidebarWidth.expanded};
    opacity: 0.94;
    box-shadow: 6rem 0rem 8rem white;
  }
`

export const SidebarInner = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

export const Nav = styled.nav`
  align-self: flex-start;
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

export const Arrow = styled.div`
  svg {
    transform: rotate(90deg);
    width: 20vw;
  }
`

export const Toggle = styled.div`
  font-size: calc(${theme.fontSizes[3]});
  font-weight: 400;

  &.nav-bg--open {
    color: ${theme.colors.background};
  }

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
