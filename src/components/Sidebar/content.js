import React from 'react';
import { FaRegUser, FaSuperpowers } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineTrophy } from 'react-icons/ai';

const Default = `
  &:hover {
    color: #dd7e09;
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

const Skills = styled(FaSuperpowers)`
  ${Default}
`;

const Blog = styled(FiBook)`
  ${Default}
`;

export default [
  {
    id: 'Home',
    icon: <Home size="25" />,
    url: '/'
  },
  {
    id: 'about',
    icon: <About size="20" />,
    url: '/about'
  },
  {
    id: 'Achievements',
    icon: <Achievements size="25" />,
    url: '/achievements'
  },
  {
    id: 'Skills',
    icon: <Skills size="20" />,
    url: '/skills'
  },
  {
    id: 'Blog',
    icon: <Blog size="25" />,
    url: '/blog'
  }
];
