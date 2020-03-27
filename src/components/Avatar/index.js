import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Image } from './styles';

const AVATAR_QUERY = graphql`
  query {
    avatarImage: file(relativePath: { eq: "avatar.jpeg" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Avatar = () => {
  const { avatarImage } = useStaticQuery(AVATAR_QUERY);

  return <Image fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;
