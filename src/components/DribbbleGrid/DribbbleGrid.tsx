// DribbbleGrid:

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { useInView } from 'react-intersection-observer'
import { useSpring, config } from 'react-spring'
import { Grid, Cell } from 'styled-css-grid'

import { Box, AnimatedBox, Text } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type QueryResult = {
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

type ManifestoItem = {
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

const DribItem = ({ item }: ManifestoItem) => {
  // Only show item when in view
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-180px 0px'
  })
  const manifestoSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1, 0, 52)'
  })
  return (
    <AnimatedBox>
      <Img
        alt="Dribbble random portfolio art"
        key={item.childImageSharp.fluid.src}
        fluid={item.childImageSharp.fluid}
      />
    </AnimatedBox>
  )
}

const DribbbleGrid: React.FC = () => {
  const data: QueryResult = useStaticQuery(graphql`
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
      <Grid columns={4} gap={0}>
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
