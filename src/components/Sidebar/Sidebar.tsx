// Sidebar:
//

// ___________________________________________________________________

import React, { useState } from 'react'

import { useSpring, config } from 'react-spring'
import { Scrambler } from 'react-text-scrambler'

import useScrollWatch from '../../hooks/useScrollWatch'

import NavLinks from './NavLinks'
import Overlay from './Overlay'
import Icon from '../Icons'

import { Heading, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type SidebarShape = {
  mainRef: React.RefObject<HTMLDivElement>
  navData: {
    node: {
      name: string
      link: string
    }
  }[]
}

// ___________________________________________________________________

const Sidebar: React.FC<SidebarShape> = ({ navData, mainRef }) => {
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
        id="drawer-root"
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
          <S.Nav>
            <S.Toggle
              onClick={toggleModal}
              className="t--link  js-hover"
              aria-label="toggle menu"
            >
              <Scrambler
                text={!isNavOpen ? 'INFO' : 'CLOSE'}
                characters={'●○'}
                duration={500}
                renderIn={500}
                changeFrom={'hehe'}
              />
            </S.Toggle>
            <Text
              as="span"
              fontSize={3}
              className={`${isNavOpen ? 'nav-bg--open' : ''}`}
            >
              ○
            </Text>
          </S.Nav>
          <S.Arrow>
            <Icon name="nextArrow" color="black" />
          </S.Arrow>
        </S.SidebarInner>
      </S.Sidebar>
    </>
  )
}

export default Sidebar

// ___________________________________________________________________
