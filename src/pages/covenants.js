import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Helmet from 'react-helmet'
import Layout from '../components/layout'

export default class Covenants extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div>
          <h2>This is where the covenants belong.</h2>
          <p>Tell me what I need to know!</p>
        </div>
      </Layout>
    )
  }
}


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
