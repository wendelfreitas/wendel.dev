import React from 'react';
import { FiBook, FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineTrophy } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaRegUser } from 'react-icons/fa';
import { main } from '../../styles/themes';

const Default = `
  &:hover {
    color: ${main.orange};
    cursor: pointer;
  }
`;

const Home = styled(AiOutlineHome)`
  ${Default}
`;

const About = styled(FaRegUser)`
  ${Default}
`;

const Achievements = styled(AiOutlineTrophy)`
  ${Default}
`;

const Blog = styled(FiBook)`
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

export const links = [
  {
    id: 'Home',
    icon: <Home size="25" />,
    url: '/'
  },
  {
    id: 'About',
    icon: <About size="20" />,
    url: '/about'
  },
  {
    id: 'Achievements',
    icon: <Achievements size="25" />,
    url: '/achievements'
  },
  {
    id: 'Blog',
    icon: <Blog size="25" />,
    url: '/blog/'
  }
];

export const networks = [
  {
    id: 'Twitter',
    icon: <Twitter />,
    url: 'https://twitter.com/hey_wendelzinho'
  },
  {
    id: 'Facebook',
    icon: <Facebook />,
    url: 'https://www.facebook.com/wendel.freitas.90/'
  },
  {
    id: 'Linkedin',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/wendelfb/'
  },
  {
    id: 'Github',
    icon: <Github />,
    url: 'https://github.com/wendelfreitas'
  }
];
