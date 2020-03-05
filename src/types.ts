export type ChildImageSharp = {
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

// Project Data Models
// ___________________________________________________________________

export type ProjectNodeShape = {
  id: string
  title_detail: string
  title: string
  slug: string
  desc: string
  industry: string
  website: string
  services: string
  color: string
  category: string
  images: string
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

export type ProjectShape = {
  projects: {
    edges: { node: ProjectNodeShape }[]
  }
}
