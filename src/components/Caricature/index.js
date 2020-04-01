import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import media from 'styled-media-query';

const CaricatureWrapper = styled(Img)`
  height: 45rem;
  margin-top: 100px;
  width: 40rem;

  ${media.lessThan('small')`
    margin-top: 50px;
    height: 25rem;
    width: 20rem;
  `}

  ${media.between('medium', 'large')`
    margin-top: 50px;
    height: 45rem;
    width: 40rem;
  `}
`;

const CARICATURE_QUERY = graphql`
  query {
    caricatureImage: file(relativePath: { eq: "caricature.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Caricature = () => {
  const { caricatureImage } = useStaticQuery(CARICATURE_QUERY);

  return <CaricatureWrapper alt="Caricature" fluid={caricatureImage.childImageSharp.fluid} />;
};

export default Caricature;
