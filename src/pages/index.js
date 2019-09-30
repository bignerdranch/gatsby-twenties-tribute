import React from "react"

import Layout from "../layouts/layout"
import HeroImage from "../components/HeroImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage />
  </Layout>
)

export default IndexPage
