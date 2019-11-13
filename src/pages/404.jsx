import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledNotFound = styled.div`
  h1 {
    color: #333;
  }

  color: #333;
`

const NotFoundPage = () => (
  <Layout>
    <StyledNotFound>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </StyledNotFound>
  </Layout>
)

export default NotFoundPage
