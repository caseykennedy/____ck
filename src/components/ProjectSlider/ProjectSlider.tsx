// Project Slider:
// TODO: Fix `trans` types

// ___________________________________________________________________

// Core
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

// Libraries
import Slider from 'react-slick'
import { useSpring, animated } from 'react-spring'

// Components
import Icon from '../Icons'

// Styles
import * as S from './styles.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Elements
import { Box, AnimatedBox, Text } from '../../elements'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

type SlickProps = {
  className?: string
  onClick?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined
}

// Shouldn't I be able to condense this and Props?
// Yes, add to typings.ts
type ProjectProps = {
  slide: {
    id: string
    title_detail: string
    title: string
    slug: string
    services: string
    desc: string
    color: string
    category: string
    cover: {
      childImageSharp: {
        fluid: {
          aspectRatio: number
          src: string
          srcSet: string
          sizes: string
          base64: string
          tracedSVG: string
          srcWebp: string
          srcSetWebp: string
        }
      }
    }
  }
}

type Props = {
  slides: {
    node: {
      id: string
      title_detail: string
      title: string
      slug: string
      services: string
      desc: string
      color: string
      category: string
      cover: {
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }
    }
  }[]
}

//
// ___________________________________________________________________

// tslint:disable-next-line: function-name
function SampleNextArrow(props: SlickProps) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <Icon name="nextArrow" color={theme.colors.white} />
    </div>
  )
}
// tslint:disable-next-line: function-name
function SamplePrevArrow(props: SlickProps) {
  const { className, onClick } = props
  return <div className={className} onClick={onClick} />
}

const ProjectSlide = ({ slide }: ProjectProps) => {
  // Hover effect
  const calc: (x: any, y: any) => number[] = (x, y) => [
    -(y - window.innerHeight / 2) / 90,
    (x - window.innerWidth / 2) / 20,
    1.1
  ]
  const trans: (x: any, y: any, s: any) => string = (x, y, s) => `scale(${s})`
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 800, friction: 100 }
  }))
  return (
    <Link to={slide.slug} className="js-hover">
      <Box width={1}>
        <AnimatedBox
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Img
            alt={slide.title_detail}
            key={slide.cover.childImageSharp.fluid.src}
            fluid={slide.cover.childImageSharp.fluid}
            durationFadeIn={1000}
            backgroundColor="magenta"
          />
        </AnimatedBox>
        <Box className="slide__details" py={3} pl={3}>
          <Text as="p" fontSize={2}>
            {slide.title_detail}
          </Text>
          {/* <Text as="p" fontSize={2} color="tertiary" mt={1}>
            {slide.services}
          </Text> */}
        </Box>
      </Box>
    </Link>
  )
}

const ProjectSlider: React.FC<Props> = ({ slides }) => {
  // Slick settings
  const settings = {
    centerMode: false,
    centerPadding: '60px',
    // fade: true,
    accessibility: true,
    infinite: true,
    dots: false,
    arrows: true,
    speed: 777,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // className: 'center',
    adaptiveHeight: false,
    variableWidth: false,
    useTransform: true,
    swipeToSlide: true,
    edgeFriction: 1,
    draggable: true,
    nextArrow: <SampleNextArrow className="js-hover" />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <S.Container width={1}>
      <Slider {...settings}>
        {slides.map(({ node: slide }) => (
          <ProjectSlide key={slide.id} slide={slide} />
        ))}
      </Slider>
    </S.Container>
  )
}

export default ProjectSlider

// ___________________________________________________________________
