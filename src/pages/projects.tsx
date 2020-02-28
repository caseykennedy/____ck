// Projects page

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Libraries
import { useSpring, config } from 'react-spring'
import { Cycler } from 'react-text-scrambler'
import { Grid, Cell } from 'styled-css-grid'

// Data
import useProjectYaml from '../hooks/useProjectYaml'

// Components
import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import ProjectGrid from '../components/ProjectGrid'
import DribbbleGrid from '../components/DribbbleGrid'

// Elements
import { AnimatedBox, Box, Heading, Text } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const ProjectsPage: React.FC = () => {
  // Project data hook
  const projectData = useProjectYaml()

  // Page fade-up animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })

  // Scrambler settings
  const scrambleStrings = ['create', 'think', 'crave', 'eat']
  const dribbbleStrings = [
    'Recent',
    'Random',
    'Dribbbles',
    'Screenshots',
    'In progress'
  ]
  const characters = '+-^_*'
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Section pt={2}>
          <Heading as="h2" fontSize={[5]}>
            We are what we
          </Heading>
          <Heading as="h2" textAlign="right" fontSize={[5]}>
            <Cycler
              duration={3000}
              strings={scrambleStrings}
              characters={characters}
            />
          </Heading>
          <Heading as="h1" textAlign="left" className="t--dual-col">
            Every project is sculpted by a clear and open mindset with the
            intention to add value. We aim to find balance among simplicity,
            form and function in our work – and to share gratitude with those we
            collaborate with.
          </Heading>
        </Section>

        <Box as="section" pl={[3, 3, 10]} pr={theme.gutter} py={4}>
          <ProjectGrid projectData={projectData} />
        </Box>

        <Section pb={0}>
          <Heading as="h2">
            <Cycler
              duration={3000}
              renderIn={300}
              strings={dribbbleStrings}
              characters={characters}
            />
          </Heading>
        </Section>

        <Box as="section" pl={[3, 3, 0]} pr={theme.gutter} py={4}>
          <DribbbleGrid />
        </Box>

        <Section>
          <Heading as="h2">
            Logofolio
            <br />
            2010—2019
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

        <Section>
          <Box width={7 / 12}>
            <Text as="h2">
              Like what you see?
              <br />
              We can help you, too.
            </Text>
            <Text as="p" mt={6} fontSize={[4]}>
              <Link to="/approach" className="t--link  js-hover">
                say hello 🤙
              </Link>
            </Text>
          </Box>
        </Section>
      </AnimatedBox>
    </Layout>
  )
}

export default ProjectsPage

// ___________________________________________________________________
