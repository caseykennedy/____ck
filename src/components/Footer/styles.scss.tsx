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

// ___________________________________________________________________ Styles
