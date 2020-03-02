// Project Grid styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
// ___________________________________________________________________

export const ProjectGrid = styled(Box)`
  .project-grid__item {
    &:nth-child(even) {
      /* margin-top: ${theme.space[7]}; */
    }

    a {
      display: block;
      margin-bottom: ${theme.space[6]};

      img {
        transition: ${theme.transition.all};
        transform: scale(1);
      }

      .project-services {
        position: absolute;

        visibility: hidden;
        opacity: 0;
        transform: ${theme.transform.matrix.from};

        transition: ${theme.transition.all};
      }
    }

    &:hover {
      a .project-services {
        visibility: visible;
        opacity: 1;
        transform: ${theme.transform.matrix.to};
      }
    }

    /* a {
      display: block;
      transform: scale(1);
        transition: all .2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }

      img {
        
    } */
  }
`

export const Tags = styled(Box)`
  span {
    transition: ${theme.transition.all};

    position: absolute;

    visibility: hidden;
    opacity: 0;
    transform: ${theme.transform.matrix.from};
  }

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
      transform: ${theme.transform.matrix.to};
    }
  }
`

// ___________________________________________________________________ Styles
