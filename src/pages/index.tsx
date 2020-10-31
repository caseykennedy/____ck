// Home page

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { useSpring, config } from 'react-spring'

import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import DribbbleGrid from '../components/DribbbleGrid'
import ImgMatch from '../components/ImgMatch'

import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

import theme from '../../config/theme'

import { ProjectNodeShape } from '../types'

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
            Helping brands define and develop visual identity systems ● and
            cutting-edge digital ○ experiences.
          </Heading>
        </Flex>
      </Section>
      <Section bg="black" color="background" pt={2} pb={2}>
        <Text as="p" fontSize={2}>
          Thank you for visiting ☀️ currently building a fresh new website with an updated
          portfolio 🌙 please stay tuned ✌️
        </Text>
      </Section>
      <Section>
        <Heading as="h4">○ Mission</Heading>
        <Box width={[1]}>
          <Heading as="h3">
            I believe that a well defined strategy wins every time ● My process
            includes 3 core phases: research, definition and execution ○ Every
            project is approached with a clear and open mindset with the
            intention to add value ● Always out of the box, but never out of touch.
          </Heading>
          <Heading as="h3">
            I’ve been working in design and ● web development for over 12 years
            and as an independent consultant for the last 6 years. Collaborating
            with startups, established brands and anyone with a great idea ●○
            advising on visual identity, technical strategy and digital tooling.
          </Heading>
          <Heading as="h3">
            I think of clients as partners and don't typically ● get hired for
            one-off projects. My aim is to collaboerate with my partners and ○
            over time, build lasting brands and digital experiences.
          </Heading>
        </Box>
      </Section>
      <Section>
        <Heading as="h4" mb={3}>
          ○ dribbbles
        </Heading>
        <Box>
          <DribbbleGrid />
        </Box>
      </Section>
      <Section>
        <Heading as="h4">○ How can I help?</Heading>
        <Box width={[1]}>
          <Heading as="h3">
            If you need a blazing fast website designed <em>and</em> developed
            with all the ○ bells and whistles (react, gatsby, headless,
            serverless, animations, SEO, accessibility) ● a high-conversion
            e-commerce experience (shopify, stripe, CRM), or a shiny new visual
            identity (logo, packaging, implementations), then I’m your man.
          </Heading>
          <Text as="p">
            For larger projects ● I work with a collective over at ○●core37. We
            offer a wide-range of brand and digital services utilizing our
            network of peers ○ to get the job done fast and right.
          </Text>
        </Box>
      </Section>
    </>
  )
}

const IndexPage = () => {
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
        <IndexPageComp />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage
