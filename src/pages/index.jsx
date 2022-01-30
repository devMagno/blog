import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
              color
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title, color },
            fields: { slug },
            timeToRead,
          },
        }) => (
          <PostItem
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            background={background}
            color={color}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
