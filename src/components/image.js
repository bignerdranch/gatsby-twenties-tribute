import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const smallSquareImage = graphql`
  fragment smallSquareImage on File {
    childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const NavImage = () => {
  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "mobster-couple.jpg" }) {
        ...smallSquareImage
      },
      second: file(relativePath: { eq: "roaring-twenties.jpg" }) {
        ...smallSquareImage
      },
      third: file(relativePath: { eq: "prob-over.jpg" }) {
        ...smallSquareImage
      }
    }
  `)

  return (
    <div 
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-around`
      }}
      className={`footer`}
    >
      <Img 
        title={`Mobster Couple`}
        alt={`mobster couple with city in the background`}
        fixed={data.first.childImageSharp.fixed}
        style={{
          borderRadius: `5px`,
          boxShadow: `11px 11px 4px -10px rgba(77,77,77,1)`
        }}
      />
      <Img 
        title={`Roaring Twenties`}
        alt={`twenties car with person in the foreground`}
        fixed={data.second.childImageSharp.fixed}
        style={{
          borderRadius: `5px`,
          boxShadow: `11px 11px 4px -10px rgba(77,77,77,1)`
        }}
      />
      <Img 
        title={`Prohibiton Over`}
        alt={`prohibtion is over image`}
        fixed={data.third.childImageSharp.fixed}
        style={{
          borderRadius: `5px`,
          boxShadow: `11px 11px 4px -10px rgba(77,77,77,1)`
        }}
      />
    </div>
  )
}
