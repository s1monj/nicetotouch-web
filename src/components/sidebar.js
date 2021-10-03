import React from "react"
import { Link } from "gatsby"
import { FaSoundcloud, FaVimeo, FaGithub } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/nicetotouch-logo.png" 
import gatsby from "../images/gatsby-logo.png" 
import ipfs from "../images/ipfs-logo.png" 


const SideBar = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              github
              vimeo
              soundcloud
            }
          }
        }
      }
    `
  )

  const github = site.siteMetadata.social.github
  const vimeo = site.siteMetadata.social.vimeo
  const soundcloud = site.siteMetadata.social.soundcloud

  return (
  <aside className="sidebar">

  <div className="sidebar-container">
    <div>
      <div id="ntt-logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div id="ntt-title-box">
        <Link to="/" id="ntt-title">
          <span class="ntt-title1">nice</span><span class="ntt-title2">to</span><span class="ntt-title3">touch</span>
        </Link>
      </div>
    </div>

    <menu className="sidebar-menu">
      <li className="menu-items"><Link to="/" className="menu-links" activeClassName="active">home</Link></li>
      <li className="menu-items"><Link to="/music" className="menu-links" activeClassName="active">music</Link></li>
      <li className="menu-items"><Link to="https://vsco.co/nicetotouch/gallery" target="_blank" className="menu-links" activeClassName="active">photo</Link></li>
    </menu>

    <div className="btn-group">
      <Link to="/" className="mob-menu-items" activeClassName="active"><button className="navbtn">Home</button></Link>
      <Link to="/about" className="mob-menu-items" activeClassName="active"><button className="navbtn">About</button></Link>
      <Link to="/projects" className="mob-menu-items" activeClassName="active"><button className="navbtn">Projects</button></Link>
      <Link to="/contact" className="mob-menu-items" activeClassName="active"><button className="navbtn">Contact</button></Link>
    </div>

    <div id="ntt-gatsby">
      made with<br/>
      <Link to="https://www.gatsbyjs.com/" target="_blank">
        <img src={gatsby} alt="Gastby" />
      </Link>
    </div>

    <div id="ntt-ipfs">
      decentralized on<br/>
      <Link to="https://ipfs.io/" target="_blank">
        <img src={ipfs} alt="Gastby" />
      </Link>
    </div>

    <div className="sidebar-social">
      <li className="social-items"><a href={github} className="social-links" target="_blank" rel="noopener noreferrer"><FaGithub className="social-icons"/></a></li>
      <li className="social-items"><a href={vimeo} className="social-links" target="_blank" rel="noopener noreferrer"><FaVimeo className="social-icons"/></a></li>
      <li className="social-items"><a href={soundcloud} className="social-links" target="_blank" rel="noopener noreferrer"><FaSoundcloud className="social-icons"/></a></li>
    </div>

  </div>
</aside>
)
}

export default SideBar