// About page

import React from 'react'

import { useInView } from 'react-intersection-observer'
import { useSpring, config } from 'react-spring'
import { Cycler, Scrambler } from 'react-text-scrambler'
import { Grid, Cell } from 'styled-css-grid'

import useContentYaml from '../hooks/useContentYaml'
import useHover from '../hooks/useHover'

import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import ImgMatch from '../components/ImgMatch'
import Accordion from '../components/Accordion'
import Icon from '../components/Icons'

import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

import theme from '../../config/theme'

// ___________________________________________________________________

type DataProps = {
  pageContext: {
    approach: {
      detail: string
      lead: string
      title: string
    }
    banner: string
    desc: string
    info: {
      aim: {
        detail: string
        title: string
      }
      team: {
        members: {
          bio: string
          name: string
          photo: string
          skills: string[]
        }[]
        title: string
      }
      title: string
    }
    intro: string
    lead: string
    metrics: {
      title: string
      stat: string
    }[]
    pathname: string
    title: string
    manifesto: string[]
    capabilities: {
      title: string
      lead: string
      column: {
        services: string[]
        title: string
      }[]
    }
  }
}

type TeamMateProps = {
  item: {
    name: string
    bio: string
    photo: string
    skills: string[]
  }
}

type ManifestoProps = {
  item: string
}

type MetricProps = {
  metric: {
    title: string
    stat: string
  }
}

// ___________________________________________________________________

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
    <div ref={hoverRef}>
      <Accordion title={item.name} {...AccordionProps}>
        <Box pt={6} pb={2} pr={7}>
          <Text as="p">{item.bio}</Text>
          <Text as="p">skills:</Text>
          <Flex flexWrap="wrap">
            {item.skills.map((skill, idx) => (
              <Box
                key={idx}
                style={{ border: '2px solid #cccccc' }}
                color="white"
                py={2}
                px={3}
                mr={1}
                mb={1}
              >
                {skill}
              </Box>
            ))}
          </Flex>
        </Box>
      </Accordion>
      <Box width="460px" p={6} className={`popup  ${isHovered ? 'show' : ''}`}>
        <ImgMatch src={item.photo} altText="core37" />
      </Box>
    </div>
  )
}

const ManifestoItem = ({ item }: ManifestoProps) => {
  // Only show item when in view
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-180px 0px'
  })
  const manifestoSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1, 0, 52)'
  })
  return (
    <AnimatedBox ref={manifestoRef} style={manifestoSpring}>
      <Text fontSize={[3, 3, 4, 5]} mb={6}>
        {item}
      </Text>
    </AnimatedBox>
  )
}

const Metric = ({ metric }: MetricProps) => {
  console.log(metric.stat)
  return (
    <Box width={1 / 2} mb={6}>
      <Text
        as="p"
        fontSize={2}
        mb={0}
        dangerouslySetInnerHTML={{ __html: `${metric.title}:` }}
      />
      <Heading fontSize={[5]} mb={0}>
        <Scrambler
          text={metric.stat}
          renderIn={500}
          duration={500}
          characters={'+-'}
          changeFrom={'+-'}
        />
      </Heading>
    </Box>
  )
}

