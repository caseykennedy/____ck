// Sidebar:
// 

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import { useSpring, config } from 'react-spring'
import { Scrambler } from 'react-text-scrambler'

import useScrollWatch from '../../hooks/useScrollWatch'

import Logo from '../logo'
import NavLinks from './NavLinks'
import Overlay from './Overlay'

import { AnimatedBox, Text } from '../../elements'

import theme from '../../../config/theme'

import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  mainRef: React.RefObject<HTMLDivElement>
  navData: {
    node: {
      name: string
      link: string
    }
  }[]
}

interface CallbackTypes {
  callbackData: any
  previousScrollTop: number
  currentScrollTop: number
}

// ___________________________________________________________________

const Sidebar: React.FC<Props> = ({ navData, mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  const DelayedFade = useSpring({
    config: config.molasses,
    delay: 600,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })

  return (
    <>
      <Overlay
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        <NavLinks
          navData={navData}
          handleExit={() => setNavOpen(false)}
          isNavOpen={isNavOpen}
        />
      </Overlay>
      <S.Sidebar as="aside" style={DelayedFade}>
        <S.SidebarInner>
          {/* <S.Logo>
            <Link to="/" className="js-hover" aria-label="core37, back to home">
              <Text>
                ck
              </Text>
            </Link>
          </S.Logo> */}
          <S.Nav>
            <S.Toggle
              onClick={toggleModal}
              className="t--link  js-hover"
              aria-label="toggle menu"
            >
              <Scrambler
                text={!isNavOpen ? 'INFO' : 'CLOSE'}
                characters={'+-'}
                duration={500}
                renderIn={500}
                changeFrom={'+--'}
              />
            </S.Toggle>
            <Text fontSize={3}>○</Text>
          </S.Nav>
        </S.SidebarInner>
      </S.Sidebar>
    </>
  )
}

export default Sidebar

// ___________________________________________________________________
