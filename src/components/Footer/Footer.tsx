// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Box, Flex, Text } from '../../elements'
import Section from '../../components/Section'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type FooterShape = {
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

const Footer: React.FC<FooterShape> = ({ navData }) => {
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
          <Text fontSize={[2, 3, 4]} mt={[4]}>
            <a href="mailto:me@caseykennedy.me" className="js-hover">
              me●caseykennedy.me
            </a>
          </Text>
        </Box>
        <Flex my={8} flexWrap="wrap">
          <Box width={[1 / 2, 1 / 2, 1 / 4]} mr={[0, 3, 3]} mb={[5, 5, 0]}>
            <Text mb={5} className="t--uppercase">
            ● Experience
            </Text>
            <Text mb={2}>Simple Media</Text>
            <Text mb={6}>Medium Advertising</Text>
            <Text mb={2}>Atlantis Casino Resort</Text>
            <Text mb={2}>noip</Text>
            <Text mb={5}>Spheric Agency</Text>
            <Text mb={2}>core37</Text>
            <Text mb={2}>eOn</Text>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} mr={[0, 3, 3]} mb={[5, 5, 0]}>
            <Text mb={5} className="t--uppercase">
            ● Capabilities
            </Text>
            <Text mb={2}>logo identity</Text>
            <Text mb={2}>brand guidelines</Text>
            <Text mb={2}>packaging</Text>
            <Text mb={2}>implementations</Text>
            <Text mb={2}>editorial design</Text>
            <Text mb={5}>sound design</Text>
            <Text mb={2}>wayfinding</Text>
            <Text mb={2}>visual design</Text>
            <Text mb={2}>UI &amp; UX</Text>
            <Text mb={5}>prototyping</Text>

            <Text mb={2}>JAMstack</Text>
            <Text mb={2}>web development</Text>
            <Text mb={2}>design systems</Text>
            <Text mb={2}>ecommerce</Text>
            <Text mb={5}>ongoing support</Text>
            <Text mb={2}>workshops</Text>
          </Box>
          <Box width={[1, 1 / 2, 1 / 4]} mr={[0, 3, 3]} mb={[5, 5, 0]}>
            <Text mb={5} className="t--uppercase">
            ● Tech
            </Text>
            <Text mb={2}>react</Text>
            <Text mb={2}>gatsby / next</Text>
            <Text mb={2}>javascript</Text>
            <Text mb={2}>HTML+CSS</Text>
            <Text mb={2}>typescript</Text>
            <Text mb={2}>graphQL</Text>
            <Text mb={2}>shopify / stripe</Text>
            <Text mb={5}>wordpress</Text>
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
              <a
                href={item.link}
                target="_blank"
                key={item.name}
                className="t--link  js-hover"
              >
                {item.name}
              </a>
            ))}
          </Flex>
        )}
      </Flex>
    </>
  )
}

export default Footer