const AboutPageComp = ({ pageContext }: DataProps) => {
  // Hero scramble strings
  const scrambleStrings = [
    'Love',
    'Trust',
    'Respect',
    'Awareness',
    'Balance',
    'Innovation',
    'Efficiency',
    'Consistency',
    'Patience'
  ]
  const characters = '+-^_*'
  return (
    <>
      <Section pt={0}>
        <Text as="h2" mb={0}>
          <Cycler
            duration={3000}
            renderIn={400}
            strings={scrambleStrings}
            characters={characters}
            changeFrom={'+--+'}
          />
          &nbsp;
        </Text>
        <Heading as="h1" textAlign="right" className="t--dual-col">
          {pageContext.intro}
        </Heading>
      </Section>

      <Section pt={0}>
        <Flex width={1} flexWrap="wrap">
          <Flex width={[1, 1, 1, 1 / 3]}>
            <Flex flexWrap="wrap">
              {pageContext.metrics.map((metric, idx) => (
                <Metric key={idx} metric={metric} />
              ))}
            </Flex>
          </Flex>
          <Box width={[1, 1, 1, 2 / 3]} mt={[6, 6, 6, 0]}>
            <ImgMatch src="merida-meetup.jpg" altText="core37" />
            <Box pt={3}>
              <Text as="p" fontSize={2} mb={0}>
                🇲🇽 Merida Meetup 2020
              </Text>
            </Box>
          </Box>
        </Flex>
      </Section>

      {/* <Section pt={1}>
        <Flex
          width={1}
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          textAlign="right"
        >
          <Box width={[10 / 12, 9 / 12, 9 / 12]}>
            <Heading as="h3">{pageContext.lead}</Heading>
          </Box>
        </Flex>
      </Section> */}

      <Section>
        <Flex
          width={1}
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          textAlign="left"
        >
          <Box width={[1, 1, 1, 3 / 4]}>
            <Text as="h1">
              We aim to find balance within and without and positively impact
              others through creative experience.
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section pt={0} pb={0}>
        <ImgMatch src="reading.jpg" altText="core37" />
      </Section>

      <Section>
        <Box width={[1, 1, 1 / 2, 1 / 2]}>
          <Heading
            as="h2"
            mb={0}
            dangerouslySetInnerHTML={{ __html: pageContext.info.title }}
          />
        </Box>
      </Section>

      <Section pt={0}>
        <Flex
          flexWrap="wrap"
          justifyContent="flex-end"
          style={{ position: 'relative' }}
        >
          <Flex width={[1, 1, 1, 1 / 2]} alignItems="flex-start">
            <Icon name="arrowRightAngle" color="white" />
            <Text as="p" ml={5}>
            {pageContext.info.team.title}
            </Text>
          </Flex>
          <Box width={[1, 1, 1, 1 / 2]}>
            {pageContext.info.team.members.map(item => (
              <TeamMate key={item.name} item={item} />
            ))}
          </Box>
        </Flex>
      </Section>

      <Section pt={0} pb={0}>
        <Flex flexWrap="wrap">
          <Box width={1 / 2}>
            <ImgMatch src="meeting.jpg" altText="core37" />
          </Box>
          <Box width={1 / 2}>
            <ImgMatch src="about--1.jpg" altText="core37" />
          </Box>
        </Flex>
      </Section>

      {/* <Section pt={0}>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1, 1 / 2]} mb={6}>
            <Text as="p">{pageContext.info.aim.title}</Text>
          </Box>
          <Box width={[1, 1, 1, 1 / 2]}>
            <Text as="p" fontSize={4}>
              {pageContext.info.aim.detail}
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex
          width={1}
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          textAlign="right"
        >
          <Box width={[1, 1, 1, 3 / 4]}>
            <Text as="h1">
              We aim to find balance within and without and positively impact
              others through creative experience.
            </Text>
          </Box>
        </Flex>
      </Section> */}

      <Section>
        <Box width={1}>
          <Heading
            as="h2"
            mb={0}
            dangerouslySetInnerHTML={{ __html: pageContext.capabilities.title }}
          />
        </Box>
      </Section>

      <Section pt={0}>
        <Flex flexWrap="wrap" justifyContent="flex-end">
          <Flex width={[1, 1, 1, 1 / 2]} alignItems="flex-start">
            <Icon name="arrowRightAngle" color="white" />
            <Text as="p" ml={5}>
              {pageContext.capabilities.lead}
            </Text>
          </Flex>
          {pageContext.capabilities.column.map((item, idx) => (
            <Box
              width={[1, 1, 1 / 2, 1 / 2]}
              mt={[6, 6, 6, 0]}
              mb={6}
              key={idx}
            >
              <Text as="p" mb={6}>
                {item.title}
              </Text>
              <ul>
                {item.services.map((item, idx) => (
                  <Text as="li" fontSize={[3, 3, 3, 4]} key={idx}>
                    <span>→</span> {item}
                  </Text>
                ))}
              </ul>
            </Box>
          ))}
        </Flex>
      </Section>

      <Section pt={0} pb={0}>
        <Flex flexWrap="wrap">
          <Box width={1}>
            <ImgMatch src="wireframe.jpg" altText="core37" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Box width={[1, 1, 1 / 2, 1]}>
          <Heading
            as="h2"
            mb={0}
            dangerouslySetInnerHTML={{ __html: pageContext.approach.title }}
          />
        </Box>
      </Section>

      <Section pt={0}>
        <Flex flexWrap="wrap" justifyContent="flex-end">
          <Flex width={[1, 1, 1, 1 / 4]} pb={6} alignItems="flex-start">
            <Icon name="arrowRightAngle" color="white" />
            <Text as="p" ml={5}>{pageContext.approach.lead}</Text>
          </Flex>
          <Box width={[1, 1, 1, 3 / 4]}>
            <Text as="p" fontSize={[3, 3, 5]}>
              {pageContext.approach.detail}
            </Text>
          </Box>
        </Flex>
      </Section>

      {/* <Section>
        <Box width={[1, 1, 1 / 2, 1 / 3]}>
          <Heading as="h2" mb={0}>
            Some goes here
          </Heading>
        </Box>
      </Section> */}

      <Section>
        <Flex flexWrap="wrap">
          <Flex width={[1, 1, 1, 1 / 4]} pb={6} alignItems="flex-start">
            <Icon name="arrowRightAngle" color="white" />
            <Text as="p" ml={5}>manifesto</Text>
          </Flex>
          <Box width={[1, 1, 2 / 3, 3 / 4]}>
            {pageContext.manifesto.map((item, idx) => (
              <ManifestoItem key={idx} item={item} />
            ))}
          </Box>
        </Flex>
      </Section>

      <Section id="logofolio">
        <Heading as="h2">
          Clients
          <br />
          we love.
        </Heading>
      </Section>

      <Section pt={0}>
        <Grid columns={4} gap="0">
          <Cell middle={true}>
            <Text pb={'10rem'}>LOGO</Text>
          </Cell>
          <Cell middle={true}>
            <Text pb={'10rem'}>LOGO</Text>
          </Cell>
          <Cell middle={true}>
            <Text pb={'10rem'}>LOGO</Text>
          </Cell>
          <Cell middle={true}>
            <Text pb={'10rem'}>LOGO</Text>
          </Cell>
          <Cell middle={true}>
            <Text>LOGO</Text>
          </Cell>
          <Cell middle={true}>
            <Text>LOGO</Text>
          </Cell>
          <Cell middle={true}>
            <Text>LOGO</Text>
          </Cell>
          <Cell middle={true}>
            <Text>LOGO</Text>
          </Cell>
        </Grid>
      </Section>
    </>
  )
}

const AboutPage = () => {
  const data = useContentYaml()
  const pageContext = data.edges[0].node.about

  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <Layout>
      <SEO
        pathname={pageContext.pathname}
        title={`${pageContext.title} | core37`}
        desc={pageContext.lead}
        banner={pageContext.banner}
        individual={true}
      />
      <AnimatedBox style={pageAnimation}>
        <AboutPageComp pageContext={pageContext} />
      </AnimatedBox>
    </Layout>
  )
}

export default AboutPage
