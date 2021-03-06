import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BlackCollar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "black-blue-collar.png" }) {
        childImageSharp {
          fluid(maxWidth: 1360, quality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return (
    <Img
      style={{ height: "100%", width: "100%" }}
      imgStyle={{ objectFit: "cover" }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default BlackCollar;
