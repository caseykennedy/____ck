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
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      style={{ height: '100vh' }}
    >
      <Section pt={12} pb={3} bg="white">
        <Box width={1}>
          <Heading as="h1" fontSize={[4, 4, 6]} mb={0}>
            <Scrambler
              text={'almost there...'}
              characters={'+-'}
              duration={1000}
              renderIn={1000}
              changeFrom={'abcdefghijk'}
            />
          </Heading>
        </Box>
      </Section>

      <Section bg="antiquewhite">
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
      </Section>

      <Section pt={4} pb={4} bg="darkslategray" color="white">
        <Text as="span" fontSize={3} style={{ textTransform: 'uppercase' }}>
          Let's build a blazing fast website! Let's build a blazing fast
          website!
        </Text>
      </Section>

      {/* <Section pt={0} pb={4}>
        <AnimatedBox width={1} mt={'10vh'} style={DelayedFade}>
          <Heading as="h2" fontSize={[4, 5, 6]} mb={0}>
            Welcome
          </Heading>
        </AnimatedBox>
        <Box width={1} mb={'10vh'}>
          <Heading as="h2" fontSize={[4, 5, 6]} textAlign="right" mb={0}>
            <Cycler
              duration={9000}
              strings={scrambleStrings}
              characters={'+-'}
              changeFrom={'+--+-'}
            />
          </Heading>
        </Box>
      </Section> */}

      {/* <Section>
        <Flex width={1} justifyContent="flex-end" alignItems="flex-end">
          <Box as="figure" width={[4 / 12]} mb={-7}>
            <ImageHover
              title={pageContext.logofolio.title}
              subTitle={pageContext.logofolio.years}
              link="/projects/#logofolio"
              src="unsplash--007.jpg"
              altText="core37 logo design portfolio"
            />
          </Box>
          <Box width={8 / 12}>
            <Text as="p" fontSize={2}>
              {pageContext.projects.title}
            </Text>
            <ProjectSlider slides={projectData} />
          </Box>
        </Flex>
      </Section> */}

      {/* <Section>
        <Flex
          width={1}
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          textAlign="right"
        >
          <Box width={[10 / 12, 9 / 12, 9 / 12]}>
            <Heading as="h3" className="t--dual-col">{pageContext.about.detail}</Heading>
          </Box>
        </Flex>
      </Section> */}

      {/* <Section>
        <Box width={1}>
          <Heading
            as="h2"
            dangerouslySetInnerHTML={{ __html: pageContext.about.title }}
          />
          <Text as="p">
            <Link to={pageContext.about.link} className="t--link  js-hover">
              {pageContext.about.cta}
            </Link>
          </Text>
        </Box>
      </Section> */}

      {/* <Section pt={0}>
        <Flex alignItems="flex-end">
          <Box as="figure" width={[7 / 12]}>
            <ImageHover
              title={pageContext.dribbble.title}
              subTitle={pageContext.dribbble.years}
              link="/projects/#dribbbles"
              src="dribbble--01.jpg"
              altText="core37 posters design showcase"
            />
          </Box>
          <Box as="figure" width={[5 / 12]} mb={-7}>
            <ImageHover
              title={pageContext.posters.title}
              subTitle={pageContext.posters.years}
              link="/projects/#posters"
              src="unsplash--007.jpg"
              altText="core37 posters design showcase"
            />
          </Box>
        </Flex>
      </Section> */}

      {/* <Section>
        <Box width={1 / 2}>
          <Heading as="p">{pageContext.testimonial.quote}</Heading>
          <Text as="p" mb={0}>
            {pageContext.testimonial.author}
          </Text>
          <Text as="p" color="tertiary">
            {pageContext.testimonial.company}
          </Text>
        </Box>
      </Section> */}

      {/* <Section pt={0} pb={0}>
        <Box width={7 / 12}>
          <Text as="p" fontSize={4} mt={7}>
            <a href="mailto:me@caseykennedy.me" className="t--link  js-hover">
              {pageContext.contact.cta}
            </a>
          </Text>
        </Box>
      </Section> */}
    </Flex>
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
