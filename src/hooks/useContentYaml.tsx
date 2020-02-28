// useContentYaml utility hook
// Hook for querying content YAML

// ___________________________________________________________________

// Core
import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  content: {
    edges: {
      node: {
        index: {
          intro: string
          about: {
            cta: string
            link: string
            detail: string
            title: string
          }
          contact: {
            cta: string
            detail: string
          }
          dribbble: {
            title: string
            years: string
          }
          posters: {
            title: string
            years: string
          }
          logofolio: {
            title: string
            years: string
          }
          projects: {
            title: string
          }
          testimonial: {
            author: string
            company: string
            quote: string
          }
        }
        about: {
          approach: {
            detail: string
            lead: string
            title: string
          }
          banner: string
          desc: string
          info: {
            aim: {
              detail: string
              title: string
            }
            team: {
              members: {
                bio: string
                name: string
                photo: string
                skills: string[]
              }[]
              title: string
            }
            title: string
          }
          intro: string
          lead: string
          metrics: {
            title: string
            stat: string
          }[]
          pathname: string
          title: string
          manifesto: string[]
          capabilities: {
            title: string
            lead: string
            column: {
              services: string[]
              title: string
            }[]
          }
        }
      }
    }[]
  }
}

const useContentYaml = () => {
  const data = useStaticQuery<Props>(graphql`
    query contentQuery {
      content: allContentYaml {
        edges {
          node {
            index {
              intro
              about {
                cta
                link
                detail
                title
              }
              contact {
                cta
                detail
              }
              dribbble {
                title
                years
              }
              posters {
                title
                years
              }
              logofolio {
                title
                years
              }
              projects {
                title
              }
              testimonial {
                author
                company
                quote
              }
            }
            about {
              approach {
                detail
                lead
                title
              }
              banner
              desc
              info {
                aim {
                  detail
                  title
                }
                team {
                  members {
                    bio
                    name
                    photo
                    skills
                  }
                  title
                }
                title
              }
              intro
              lead
              metrics {
                title
                stat
              }
              pathname
              title
              manifesto
              capabilities {
                title
                lead
                column {
                  services
                  title
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.content
}

export default useContentYaml

// ___________________________________________________________________
