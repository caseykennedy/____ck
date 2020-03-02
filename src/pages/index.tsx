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
import ProjectGrid from '../components/ProjectGrid'
import DribbbleGrid from '../components/DribbbleGrid'
import ImgMatch from '../components/ImgMatch'
import ImageHover from '../components/ImageHover'
import Divider from '../elements/Divider'

import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

import theme from '../../config/theme'

import { ProjectNodeShape } from '../types'

// ___________________________________________________________________

type PageShape = {
  projectData: { node: ProjectNodeShape }[]
}

const IndexPageComp: React.FC<PageShape> = ({ projectData }) => {
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
          width={'50vw'}
        >
          {/* <Heading as="h1">
            <Scrambler
              text={'Hello visitor'}
              characters={'+-'}
              duration={1000}
              renderIn={1000}
              changeFrom={'abcdefghijk'}
            />
          </Heading> */}
          <Heading as="h3">
            I run a small design and development practice helping brands define
            and develop visual identity systems and cutting-edge digital
            experiences.
          </Heading>
          <Text as="p">
            I’ve been working in design and web development for over 11 years
            and as an independent consultant for the last 5 years. Collaborating
            with startups, established brands and anyone with a great idea —
            advising on visual identity, technical strategy and digital tooling.
          </Text>
          {/* <Text as="p">
            I think of clients as patners and don't typically get hired for
            one-off projects. My aim is to collaboerate with my partners and,
            over time, build lasting brands and digital experiences.
          </Text>
          <Text as="p">
            I believe that a well defined strategy wins every time. My process
            includes 3 core phases; research, definition and implementation.
            Every project is approached with a clear and open mindset with the
            intention to add value.
          </Text>
          <Text as="p">
            Finding balance among simplicity, form and function in my work and
            sharing gratitude with those I collaborate with is my goal.
          </Text> */}
        </Flex>
      </Section>
      <Section>
        <Box width={[1 / 2]}>
          <ProjectGrid projectData={projectData} />
        </Box>
      </Section>
      <Section>
        <Box width={[1]}>
          <DribbbleGrid />
        </Box>
      </Section>
      <Section>
        <Heading as="h3">
          If you need a blazing fast website designed <em>and</em> developed
          with all the bells and whistles (react, gatsby, graphQL, headless CMS,
          animations, SEO, accessibility), a high-conversion e-commerce
          experience (shopify, stripe, CRM), or a shiny new visual identity
          (logo, packaging, implementations), then I’m your man.
        </Heading>
        <Text fontSize={4} mt={6}>
          Contact{' '}
          <a href="mailto:me@caseykennedy.me" className="js-hover">
            me@caseykennedy.me
          </a>
        </Text>
      </Section>
      <Section pt={0}>
        <Flex>
          <Box width={[1 / 6]} mr={3}>
            <Text color="tertiary" mb={5}>
              Experience
            </Text>
            <Text mb={2}>Simple Media</Text>
            <Text mb={6}>Medium Advertising</Text>
            <Text mb={2}>Atlantis Casino Resort</Text>
            <Text mb={2}>noip</Text>
            <Text mb={5}>Spheric Agency</Text>
            <Text mb={2}>core37</Text>
          </Box>
          <Box width={[1 / 6]} mr={3}>
            <Text color="tertiary" mb={5}>
              Capabilities
            </Text>
            <Text mb={2}>logo identity</Text>
            <Text mb={3}>brand guidelines</Text>
            <Text mb={2}>packaging</Text>
            <Text mb={4}>implementations</Text>
            <Text mb={2}>sound design</Text>
            <Text mb={6}>wayfinding</Text>
            <Text mb={4}>visual design</Text>
            <Text mb={2}>UI &amp; UX</Text>
            <Text mb={4}>prototyping</Text>
            <Text mb={2}>web development</Text>
            <Text mb={2}>Design systems</Text>
            <Text mb={5}>ecommerce</Text>
            <Text mb={2}>ongoing support</Text>
          </Box>
          <Box width={[1 / 6]} mr={3}>
            <Text color="tertiary" mb={5}>
              Tech
            </Text>
            <Text mb={2}>Javascript</Text>
            <Text mb={5}>HTML+CSS</Text>
            <Text mb={2}>React</Text>
            <Text mb={2}>Gatsby / Next</Text>
            <Text mb={6}>Typescript</Text>
            <Text mb={4}>Shopify, Stripe</Text>
            <Text mb={2}>Wordpress</Text>
          </Box>
          {/* <Box width={[1 / 6]} mr={3}>
            <Text color="tertiary" mb={5}>
              Enquiries
            </Text>
            <Text mb={6}>me@caseykennedy.me</Text>
          </Box> */}
        </Flex>
      </Section>
      {/* <Section bg="#113034"></Section>
      <Section bg="goldenrod"></Section> */}
    </>
  )
}

const IndexPage = () => {
  const data = useContentYaml()
  // const pageContext = data.edges[0].node.index
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
        <IndexPageComp projectData={projectData} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

// ___________________________________________________________________
