// ImageHover Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const ImageHoverLink = styled(Link)`
  display: block;
  margin-bottom: ${theme.space[6]};

  .subtitle {
    position: absolute;

    visibility: hidden;
    opacity: 0;
    transform: ${theme.transform.matrix.from};

    transition: ${theme.transition.all};
  }

  &:hover {
    .subtitle {
      visibility: visible;
      opacity: 1;
      transform: ${theme.transform.matrix.to};
    }
  }
`

// ___________________________________________________________________
