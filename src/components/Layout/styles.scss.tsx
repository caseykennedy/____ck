// Layout Styles:

// ___________________________________________________________________

// Libraries
import styled from 'styled-components'
import { animated } from 'react-spring'

// Theme
import theme from '../../../config/theme'

// Elements
import { AnimatedBox } from '../../elements'

// Begin Styles
// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media ${theme.mq.medium} {
    flex-direction: row;
  }
`

export const Main = styled(animated.main)`
  max-height: 100vh;
  margin-bottom: 0rem;
  /* min-width: 0; slick-slider overflow fix */

  width: ${theme.siteWidth};

  /* @media ${theme.mq.medium} {
    width: calc(100vw - ${theme.sidebarWidth.collapsed});
  } */
`

// ___________________________________________________________________ Styles
