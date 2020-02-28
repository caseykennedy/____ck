// Project Slider styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Styles
import { Rotate } from '../../styles/transitions'

// Begin Styles
// ___________________________________________________________________

export const Container = styled(Box)`
  /* overflow: hidden; */

  .slick-slider {
    .slick-arrow {
      &.slick-prev {
        display: none;
      }

      &.slick-next {
        top: initial;
        right: calc(${theme.space[3]} * 6);
        bottom: calc(${theme.space[3]} * 3);

        @media ${theme.mq.medium} {
          right: calc(${theme.space[3]} * 10);
        }

        &::before {
          display: none;
        }

        span {
          animation: ${Rotate} 20s infinite linear;

          svg {
            transform: scale(1);
            transition: ${theme.transition.all};
            /* stroke: white;
            stroke-width: 4px;
            stroke-dashoffset: 5px;
            stroke-dasharray: 5px;
            transition: all 20s ease; */

            @media ${theme.mq.medium} {
              transform: scale(2);
            }

            &:hover {
              cursor: none;
              transform: translateX(1rem) scale(1);
              /* stroke-dashoffset: 0px;
              stroke-dasharray: 300px; */

              @media ${theme.mq.medium} {
                transform: translateX(1rem) scale(2);
              }
            }
          }
        }
      }
    }

    .slide__details {
      opacity: 0;
      transform: ${theme.transform.matrix.from};
      transition: ${theme.transition.all};
    }

    .slick-slide {
      position: relative;

      /* &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 160px;
        background: black;
        z-index: 9999;
        bottom: 0;
        opacity: 0;
        transform: ${theme.transform.matrix.to};
        transition: all 0.777s ease-in-out;

        @media ${theme.mq.medium} {
          height: 220px;
          opacity: 1;
        }
      } */

      &.slick-current {
        &::after {
          opacity: 0;
          transform: ${theme.transform.matrix.from};
          z-index: -10;
        }

        .slide__details {
          opacity: 1;
          transform: ${theme.transform.matrix.to};
          position: relative;
          z-index: 99999;
        }
      }
    }
  }

  .btn-inner {
  }

  .slick-dots {
    li {
      margin: 0;

      &.slick-active {
        button {
          &:before {
            color: magenta;
          }
        }
      }

      button {
        &:before {
          color: magenta;
          font-size: 8px;
        }
      }
    }
  }
`

// ___________________________________________________________________ Styles
