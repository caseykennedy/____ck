// Home page

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { useSpring, config } from 'react-spring'
import { Cycler, Scrambler } from 'react-text-scrambler'

import useContentYaml from '../hooks/useContentYaml'
import useProjectYaml from '../hooks/useProjectYaml'
import useHover from '../hooks/useHover'

import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import ProjectGrid from '../components/ProjectGrid'
import DribbbleGrid from '../components/DribbbleGrid'
import ImgMatch from '../components/ImgMatch'
import ImageHover from '../components/ImageHover'
import Divider from '../elements/Divider'
import Icon from '../components/Icons'
import Accordion from '../components/Accordion'

import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

import theme from '../../config/theme'

import { ProjectNodeShape } from '../types'

// ___________________________________________________________________

type TeamMateProps = {
  item: {
    name: string
    id: number
  }
}

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
}

const TeamMate = ({ item }: TeamMateProps) => {
  const [hoverRef, isHovered] = useHover()
  return (
    // @ts-ignore: Unreachable code error
    <div ref={hoverRef} style={{ position: 'relative' }}>
      <Accordion title={item.name} {...AccordionProps}>
        <Box pt={6} pb={2} pr={7}>
          <Text as="p">{item.name}</Text>
        </Box>
      </Accordion>
      <Box width="460px" p={6} className={`popup  ${isHovered ? 'show' : ''}`}>
        <ImgMatch src={item.src} altText="core37" />
      </Box>
    </div>
  )
}

const IndexPageComp: React.FC = () => {
  const DelayedFade = useSpring({
    config: config.molasses,
    delay: 300,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <>
      <Section pt={0} pb={0}>
        <Flex
          flexDirection="column"
          justifyContent="flex-end"
          width={[1]}
          style={{ minHeight: '100vh' }}
          pt={3}
          pb={3}
        >
          <Box>
            <Heading as="h3">
              I run a boutique design and development practice helping brands
              define and develop visual identity systems and cutting-edge
              digital experiences.
            </Heading>
            {/* <Box as="span" style={{ transform: 'rotate(45deg)' }}>
              <Icon name="nextArrow" color={theme.colors.text} />
            </Box> */}
          </Box>
        </Flex>
      </Section>
      <Section>
        <Box width={[1]}>
          {projectList.map((item, idx) => (
            <TeamMate key={idx} item={item} />
          ))}
          {/* <Divider bg="black" py="1.5px" />
          <Heading as="h2" mb={2}>
            Cannavative
          </Heading>
          <Divider bg="black" py="1.5px" />
          <Heading as="h2" mb={2}>
            Blackbird
          </Heading>
          <Divider bg="black" py="1.5px" />
          <Heading as="h2" mb={2}>
            Bottle Barn
          </Heading>
          <Divider bg="black" py="1.5px" />
          <Heading as="h2" mb={2}>
            Cannavative
          </Heading>
          <Divider bg="black" py="1.5px" />
          <Heading as="h2" mb={2}>
            Posters 2019
          </Heading>
          <Divider bg="black" py="1.5px" />
          <Heading as="h2" mb={2}>
            Logofolio
          </Heading>
          <Divider bg="black" py="1.5px" /> */}
        </Box>
        <Box width={[1]}>{/* <ProjectGrid /> */}</Box>
      </Section>
      <Section>
        <Box width={[1]}>
          <Heading as="h3">
            I believe that a well defined strategy wins every time. My process
            includes 3 core phases; research, definition and implementation.
            Every project is approached with a clear and open mindset with the
            intention to add value.
          </Heading>
          <Heading as="h3">
            I’ve been working in design and web development for over 11 years
            and as an independent consultant for the last 5 years. Collaborating
            with startups, established brands and anyone with a great idea —
            advising on visual identity, technical strategy and digital tooling.
          </Heading>
          <Heading as="h3">
            I think of clients as patners and don't typically get hired for
            one-off projects. My aim is to collaboerate with my partners and,
            over time, build lasting brands and digital experiences.
          </Heading>
          {/* <Text as="p">
            Finding balance among simplicity, form and function in my work and
            sharing gratitude with those I collaborate with is my goal.
          </Text> */}
        </Box>
      </Section>
      <Section>
        <Heading as="h4">dribbbles</Heading>
        <Box width={[1]}>
          <DribbbleGrid />
        </Box>
      </Section>
      <Section>
        <Box width={[1]}>
          <Heading as="h3">
            If you need a blazing fast website designed <em>and</em> developed
            with all the bells and whistles (react, gatsby, graphQL, headless
            CMS, animations, SEO, accessibility), a high-conversion e-commerce
            experience (shopify, stripe, CRM), or a shiny new visual identity
            (logo, packaging, implementations), then I’m your man.
          </Heading>
          <Heading as="h4">
            For larger projects I work with a collective over at core37. We
            offer a wide-range of brand and digital services utilizing our
            network of peers to get the job done fast and right.
          </Heading>
        </Box>
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

  // console.log('PROJECTS')
  // console.log(projectData)

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

const projectList = [
  {
    id: 1,
    name: 'blackbird',
    src: 'unsplash-psyc.jpg'
  },
  {
    id: 2,
    name: 'cannavative',
    src: 'unsplash-psyc.jpg'
  },
  {
    id: 3,
    name: 'logofolio',
    src: 'unsplash-psyc.jpg'
  }
]
