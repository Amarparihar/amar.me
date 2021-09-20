import React from "react"

import {
  Intro,
  About,
  Contact,
  Skill,
  LoveToDo,
  Project,
  Certificate,
} from "../components"
import { Layout, SEO } from "../components/common"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Amar Parihar" />
      <Intro />
      <About />
      <Skill />
      <LoveToDo />
      <Project />
      <Certificate />
      <Contact />
    </Layout>
  </>
)

export default IndexPage