import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Image, Email } from './styles';

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

  function handleEmail() {
    return window.open('mailto:wendelfreitasbranco@gmail.com');
  }

  return (
    <Email type="button" onClick={() => handleEmail()}>
      <Image fixed={avatarImage.childImageSharp.fixed} />
    </Email>
  );
};

export default Avatar;
