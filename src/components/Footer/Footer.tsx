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
      pt={[6, 6, 7]}
      pb={[5, 4, 4]}
      pr={theme.gutter}
      pl={[3, 3, 0]}
    >
      <Flex
        width={1}
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        flexWrap="wrap"
        textAlign="right"
      >
        <S.Social>
          <Text as="p" fontSize={3}>
            {data.social.map((item: any) => (
              <span key={item.name}>
                <a
                  href={item.link}
                  className="t--link  js-hover"
                  target="_blank"
                >
                  {item.name}
                </a>
                <br />
              </span>
            ))}
          </Text>
          <Text as="p" fontSize={2} textAlign="left" mt={5}>
            For new project enquiries
            <br />
            <a href="mailto:me@caseykennedy.me" className="t--link  js-hover">say hello 👋</a>
          </Text>
        </S.Social>
        {data.locations.map((location: any) => (
          <S.Location key={location.city}>
            <Text as="p" fontSize={3}>
              {location.city} —
              <br />
              {location.state}, {location.country}
              <br />
              {location.flag}
            </Text>
            <Text as="p" fontSize={2}>
              <a
                href={'mailto:' + `${location.email}`}
                className="t--link  js-hover"
              >
                {location.email}
              </a>
            </Text>
          </S.Location>
        ))}
      </Flex>
      {navData && (
        <S.Links
          width={1}
          mt={[6, 6, 7]}
          color="tertiary"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text>&copy;{Year()} (+)(—)</Text>
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
