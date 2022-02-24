// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Text } from '../../elements'
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
        style={{ minHeight: '80vh' }}
      >
        <Box>
          <Text fontSize={[4, 5, 5]} mt={[3, 3, 0]}>
            <a href="mailto:me@caseykennedy.me" className="js-hover">
              Say hi 👋
            </a>
          </Text>
        </Box>
        <Flex my={6} flexWrap="wrap">
          <Box width={[1 / 2, 1 / 2, 1 / 4]} mr={[3, 3, 3]} mb={[5, 5, 0]}>
            <Text mb={5} className="t--uppercase">
              ○ Experience
            </Text>
            <Text mb={2}>Simple Media</Text>
            <Text mb={6}>Medium Advertising</Text>
            <Text mb={2}>Atlantis Casino Resort</Text>
            <Text mb={2}>noip.com</Text>
            <Text mb={5}>Spheric Agency</Text>
            <Text mb={3}>core37</Text>
            <Text mb={2}>tetra/</Text>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} mr={[0, 3, 3]} mb={[5, 5, 0]}>
            <Text mb={5} className="t--uppercase">
              ○ Capabilities
            </Text>
            <Text mb={2}>web + app development</Text>
            <Text mb={2}>e-commerce</Text>
            <Text mb={5}>design systems</Text>
            
            <Text mb={2}>ui + ux</Text>
            <Text mb={2}>visual design</Text>
            <Text mb={5}>prototyping</Text>

            <Text mb={2}>logo identity</Text>
            <Text mb={2}>brand guidelines</Text>
            <Text mb={2}>packaging</Text>
            <Text mb={5}>presentations</Text>

            <Text mb={2}>ongoing support</Text>
            <Text mb={2}>workshops</Text>
          </Box>
          <Box width={[1, 1 / 2, 1 / 4]} mr={[0, 3, 3]} mb={[5, 5, 0]}>
            <Text mb={5} className="t--uppercase">
              ○ Tech
            </Text>
            <Text mb={2}>react</Text>
            <Text mb={2}>web3 / crypto</Text>
            <Text mb={2}>gatsby / next</Text>
            <Text mb={2}>javascript (ts)</Text>
            <Text mb={2}>html + css</Text>
            <Text mb={2}>graphQL</Text>
            <Text mb={2}>shopify / snipcart</Text>
            <Text mb={5}>headless</Text>
          </Box>
          {/* <Box width={1}>
            <Text fontSize={[4, 5, 7]} mt={[4, 3, 0]}>
              <a href="mailto:me@caseykennedy.me" className="js-hover">
                Write me 😃
              </a>
            </Text>
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
            mb={[4, 0]}
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
