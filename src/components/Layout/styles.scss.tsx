// Layout Styles:

// ___________________________________________________________________

// Libraries
import styled from 'styled-components'
import { animated } from 'react-spring'

// Theme
import theme from '../../../config/theme'

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
  width: ${theme.siteWidth};
`

// ___________________________________________________________________ Styles
