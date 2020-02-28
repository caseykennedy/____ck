// Project template

// ___________________________________________________________________

import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { useTransition, useSpring, config, animated } from 'react-spring'
import { Grid, Cell } from 'styled-css-grid'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Section from '../components/Section'
import ImgMatch from '../components/ImgMatch'
import Icon from '../components/Icons'

import { Box, Flex, AnimatedBox, Heading, Text } from '../elements'

import theme from '../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  pageContext: {
    next: {
      slug: string
      title: string
      services: string
      id: string
      desc: string
      title_detail: string
      color: string
      category: string
    }
  }
  data: {
    project: {
      title_detail: string
      title: string
      color: string
      category: string
      desc: string
      industry: string
      services: string[]
      slug: string
      website: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      edges: {
        node: {
          name: string
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
}

// ___________________________________________________________________

const Project: React.FC<Props> = ({
  data: { project, images },
  pageContext
}) => {
  const next = pageContext.next
  // Page fade-up animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <Layout>
      <SEO
        pathname={project.slug}
        title={`${project.title_detail} | core37`}
        desc={project.desc}
        node={project.parent}
        banner={project.cover.childImageSharp.resize.src}
        individual={true}
      />
      <AnimatedBox style={pageAnimation}>
        <Section pt={2} pb={3}>
          <Box width={1}>
            <Heading as="h1">{project.desc}</Heading>
            <Heading as="h4">○ {project.title}</Heading>

            <Heading as="h4" textAlign="right">
              {project.category}
            </Heading>
          </Box>
        </Section>

        <Section pt={6} pb={0}>
          <Flex width={1} flexWrap="wrap">
            <Flex width={[1, 1, 1, 1 / 3]}>
              <Box width={1}>
                <Box>
                  <Text as="p" fontSize={2} mb={0}>
                    industry
                  </Text>
                  <Heading fontSize={[4, 5]} mb={0}>
                    {/* <Scrambler
                    text={'02'}
                    renderIn={500}
                    characters={'+-'}
                    changeFrom={'+-'}
                  /> */}
                    {project.industry}
                  </Heading>
                </Box>
                <Box my={6}>
                  <Text as="p" fontSize={2} mb={3}>
                    services
                  </Text>
                  <Box as="ul" fontSize={2} mb={0}>
                    {project.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </Box>
                </Box>
                {project.website && (
                  <Flex
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    mb={6}
                  >
                    <Icon name="arrowRightAngle" color="white" />
                    <Text
                      as="a"
                      href={`http://${project.website}`}
                      target="_blank"
                      fontSize={2}
                      ml={4}
                      mb="1px"
                      className="js-hover"
                    >
                      {project.website}
                    </Text>
                  </Flex>
                )}
              </Box>
            </Flex>
            {/* <Box width={[1, 1, 1, 2 / 3]}>
              <ImgMatch src="merida-meetup.jpg" altText="core37" />
            </Box> */}
          </Flex>
        </Section>

        <Section pt={1}>
          <Box width={1} pl={[0]}>
            <Grid columns={2} gap={theme.grid.gap}>
              {images.edges.map(image => (
                <Cell key={image.node.childImageSharp.fluid.src}>
                  <Img
                    alt={image.node.name}
                    fluid={image.node.childImageSharp.fluid}
                  />
                </Cell>
              ))}
            </Grid>
          </Box>
        </Section>
        {next && (
          <S.NextProject pt={4} pb={4}>
            <Flex
              width={1}
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <S.NextArrow to={next.slug} className="js-hover">
                <Text fontSize={4} mb={4}>
                  {next.title}
                </Text>
                <Icon name="nextArrow" color={theme.colors.white} />
              </S.NextArrow>
            </Flex>
          </S.NextProject>
        )}
      </AnimatedBox>
    </Layout>
  )
}

export default Project

// ___________________________________________________________________

export const query = graphql`
  query ProjectTemplate($slug: String!, $images: String!) {
    project: projectsYaml(slug: { eq: $slug }) {
      title_detail
      title
      color
      category
      services
      desc
      industry
      slug
      website
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(quality: 85, width: 1200) {
            src
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 85, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
