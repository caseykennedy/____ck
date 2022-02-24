// Home page

// ___________________________________________________________________

import React from 'react'

import { useSpring, config } from 'react-spring'

import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import DribbbleGrid from '../components/DribbbleGrid'

import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'
import theme from '../../config/theme'

// ___________________________________________________________________

const IndexPageComp: React.FC = () => {
  return (
    <>
      <Section pt={0} pb={0}>
        <Flex
          flexDirection="column"
          justifyContent="flex-end"
          width={[1]}
          style={{ height: '100vh' }}
          pt={3}
          pb={3}
        >
          <Heading as="h2" fontSize={[4, 4, 5]}>
            Helping brands develop cutting-edge digital experiences.
          </Heading>
        </Flex>
      </Section>
      <Section bg="black" color="background" pt={2} pb={2}>
        <Text as="p" fontSize={2}>
          I've got a brand new website in the works—stay tuned ✌️
        </Text>
      </Section>
      <Section>
        <Heading as="h4">○ Mission</Heading>
        <Box width={[1]}>
          <Heading as="h3">
            I believe that a well defined strategy wins every time ↗ My process
            includes ➌ core phases: research, definition, and execution.
          </Heading>
          <Heading as="h3">
            Every project is approached with a clear and open mindset and
            intention to add value.
          </Heading>
          <Heading as="h3">
            Always out of the box □ but never out of touch.
          </Heading>
          <Heading as="h3">
            I’ve been practicing design and web development for over ➊➁ years
            and independently consulting for over ➏ years. Collaborating
            with startups, established brands and anyone with a great
            idea—advising on visual identity, technical strategy and digital
            tooling.
          </Heading>
          <Heading as="h3">
            My aim is to collaborate with my partners and, through time ∞, build
            lasting brands and digital experiences.
          </Heading>
        </Box>
      </Section>
      <Section bg="black" color="background">
        <Flex
          width={1}
          alignItems={['flex-start', 'flex-start', 'center']}
          flexDirection={['column', 'column', 'row']}
          justifyContent="space-between"
        >
          <Heading as="h4" mb={[0, 0, 3]}>
            ○ dribbbles
          </Heading>
          <Text mb={[3, 3, 0]}>
            <a href="https://dribbble.com/caseykennedy" target="_blank">
              follow me on dribbble
            </a>
          </Text>
        </Flex>
        <Box>
          <DribbbleGrid />
        </Box>
      </Section>
      <Section>
        <Heading as="h4">○ How can I help?</Heading>
        <Box width={[1]}>
          <Heading as="h3">
            If you need a blazing fast website designed <em>and</em> developed
            with all the bells and whistles (react, JAMstack, headless,
            serverless, animations, SEO, accessibility) ● a high-conversion
            e-commerce experience ● or a shiny new visual identity (logo,
            packaging, editorial) ● then I’m your man.
          </Heading>
        </Box>
      </Section>
    </>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <IndexPageComp />
    </Layout>
  )
}

export default IndexPage
