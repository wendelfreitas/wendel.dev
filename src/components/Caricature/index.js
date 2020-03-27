import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CARICATURE_QUERY = graphql`
  query {
    caricatureImage: file(relativePath: { eq: "caricature.png" }) {
      childImageSharp {
        fixed(width: 650, height: 650) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Caricature = () => {
  const { caricatureImage } = useStaticQuery(CARICATURE_QUERY);

  return <Img fixed={caricatureImage.childImageSharp.fixed} />;
};

export default Caricature;
