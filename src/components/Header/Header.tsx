// Header:
// Site Header with logo and navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { Scrambler } from 'react-text-scrambler'
import { Text, Heading } from '../../elements'
import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Header: React.FC = () => {
  return (
    <S.Header as="header">
      <S.HeaderInner>
        <S.Logo>
          <Link to="/" className="js-hover" aria-label="core37, back to home">
            <Heading as="h1" fontSize={[1, 2, 3]} mb={0}>
              <Scrambler
                text={'CASEY KENNEDY'}
                characters={'●○'}
                duration={500}
                renderIn={500}
                changeFrom={'abcdefghijk'}
              />
              <br />
              <Text fontSize={[1, 0]} mt={2}>
                <Scrambler
                  text={'designer, developer, digital alchemist'}
                  characters={'●○'}
                  duration={800}
                  renderIn={800}
                  changeFrom={'abcdefghijk/'}
                />
              </Text>
            </Heading>
          </Link>
        </S.Logo>
      </S.HeaderInner>
    </S.Header>
  )
}

export default Header

// ___________________________________________________________________
