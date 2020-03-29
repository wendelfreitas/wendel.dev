import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import author from '../utils/personal';
import Caricature from '../components/Caricature';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  ${media.lessThan('small')`
    flex-direction: column;
    padding: 5rem 1.5rem;
    max-width: 100vw;
    width: 100vw;
    align-items: center;
    height: 100vh;
    overflow: auto;
  `}

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 7rem 1.5rem;
    max-width: 100vw;
    width: 100vw;
    align-items: center;
    height: 100vh;
    overflow: auto;
  `}
`;

const Title = styled.h1`
  color: white;
  font-size: ${({ size }) => `${size}px` || '70px'};
  margin: 0;
`;

const Name = styled.b`
  color: #f69723;
  font-size: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0 0 0;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div>
        <Title size={60}>Olá, </Title>
        <Title size={50}>
          Eu sou <Name>{author.name}</Name>,
        </Title>
        <Title size={55}>{author.position}</Title>
        <Subtitle>{author.subtitle}</Subtitle>
      </div>
      <div>
        <Caricature />
      </div>
    </Wrapper>
  </Layout>
);

export default IndexPage;
