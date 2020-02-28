// Image Hover
// Spring animated hover for image callouts

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { useSpring } from 'react-spring'

import ImgMatch from '../ImgMatch'

import { AnimatedBox, Box, Text } from '../../elements'

import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  title: string
  subTitle: string
  link: string
  src: string
  altText: string
}

const calc: (x: number, y: number) => number[] = (x, y) => [
  -(y - window.innerHeight / 2) / 90,
  (x - window.innerWidth / 2) / 20,
  1.1
]

const trans: (x: any, y: any, s: any) => string | undefined = (x, y, s) =>
  `scale(${s})`

const ImageHover: React.FC<Props> = ({
  title,
  subTitle,
  link,
  src,
  altText
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 800, friction: 100 }
  }))
  return (
    <S.ImageHoverLink to={link} className="js-hover">
      <AnimatedBox
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        className="js-hover"
      >
        <ImgMatch src={src} altText={altText} />
      </AnimatedBox>
      <Box pt={3}>
        <Text as="p" fontSize={2} mb={0}>
          {title}
        </Text>
        <Text as="p" fontSize={2} color="tertiary" mt={1} className="subtitle">
          {subTitle}
        </Text>
      </Box>
    </S.ImageHoverLink>
  )
}

export default ImageHover

// ___________________________________________________________________
