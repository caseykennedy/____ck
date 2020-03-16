// Layout:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useRef } from 'react'

import { ThemeProvider } from 'styled-components'

import Cursor from '../Cursor'

import theme from '../../../config/theme'

import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body on scroll
  const mainRef = useRef<HTMLDivElement>(null)

  // Parallax scroll
  const scrollRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line no-console
  console.log(`%c (+)(—) core37 `, `background: #000000; color: #ffffff`)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor />
      <S.Wrapper ref={scrollRef}>
        <S.Main
          ref={mainRef}
        >
          {children}
        </S.Main>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout

// ___________________________________________________________________
