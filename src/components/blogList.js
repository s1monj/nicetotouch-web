import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


const BlogList = () => {
  const data = useStaticQuery(
  graphql`
  query BlogList {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {blog: {eq: true}}} 
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          html
        }
      }
    }
  }
`
)
  const { allMarkdownRemark } = data
  
  return(
  <>
    <main role="main">
      <div className="content">



        <table style="max-width: 500px; margin-left: 50px; border: none">
          <tbody><tr class="fs-no-hover">
            <td style="vertical-align: middle; width:25%; min-width: 150px; padding: 40px; border: none">
              <img src="simon-sq-sm.png" style="border-radius: 50%"/>
            </td>
            <td style="vertical-align: middle; padding-left: 0px; border: none">
              I'm Simon, I develop open source software and live in Brooklyn, New York. Here are some other things I've created.
            </td>
          </tr>
        </tbody></table>



        {allMarkdownRemark.edges.map(({ node }) => (
          <article className="main-article">
            <div className="wrap-content">
              {/*<header className="header-article">
                <h2 className="title-article"><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
                <div className="post-date"><span>{node.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        </header>*/}

              <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
            </div>
          </article>
        ))}
      </div>
    </main>
  </>
  )
}

export default BlogList
