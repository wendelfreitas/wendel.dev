import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Caricature from '../components/Caricature';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
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
  margin: 20px 0 0 0;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div>
        <Title size={60}>Olá, </Title>
        <Title size={50}>
          Eu sou <Name>Wendel Freitas</Name>,
        </Title>
        <Title size={55}>Software Developer.</Title>
        <Subtitle>
          Extremamente curioso, viciado em bleeding edge e apaixonado por open
          source
        </Subtitle>
      </div>
      <div>
        <Caricature />
      </div>
    </Wrapper>
  </Layout>
);

export default IndexPage;
