import React from 'react'
import { graphql } from 'gatsby'


const IndexPage = ({ data }) => (
  <>
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <h2>{node.body.slice(4,24)}</h2>
      ))}
    </div>
    
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <p>{node.body.slice(39,179)}</p>
      ))}
    </div>
    
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <p>{node.body.slice(200,242)}</p>
      ))}
    </div>
  </>
)

export const query = graphql`
query AboutQuery {
  allShopifyPage(filter: {id: {glob: "Shopify__Page__Z2lkOi8vc2hvcGlmeS9QYWdlLzUyMjIwMTk4OTg2"}}) {
    edges {
      node {
        body
        id
      }
    }
  }
}
`

export default IndexPage
