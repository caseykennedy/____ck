// Cursor Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Cursor = styled.span`
  /* mix-blend-mode: difference; */
  pointer-events: none;
  z-index: 11000;

  position: fixed;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;

  background-color: black;
  border: 2px solid black;
  border-radius: 50%;

  transform: translate3d(var(--mouse-x), var(--mouse-y), 0);
  /* transition: transform 80ms ease-out; */
`

export const CursorOuter = styled.span`
  pointer-events: none;
  z-index: 11000;

  position: fixed;
  top: 4px;
  left: 4px;

  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  width: 30px;
  height: 30px;

  transform: translate3d(var(--mouse-x), var(--mouse-y), 0);
  transition: width 0.222s ease, height 0.222s ease, transform 80ms ease-out;

  &.state--hover {
    width: 100px;
    height: 100px;
  }
`

// ___________________________________________________________________ Styles
