// Section:
// Global Section component

// ___________________________________________________________________

// Core
import * as React from 'react'

// Components
import { Box, Flex } from '../../elements'
import styled from 'styled-components'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

const Section: React.FC<Props> = ({ children, bg, color, pt, pr, pb, id }) => (
  <Box as="section" bg={bg} color={color} pt={pt} pb={pb} id={id}>
    <Box
      width={1}
      // maxWidth={theme.maxWidth}
      pr={pr}
      pl={[3, 3, 0]}
      m="0 auto"
    >
      {children}
    </Box>
  </Box>
)

export default Section

//
// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  bg?: string
  color?: string
  pt?: number | number[] | string
  pr?: number | number[] | string
  pb?: number | number[] | string
  id?: string
}

const defaultProps = { pt: [6, 7, 8], pr: theme.gutter, pb: [6, 7, 8] }

Section.defaultProps = defaultProps

// ___________________________________________________________________
