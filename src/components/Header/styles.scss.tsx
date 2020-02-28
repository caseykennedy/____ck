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

  /* border-right: 1px solid #333333; */
  height: ${theme.sidebarWidth.collapsed};
  position: relative;
  left: 0;
  width: 100%;
  padding: ${theme.space[3]};

  transition: all 0.777s ease-in-out;
  z-index: 31;

  /* background: ${p => p.bg}; */

  @media ${theme.mq.medium} {
    position: fixed;
    width: ${theme.sidebarWidth.collapsed};
    height: 100%;
  }

  &.expanded {
    width: ${theme.sidebarWidth.expanded};
    opacity: 0.94;
    box-shadow: 6rem 0rem 8rem white;
  }
`

export const HeaderInner = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media ${theme.mq.medium} {
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
  }
`

export const Logo = styled(Box)`
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  transform: rotate(0deg);

  @media ${theme.mq.medium} {
    transform: rotate(-90deg);
    transform-origin: 0 0;
    position: relative;
    top: calc(${theme.space[3]} * 6.8);
  }

  /* .symbol {
    animation: ${Rotate} 20s infinite linear;
  } */

  a {
    mix-blend-mode: difference;
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
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;

  @media ${theme.mq.medium} {
    display: inherit;
    width: 100%;
  }

  a {
    text-decoration: none;
    /* text-align: center; */
    /* color: ${p => readableColor(`${p.color}`)}; */
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
  color: ${theme.colors.white};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;

  &::after {
    content: '';
    position: relative;
    background: transparent;
  }

  @media ${theme.mq.medium} {
    transform: rotate(-90deg);
    transform-origin: 5px 5px;
    width: ${theme.space[6]};
  }
`

// ___________________________________________________________________
