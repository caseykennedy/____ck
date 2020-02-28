// Footer styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
// ___________________________________________________________________

export const Footer = styled(Box)``

export const Social = styled(Box)`
  flex-grow: 2;
  text-align: left;

  span a {
    color: ${theme.colors.tertiary};
    display: inline;

    &:hover {
      color: ${theme.colors.text};
    }
  }
`

export const Location = styled(Box)`
  flex-grow: 1;
  width: 100%;
  margin-bottom: ${theme.space[5]};

  @media ${theme.mq.medium} {
    width: initial;
    margin-bottom: 0;
  }

  a {
    color: ${theme.colors.tertiary};

    &:hover {
      color: ${theme.colors.text};
    }
  }
`

export const Links = styled(Flex)`
  a {
    color: ${theme.colors.text};

    /* &:hover {
      color: ${theme.colors.tertiary};
    } */
  }
`

// ___________________________________________________________________ Styles
