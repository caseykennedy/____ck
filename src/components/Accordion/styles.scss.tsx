// Sidebar Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

import Icon from '../Icons'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
// ___________________________________________________________________

// export const AccordionContainer = styled.div<{ chevronColor: string }>`

export const AccordionContainer = styled.div`
  width: 100%;
  position: relative;
`

export const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;

  .rotate {
    transform: rotate(45deg);
  }
`

export const AccordionToggle = styled.button<{ colorActive: string, color: string }>`
  align-items: flex-end;
  background: transparent;
  color: ${p => p.color};
  cursor: pointer;
  display: flex;
  border: none;
  outline: none;
  padding: ${theme.space[2]} 0;
  transition: background-color 0.6s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &.active {
    color: ${p => p.colorActive};
  }
`

export const AccordionContent = styled(Box)<{ borderColor: string }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  border-bottom: 6px solid ${p => p.borderColor};
`

export const Carat = styled(Icon)<{ chevronColor: string }>`
  margin-left: auto;
  transition: transform 0.3s ease;
  transform: rotate(-45deg);

  svg {
    fill: ${p => p.chevronColor};
  }
`

// ___________________________________________________________________ Styles
