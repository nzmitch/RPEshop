import React from 'react'
import { graphql } from 'gatsby'


const IndexPage = ({ data }) => (
  <>
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <h2>{node.body.slice(0,14)}</h2>
      ))}
    </div>
    
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <p>{node.body.slice(14,179)}</p>
      ))}
    </div>
    
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <h2>{node.body.slice(179,196)}</h2>
      ))}
    </div>
    
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <p>{node.body.slice(196,573)}</p>
      ))}
    </div>
    
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <h2>{node.body.slice(573,589)}</h2>
      ))}
    </div>
    
    <div>
      {data.allShopifyPage.edges.map(({ node }) => (
        <p>{node.body.slice(196,573)}</p>
      ))}
    </div>
   
  </>
)

export const query = graphql`
query PolicyQuery {
  allShopifyPage(filter: {id: {glob: "Shopify__Page__Z2lkOi8vc2hvcGlmeS9QYWdlLzUyMjIwMjMxNzU0"}}) {
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
