import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem
      slug="/slug/"
      category="JS"
      date="15 de julho de 2022"
      timeToRead="5"
      title="JavaScript: Qual a diferença entre Escopo e Contexto?"
      description="Alguns conceitos do JavaScript são um pouco confusos para iniciantes. Um muito recorrente saber a diferença entre Escopo e Contexto…"
      background="#efd81d"
      color="black"
    />
  </Layout>
)

export default IndexPage
