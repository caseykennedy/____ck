// Home page

// ___________________________________________________________________

import React from 'react'

import { useSpring, config } from 'react-spring'
import { Scrambler } from 'react-text-scrambler'

import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'

import { AnimatedBox, Flex, Heading, Text } from '../elements'

import theme from '../../config/theme'

// ___________________________________________________________________

const IndexPageComp: React.FC = () => {
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
            Currently working on a fresh new website that will be live soon...
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
                Email
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
    </>
  )
}

const IndexPage = () => {
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
        <IndexPageComp />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

// ___________________________________________________________________
