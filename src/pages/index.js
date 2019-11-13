import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Showcase from "../components/showcase"
import Skills from "../components/skills"
import { StyledContainer } from "../shared/ui/components"
import Projects from "../components/projects/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Showcase />
    <StyledContainer>
      <Skills />
      <Projects />
    </StyledContainer>
  </Layout>
)

export default IndexPage
