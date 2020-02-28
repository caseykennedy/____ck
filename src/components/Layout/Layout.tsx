// Layout:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useEffect, useRef } from 'react'

import { ThemeProvider } from 'styled-components'
import { useSpring } from 'react-spring'

import useNavigation from '../../hooks/useNavigation'

import Header from '../Header'
import Footer from '../Footer'
import Cursor from '../Cursor'

import theme from '../../../config/theme'

import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
}

// Parallax
// https://dev.to/robbertvancaem/
// https://www.pluralsight.com/guides/using-react-refs-typescript
// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calcTranslate = (o: any) => `translateY(${o * -0.3}px)`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Navigation data hook
  const navData = useNavigation()

  // Ref <main> to lock body on scroll
  const mainRef = useRef<HTMLDivElement>(null)

  // Parallax scroll
  const scrollRef = useRef<HTMLDivElement>(null)
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const handleScroll = () => {
    // Need to figure this type error out
    const posY = scrollRef.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY

    set({ offset })
  }

  useEffect(() => {
    // Parallax scroll
    window.addEventListener('scroll', handleScroll)

    // Remove event listener on cleanup
    return () => {
      // Parallax scroll
      window.removeEventListener('scroll', handleScroll)
    }
  })

  // eslint-disable-next-line no-console
  console.log(`%c (+)(—) core37 `, `background: #000000; color: #ffffff`)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor />
      <S.Wrapper ref={scrollRef}>
        <Header mainRef={mainRef} navData={navData} />
        <S.Main
          ref={mainRef}
          // style={{
          //   transform: offset.interpolate(calcTranslate)
          // }}
        >
          {children}
          {/* <Footer navData={navData} /> */}
        </S.Main>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout

// ___________________________________________________________________
