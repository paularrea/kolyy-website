import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {logo} from "../header.module.scss"
import kolyyLogo from "../../../images/logoverd.png"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logoverd.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return <img src={kolyyLogo} className={logo} alt="brand logo" />
}

export default Logo
