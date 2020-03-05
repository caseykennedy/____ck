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
  width: 24px;
  height: 24px;

  background-color: ${theme.colors.black};
  /* border: 6px solid ${theme.colors.primary}; */
  border-radius: 50%;

  transform: translate3d(var(--mouse-x), var(--mouse-y), 0);
  /* transition: transform 80ms ease-out; */

  visibility: hidden;

  @media ${theme.mq.small} {
    visibility: visible;
  }
`

export const CursorOuter = styled.span`
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 10000;

  position: fixed;
  top: 0;
  left: 0%;

  background-color: ${theme.colors.primary};
  border: 6px solid ${theme.colors.primary};
  border-radius: 50%;
  width: 20px;
  height: 20px;

  transform: translate3d(var(--mouse-x), var(--mouse-y), 0);
  transition: width 0.222s ease, height 0.222s ease, transform 600ms ease-out, border-color 0.222s ease;

  visibility: hidden;

  @media ${theme.mq.small} {
    visibility: visible;
  }

  &.state--hover {
    border-color: ${theme.colors.secondary};
    width: 320px;
    height: 320px;
  }
`

// ___________________________________________________________________ Styles
