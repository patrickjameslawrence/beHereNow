import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {

  return (
    <>
      <Layout
        title="Here's what's going on"
        description="You're seeing everything that's been posted recently"
      >
          
      </Layout>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>BeHereNow | Explore</title>
