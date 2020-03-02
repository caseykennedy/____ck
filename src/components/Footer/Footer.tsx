// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import data from './data/footer.yaml'

import { Box, Flex, Text } from '../../elements'

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
    <S.Footer
      as="footer"
      // pt={[6, 6, 7]}
      pb={[5, 4, 4]}
      pr={theme.gutter}
      pl={[3]}
    >
      {navData && (
        <S.Links
          width={1}
          mt={[6, 6, 7]}
          flexDirection="row"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text>Find me on:</Text>
          {navData.map(({ node: item }) => (
            <Link to={item.link} key={item.name} className="t--link  js-hover">
              {item.name}
            </Link>
          ))}
        </S.Links>
      )}
    </S.Footer>
  )
}

export default Footer
