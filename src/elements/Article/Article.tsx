import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'

type Props = {
  bg?: string
  bgImage?: string
  px?: any
  py?: any
  pageWidth?: number | string
}

const Article: React.FC<Props> = ({
  children,
  bg,
  bgImage,
  px,
  py,
  pageWidth
}) => (
  <Container
    as="article"
    flexWrap="wrap"
    flexDirection="row"
    justifyContent="flex-start"
    bg={bg}
    bgImage={bgImage}
    px={px}
    py={py}
  >
    <Box
      css={{
        maxWidth: pageWidth
      }}
    >
      {children}
    </Box>
  </Container>
)

Article.defaultProps = {
  bg: '',
  px: [1, 2, 2, 3, 3],
  py: [2, 3, 4, 4],
  pageWidth: '100%'
}

const Container = styled(Flex)`
  background-image: url('${(p: Props) => p.bgImage}');
  background-size: cover;
  background-position: center left;
`

// const PageWidth = styled(Box)`
//   width: ${p => p.pageWidth}px;
//   /* margin: 0 auto; */
// `

export default Article
