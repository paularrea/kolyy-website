import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";

const BgCollar = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg-collar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1360, quality: 90, webpQuality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const imageData = data.placeholderImage.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <div>{props.children}</div>
    </BackgroundImage>
  );
};

export default BgCollar;
