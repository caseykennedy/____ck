// Header:
// Site Header with logo and navigation

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import { useSpring, config } from 'react-spring'
import { Scrambler } from 'react-text-scrambler'

import { Heading } from '../../elements'

import theme from '../../../config/theme'

import * as S from './styles.scss'

// ___________________________________________________________________

const Header: React.FC<Props> = () => {
  const DelayedFade = useSpring({
    config: config.molasses,
    delay: 600,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Header as="header" style={DelayedFade}>
      <S.HeaderInner>
        <S.Logo>
          <Link to="/" className="js-hover" aria-label="core37, back to home">
            <Heading as="h1" fontSize={3} mb={0}>
              <Scrambler
                text={'○ CASEY KENNEDY'}
                characters={'—*/+_^'}
                duration={500}
                renderIn={500}
                changeFrom={'abcdefghijk'}
              />
              <br />
              <Scrambler
                text={'designer, developer, digital alchemist'}
                characters={'+-'}
                duration={1000}
                renderIn={1000}
                changeFrom={'abcdefghijk'}
              />
            </Heading>
          </Link>
        </S.Logo>
      </S.HeaderInner>
    </S.Header>
  )
}

export default Header

// ___________________________________________________________________
