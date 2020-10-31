// DribbbleGrid:

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Grid, Cell } from 'styled-css-grid'

import { AnimatedBox } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type QueryShape = {
  content: {
    edges: {
      node: {
        id: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }
    }[]
  }
}

type DribShape = {
  item: {
    childImageSharp: {
      fluid: {
        aspectRatio: number
        src: string
        srcSet: string
        sizes: string
        base64: string
        tracedSVG: string
        srcWebp: string
        srcSetWebp: string
      }
    }
  }
}

// ___________________________________________________________________

const DribItem = ({ item }: DribShape) => {
  return (
    <AnimatedBox>
      <Img
        alt="Select Dribbble shots designed by Casey Kennedy"
        key={item.childImageSharp.fluid.src}
        fluid={item.childImageSharp.fluid}
      />
    </AnimatedBox>
  )
}

const DribbbleGrid: React.FC = () => {
  const data: QueryShape = useStaticQuery(graphql`
    query DribbbleShots {
      content: allFile(filter: { relativeDirectory: { eq: "dribbbles" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 85, maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const dribbbles = data.content.edges
  return (
    <S.DribbbleGrid width={1}>
      <Grid columns={3} gap={theme.grid.gap}>
        {dribbbles.map(({ node: drib }) => (
          <Cell key={drib.id}>
            <DribItem item={drib} />
          </Cell>
        ))}
      </Grid>
    </S.DribbbleGrid>
  )
}

export default DribbbleGrid

// ___________________________________________________________________
