// useProjectYaml utility hook
// Hook for querying project YAML

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import { ProjectShape } from '../types'

// ___________________________________________________________________

const useProjectYaml = () => {
  const data = useStaticQuery<ProjectShape>(graphql`
    query projectsQuery {
      projects: allProjectsYaml {
        edges {
          node {
            id
            title_detail
            title
            slug
            desc
            services
            color
            category
            cover {
              childImageSharp {
                fluid(quality: 85, maxWidth: 1100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.projects.edges
}

export default useProjectYaml

// ___________________________________________________________________
