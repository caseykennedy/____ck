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

type Props = {
  children: React.ReactNode
  bg?: string
  color?: string
  pt?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
  pb?: number | number[] | string
  id?: string
  width?: number | number[] | string | string[]
  height?: string
}

const Section: React.FC<Props> = ({
  children,
  bg,
  color,
  pt,
  pr,
  pl,
  pb,
  id,
  width,
  height
}) => (
  <Box
    as="section"
    bg={bg}
    color={color}
    pt={pt}
    pb={pb}
    id={id}
    width={width}
    style={{ height: `${height}` }}
  >
    <Box
      width={1}
      // maxWidth={theme.maxWidth}
      pr={pr}
      pl={pl}
      m="0 auto"
    >
      {children}
    </Box>
  </Box>
)

export default Section

//
// ___________________________________________________________________

const defaultProps = {
  pt: [3],
  pr: theme.gutter,
  pl: theme.gutter,
  pb: [3],
  width: 1,
  height: 'inherit'
}

Section.defaultProps = defaultProps

// ___________________________________________________________________
