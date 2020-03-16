// NavLinks:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { useTransition } from 'react-spring'
import { Scrambler } from 'react-text-scrambler'

import { AnimatedBox, Text } from '../../../elements'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type LinkProps = {
  item: any
  transition: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  navData: {
    node: {
      name: string
      link: string
    }
  }[]
  handleExit: () => any
  isNavOpen: boolean
}

// ___________________________________________________________________

const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
  return (
    <AnimatedBox width={1} my={6} onClick={handleExitOnClick} style={transition}>
      <Text color="white" fontSize={5} fontWeight={400}>
        Hello
      </Text>
    </AnimatedBox>
  )
}

const NavLinks: React.FC<NavLinksProps> = ({
  navData,
  handleExit,
  isNavOpen
}) => {
  const navTransitions = useTransition(
    isNavOpen ? navData : [],
    item => item.node.name,
    {
      from: {
        opacity: 0,
        transform: 'matrix(1, 0, 0, 1, 32, 32'
      },
      enter: {
        opacity: 1,
        transform: 'matrix(1, 0, 0, 1, 0, 0)'
      },
      leave: {
        opacity: 0
      },
      trail: 200,
      unique: true
    }
  )
  return (
    <S.NavLinks>
      {navTransitions.map(({ item, key, props }) => (
        <NavLink
          key={key}
          transition={props}
          handleExitOnClick={() => handleExit()}
          item={item}
        />
      ))}
    </S.NavLinks>
  )
}

export default NavLinks

// ___________________________________________________________________
