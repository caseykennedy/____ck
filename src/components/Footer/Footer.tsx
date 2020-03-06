// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import data from './data/footer.yaml'

import { Box, Flex, Text } from '../../elements'
import Section from '../../components/Section'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  navData?: {
    node: {
      name: string
      link: string
    }
  }[]
}

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC<Props> = ({ navData }) => {
  return (
    <>
      <Flex
        as="footer"
        flexDirection="column"
        justifyContent="space-between"
        width={1}
        px={theme.gutter}
        py={theme.gutter}
        style={{ minHeight: '100vh' }}
      >
        <Box>
          <Text fontSize={[3, 3, 4]} mt={[6, 6, 8]}>
            <a href="mailto:me@caseykennedy.me" className="js-hover">
              me@caseykennedy.me
            </a>
          </Text>
        </Box>
        <Flex my={8}>
          <Box width={[1 / 4]} mr={3}>
            <Text mb={5} className="t--uppercase">
              Experience
            </Text>
            <Text mb={2}>Simple Media</Text>
            <Text mb={6}>Medium Advertising</Text>
            <Text mb={2}>Atlantis Casino Resort</Text>
            <Text mb={2}>noip</Text>
            <Text mb={5}>Spheric Agency</Text>
            <Text mb={2}>core37</Text>
          </Box>
          <Box width={[1 / 4]} mr={3}>
            <Text mb={5} className="t--uppercase">
              Capabilities
            </Text>
            <Text mb={2}>logo identity</Text>
            <Text mb={2}>brand guidelines</Text>
            <Text mb={2}>packaging</Text>
            <Text mb={2}>implementations</Text>
            <Text mb={2}>editorial design</Text>
            <Text mb={2}>sound design</Text>
            <Text mb={2}>wayfinding</Text>
            <Text mb={2}>visual design</Text>
            <Text mb={2}>UI &amp; UX</Text>
            <Text mb={2}>prototyping</Text>
            <Text mb={2}>web development</Text>
            <Text mb={2}>design systems</Text>
            <Text mb={2}>ecommerce</Text>
            <Text mb={2}>ongoing support</Text>
            <Text mb={2}>workshops</Text>
          </Box>
          <Box width={[1 / 4]} mr={3}>
            <Text mb={5} className="t--uppercase">
              Tech
            </Text>
            <Text mb={2}>javascript</Text>
            <Text mb={2}>HTML+CSS</Text>
            <Text mb={2}>react</Text>
            <Text mb={2}>gatsby / next</Text>
            <Text mb={2}>typescript</Text>
            <Text mb={2}>graphQL</Text>
            <Text mb={2}>shopify / stripe</Text>
            <Text mb={2}>wordpress</Text>
          </Box>
          {/* <Box width={[1 / 6]} mr={3}>
            <Text color="tertiary" mb={5}>
              Enquiries
            </Text>
            <Text mb={6}>me@caseykennedy.me</Text>
          </Box> */}
        </Flex>
        {navData && (
          <Flex
            width={1}
            // mt={[6, 6, 7]}
            flexDirection="row"
            flexWrap="wrap"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Text>Find me on:</Text>
            {navData.map(({ node: item }) => (
              <Link
                to={item.link}
                key={item.name}
                className="t--link  js-hover"
              >
                {item.name}
              </Link>
            ))}
          </Flex>
        )}
      </Flex>
    </>
  )
}

export default Footer
