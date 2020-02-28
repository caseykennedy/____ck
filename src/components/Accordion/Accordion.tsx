// Accordion:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'

import { Box, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type AccordionProps = {
  children: React.ReactNode
  title: string
  color: string
  chevronColor: string
  borderColor: string
  colorActive: string
}

// ___________________________________________________________________

const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  chevronColor,
  color,
  borderColor,
  colorActive
}) => {
  // Accordion hooks
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion-icon')

  // Reference the accordion content height
  const content = useRef(null)

  // Toggle classes / height
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    )
  }
  return (
    <S.AccordionContainer>
      <S.AccordionInner>
        <S.AccordionToggle
          className={`${setActive}  js-hover`}
          onClick={toggleAccordion}
          color={color}
          colorActive={colorActive}
        >
          <Text fontSize={[3, 4, 4]}>
            {title}
          </Text>
          <S.Carat
            name="nextArrow"
            color="white"
            className={setRotate}
            chevronColor={chevronColor}
          />
        </S.AccordionToggle>
        <S.AccordionContent
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          borderColor={borderColor}
        >
          <Box pb={3}>{children}</Box>
        </S.AccordionContent>
      </S.AccordionInner>
    </S.AccordionContainer>
  )
}

export default Accordion

// ___________________________________________________________________