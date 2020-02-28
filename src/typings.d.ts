declare module '*.svg'
declare module '*.eot'
declare module '*.ttf'
declare module '*.otf'
declare module '*.woff'
declare module '*.woff2'

declare module 'gatsby-image/withIEPolyfill'
declare module 'components/Icons'
declare module 'react-anchor-link-smooth-scroll'
declare module 'react-text-scrambler'
declare module 'react-id-swiper'
declare module 'smooth-scrollbar-react'

function createRef<T>(): RefObject<T>
interface RefObject<T> {
  // immutable
  readonly current: T | null
}