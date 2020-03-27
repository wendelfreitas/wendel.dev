import React from 'react';
import {
  FaRegUser,
  FaTwitter,
  FaLinkedinIn,
  FaSuperpowers,
  FaFacebookF,
} from 'react-icons/fa';
import { FiGithub, FiBook } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineTrophy } from 'react-icons/ai';
import Avatar from '../Avatar';
import styled from 'styled-components';
import { Wrapper } from './styles';

const Default = `
  &:hover {
    color: #dd7e09;
    cursor: pointer;
  }
`;

const Home = styled(AiOutlineHome)`
  ${Default}
`;

const Profile = styled(FaRegUser)`
  ${Default}
`;

const Skills = styled(FaSuperpowers)`
  ${Default}
`;

const Blog = styled(FiBook)`
  ${Default}
`;

const Achievements = styled(AiOutlineTrophy)`
  ${Default}
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

const Sidebar = () => {
  function handleSocialNetwork(url) {
    return window.open(url, '__blank');
  }

  return (
    <Wrapper>
      <Avatar />
      <Navigation>
        <Home size="25" />
        <Profile size="20" />
        <Achievements size="25" />
        <Skills size="20" />
        <Blog size="25" />
      </Navigation>
      <Social>
        <Twitter
          onClick={() =>
            handleSocialNetwork('https://twitter.com/hey_wendelzinho')
          }
        />
        <Facebook
          onClick={() =>
            handleSocialNetwork('https://www.facebook.com/wendel.freitas.90/')
          }
        />
        <Linkedin
          onClick={() =>
            handleSocialNetwork('https://twitter.com/hey_wendelzinho')
          }
        />
        <Github
          onClick={() =>
            handleSocialNetwork('https://github.com/wendelfreitas')
          }
        />
      </Social>
    </Wrapper>
  );
};

export default Sidebar;
