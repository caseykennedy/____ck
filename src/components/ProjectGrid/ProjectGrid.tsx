// ProjectGrid:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Grid, Cell } from 'styled-css-grid'
import { useSpring } from 'react-spring'

import ImageHover from '../ImageHover'
import { Box, AnimatedBox, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

import { ProjectNodeShape } from '../../types'

// ___________________________________________________________________

type ProjectShape = {
  projectData: { node: ProjectNodeShape }[]
}

type SlideShape = {
  slide: ProjectNodeShape
}

// ___________________________________________________________________

// Hover effect
const calc: (x: number, y: number) => number[] = (x, y) => [
  -(y - window.innerHeight / 2) / 90,
  (x - window.innerWidth / 2) / 20,
  1.1
]
const trans: (x: any, y: any, s: any) => string | undefined = (x, y, s) =>
  `scale(${s})`

const GridItem: React.FC<SlideShape> = ({ slide }) => {
  // Hover effect
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 800, friction: 100 }
  }))
  return (
    <Cell key={slide.id} className="project-grid__item">
      <Link to={slide.slug} className="js-hover">
        <AnimatedBox
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Img
            alt={slide.title_detail}
            key={slide.cover.childImageSharp.fluid.src}
            fluid={slide.cover.childImageSharp.fluid}
            backgroundColor="gray"
          />
        </AnimatedBox>
        <Box pt={3}>
          <Text as="p" fontSize={2} mb={0}>
            {slide.title}
          </Text>
          <Text
            as="p"
            fontSize={2}
            color="tertiary"
            className="project-services"
          >
            {slide.services}
          </Text>
        </Box>
      </Link>
      {/* <ImageHover
        title={slide.title}
        subTitle={slide.services}
        link={slide.slug}
        src={slide.cover.childImageSharp.fluid.src}
        altText={slide.title_detail}
      /> */}
    </Cell>
  )
}

const ProjectGrid: React.FC<ProjectShape> = ({ projectData }) => {
  return (
    <S.ProjectGrid width={1}>
      <Grid columns={2} gap="0">
        {projectData.map(({ node: slide }) => (
          <GridItem key={slide.id} slide={slide} />
        ))}
      </Grid>
    </S.ProjectGrid>
  )
}

export default ProjectGrid

// ___________________________________________________________________
