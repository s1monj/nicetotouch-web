import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import author from "../images/simon-sq-sm.png"


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

        <table id="ntt-author">
          <tbody>
            <tr>
              <td id="ntt-author-imgbox">
                <img src={author} alt="Photo" />
              </td>
              <td id="ntt-author-txtbox">
                I'm Simon, I'm a software developer living in Brooklyn, New York.
                Here are some other things I've created. Get in touch: <span class="ntt-white">its</span> at <span class="ntt-white">nicetotouch</span> dot <span class="ntt-white">com</span>
              </td>
            </tr>
          </tbody>
        </table>

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
