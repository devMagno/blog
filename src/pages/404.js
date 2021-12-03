import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>404</h1>
      <p>Oops... there's nothing here!</p>
    </Layout>
  )
}

export default NotFoundPage
