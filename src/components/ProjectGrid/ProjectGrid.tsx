// ProjectGrid:

// ___________________________________________________________________

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Grid, Cell } from 'styled-css-grid'
import { useSpring } from 'react-spring'

import useProjectYaml from '../../hooks/useProjectYaml'

import ImgMatch from '../ImgMatch'
import ImageHover from '../ImageHover'
import { Box, AnimatedBox, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

import { ProjectNodeShape } from '../../types'

// ___________________________________________________________________

type SlideShape = {
  project: ProjectNodeShape
}

// ___________________________________________________________________

const GridItem: React.FC<SlideShape> = ({ project }) => {
  // console.log('PROJECT')
  // console.log(project)

  return (
    <Cell className="project-grid__item">
      <Text as="p" fontSize={2}>
        {project.title}
      </Text>
      <Text as="p" fontSize={2}>
        {project.title_detail}
      </Text>
      <Text as="p" fontSize={2}>
        {project.slug}
      </Text>
      <Text as="p" fontSize={2}>
        {project.desc}
      </Text>
      <Text as="p" fontSize={2}>
        {project.industry}
      </Text>
      <Text as="p" fontSize={2}>
        {project.color}
      </Text>
      <Text as="p" fontSize={2}>
        {project.website}
      </Text>

      {/* {project.shots.map((shot, idx) => (
        <Text as="li" fontSize={[3, 3, 3, 4]} key={idx}>
          <span>→</span> {shot}
        </Text>
      ))} */}

      {/* <ImgMatch src={project.images} altText="project" /> */}
    </Cell>
  )
}

const ProjectGrid: React.FC = () => {
  const projectData = useProjectYaml()
  return (
    <S.ProjectGrid width={1}>
      <Grid columns={4} gap="3rem">
        {projectData.map(({ node: project }) => (
          <GridItem key={project.id} project={project} />
        ))}
      </Grid>
    </S.ProjectGrid>
  )
}

export default ProjectGrid

// ___________________________________________________________________
