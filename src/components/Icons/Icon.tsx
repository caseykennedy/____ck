// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// ___________________________________________________________________

import React from 'react'

import IconStyle from './styles.scss'

// Icons
import Carat from './SVG/Carat'
import Pin from './SVG/Pin'
import Facebook from './SVG/Facebook'
import Instagram from './SVG/Instagram'
import Twitter from './SVG/Twitter'
import NextArrow from './SVG/NextArrow'
import ArrowRightAngle from './SVG/ArrowRightAngle'

// ___________________________________________________________________

type Props = {
  name: string
  className?: string
  color?: string
  fas?: string
}

const Icon: React.FC<Props> = ({ name, className, color, fas }) => {
  switch (name) {
    case 'carat':
      return (
        <IconStyle color={color} className={className}>
          <Carat />
        </IconStyle>
      )
    case 'pin':
      return (
        <IconStyle className="ico ico-pin">
          <Pin />
        </IconStyle>
      )
    case 'nextArrow':
      return (
        <IconStyle color={color} className={className}>
          <NextArrow />
        </IconStyle>
      )
    case 'arrowRightAngle':
      return (
        <IconStyle color={color} className={className}>
          <ArrowRightAngle />
        </IconStyle>
      )
    case 'facebook':
      return (
        <IconStyle color={color} className="ico ico-facebook">
          <Facebook />
        </IconStyle>
      )
    case 'twitter':
      return (
        <IconStyle color={color} className="ico ico-twitter">
          <Twitter />
        </IconStyle>
      )
    case 'instagram':
      return (
        <IconStyle color={color} className="ico ico-instagram">
          <Instagram />
        </IconStyle>
      )
    default:
      return (
        <IconStyle color={color} className="ico">
          <i className={fas ? `fas fa-${name}` : `fas fab fa-${name}`} />
        </IconStyle>
      )
  }
}

export default Icon

// ___________________________________________________________________
