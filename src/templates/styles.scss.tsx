// Sidebar Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'

// Components
import Section from '../components/Section'

// ___________________________________________________________________

export const NextProject = styled(Section)``

export const NextArrow = styled(Link)`
  overflow: hidden;
  &:hover {
    span {
      svg {
        /* transform: scale(3); */

        transform: translateX(1rem);
        transition: all .222s ease-in-out;  
      }
    }
  }
`

// export const Description = styled(animated.div)`
//   max-width: 960px;
//   letter-spacing: -0.003em;
//   --baseline-multiplier: 0.179;
//   --x-height-multiplier: 0.35;
//   line-height: 1.58;
// `

// ___________________________________________________________________ Styles
