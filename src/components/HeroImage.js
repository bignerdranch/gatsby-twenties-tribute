import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const heroQuery = graphql`
  fragment heroQuery on File {
    childImageSharp {
      sizes( maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`

const HeroImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mobster-couple.jpg" }) {
        childImageSharp {
          sizes( maxWidth: 1240 ) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    }
  `)

  return <Img 
    title={`hello`}
    alt={`hello`}
    sizes={data.file.childImageSharp.sizes}
  />
}

export default HeroImage
