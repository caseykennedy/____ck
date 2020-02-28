// Layout Styles:

// ___________________________________________________________________

// Libraries
import styled from 'styled-components'
import { animated } from 'react-spring'
import { lighten } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { AnimatedBox } from '../../elements'

// Begin Styles
// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media ${theme.mq.medium} {
    flex-direction: row;
  }
`

export const Main = styled(animated.main)`
  max-height: 100vh;
  margin-bottom: 0rem;
  /* min-width: 0; slick-slider overflow fix */

  width: 100%;

  @media ${theme.mq.medium} {
    width: calc(100vw - ${theme.sidebarWidth.collapsed});
  }
`

export const Footer = styled.footer<{ color?: string[] }>`
  position: fixed;
  width: ${theme.sidebarWidth.collapsed};
  bottom: 0;
  background: ${theme.colors.primary};
  color: ${lighten(0.3, `${theme.colors.primary}`)};

  a {
    color: ${lighten(0.3, `${theme.colors.primary}`)};
    text-decoration: none;

    &:hover {
      color: ${lighten(0.6, `${theme.colors.primary}`)};
    }
  }

  .ico {
    margin-right: ${theme.space[2]};
    width: ${theme.space[4]};
    cursor: pointer;

    svg {
      fill: ${theme.colors.white};

      &:hover {
        fill: ${lighten(0.3, `${theme.colors.primary}`)};
      }
    }
  }

  @media (max-width: ${theme.breakpoints[4]}) {
    width: ${theme.sidebarWidth.normal};
  }

  @media (max-width: ${theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }
`

// ___________________________________________________________________ Styles
