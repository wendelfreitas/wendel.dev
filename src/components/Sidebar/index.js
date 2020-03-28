import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import {} from 'react-icons/ai';
import Avatar from '../Avatar';
import links from './content';
import { Wrapper } from './styles';

const Default = `
  &:hover {
    color: #dd7e09;
    cursor: pointer;
  }
`;

const LinkItem = styled.div`
  &:hover {
    color: #dd7e09;
    cursor: pointer;
  }

  .active {
    color: #dd7e09;
  }
`;

const Twitter = styled(FaTwitter)`
  ${Default}
`;
const Facebook = styled(FaFacebookF)`
  ${Default}
`;
const Linkedin = styled(FaLinkedinIn)`
  ${Default}
`;
const Github = styled(FiGithub)`
  ${Default}
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 190px;
  align-items: center;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 150px;

  align-items: center;
`;

const Link = styled(AniLink)`
  color: #4d4d4e;
`;

const Sidebar = () => {
  function handleSocialNetwork(url) {
    return window.open(url, '__blank');
  }

  return (
    <Wrapper>
      <Avatar />
      <Navigation>
        {links.map((link) => (
          <LinkItem key={link.id}>
            <Link cover to={link.url} direction="up" bg="#181818" duration={0.6} activeClassName="active">
              {link.icon}
            </Link>
          </LinkItem>
        ))}
      </Navigation>
      <Social>
        <Twitter onClick={() => handleSocialNetwork('https://twitter.com/hey_wendelzinho')} />
        <Facebook onClick={() => handleSocialNetwork('https://www.facebook.com/wendel.freitas.90/')} />
        <Linkedin onClick={() => handleSocialNetwork('https://twitter.com/hey_wendelzinho')} />
        <Github onClick={() => handleSocialNetwork('https://github.com/wendelfreitas')} />
      </Social>
    </Wrapper>
  );
};

export default Sidebar;
