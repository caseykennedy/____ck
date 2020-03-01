// Home page

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { useSpring, config } from 'react-spring'
import { Cycler, Scrambler } from 'react-text-scrambler'

import useContentYaml from '../hooks/useContentYaml'
import useProjectYaml from '../hooks/useProjectYaml'

import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import ImgMatch from '../components/ImgMatch'
import ProjectSlider from '../components/ProjectSlider'
import ImageHover from '../components/ImageHover'

import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

import theme from '../../config/theme'

import { ProjectNodeShape } from '../types'

// ___________________________________________________________________

type PageShape = {
  pageContext: {
    intro: string
    about: {
      cta: string
      link: string
      detail: string
      title: string
    }
    contact: {
      cta: string
      detail: string
    }
    dribbble: {
      title: string
      years: string
    }
    posters: {
      title: string
      years: string
    }
    logofolio: {
      title: string
      years: string
    }
    projects: {
      title: string
    }
    testimonial: {
      author: string
      company: string
      quote: string
    }
  }
  projectData: { node: ProjectNodeShape }[]
}

const IndexPageComp: React.FC<PageShape> = ({ pageContext, projectData }) => {
  // Scrambler params
  const scrambleStrings = [
    'friends',
    'clients',
    'peeps',
    'collaborators',
    'alchemists',
    'explorers'
  ]
  const DelayedFade = useSpring({
    config: config.molasses,
    delay: 300,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <>
      <Section pt={3} pb={5}>
        <Flex
          justifyContent="space-between"
          flexDirection="column"
          style={{ minHeight: '100vh' }}
        >
          <Heading as="h2">
            <Scrambler
              text={'Hello friends 🖖'}
              characters={'+-'}
              duration={1000}
              renderIn={1000}
              changeFrom={'abcdefghijk'}
            />
          </Heading>
          <Heading as="h2">
            My new website is getting a footprint gas pedal installed, so I
            stole this heap...
          </Heading>
          <Heading as="h1" fontSize={[3, 4, 5]}>
            If you need a blazing fast website designed <em>and</em> developed
            with all the bells and whistles (react, gatsby, graphQL, headless
            CMS, animations, SEO, accessibility), a high-conversion e-commerce
            experience (shopify, stripe, CRM), or a shiny new visual identity
            (logo, packaging, implementations), then I’m your man.
          </Heading>
          {/* <Text as="p" fontSize={[3, 4, 5]}>
            I offer a wide range of services, but visual design, developing
            websites, and building cutting-edge e-commerce systems is my
            JAMstack :)
          </Text> */}
          <Flex flexWrap="wrap" justifyContent="space-between" mb={6}>
            <Text as="p" fontSize={[3, 4, 5]}>
              <a href="mailto:me@caseykennedy.me" className="t--link js-hover">
                Email me
              </a>{' '}
              or find me on:
            </Text>
          </Flex>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Text as="p" fontSize={[3, 4, 5]} mb={0}>
              <a href="//dribbble.com/caseykennedy" target="_blank" className="t--link js-hover">
                dribbble
              </a>
            </Text>
            <Text as="p" fontSize={[3, 4, 5]} mb={0}>
              <a href="//github.com/caseykennedy" target="_blank" className="t--link js-hover">
                github
              </a>
            </Text>
            <Text as="p" fontSize={[3, 4, 5]} mb={0}>
              <a href="//linkedin.com/in/casey-kennedy-0b123727" target="_blank" className="t--link js-hover">
                linkedin
              </a>
            </Text>
          </Flex>
        </Flex>
      </Section>

      {/* <Section width={1/2} bg="antiquewhite">
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 1 / 3]} pr={6} mb={4}>
              <Text as="p">In the meantime, please find me here:</Text>
            </Box>
            <Box width={[1, 1, 2 / 3]}>
              <Text as="ul">
                <li>me@caseykennedy.me</li>
                <li>dribbble</li>
                <li>github</li>
                <li>linkedin</li>
              </Text>
            </Box>
          </Flex>
        </Section> */}
    </>
  )
}

const IndexPage = () => {
  const data = useContentYaml()
  const pageContext = data.edges[0].node.index
  const projectData = useProjectYaml()

  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <IndexPageComp pageContext={pageContext} projectData={projectData} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

// ___________________________________________________________________
