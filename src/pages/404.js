import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 150px;
    color: ${({ theme }) => theme.orange};
    padding: 0;
    margin: 20px;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    font-style: italic;
    font-size: 20px;
  }
`;

const NotFoundPage = () => (
  <Layout padding={2}>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>404</h1>
      <p>Já que você chegou até aqui, vou te contar dois segredos:</p>
      <br />
      <p>Eu tenho medo de agulhas e ainda não pisei na lua...</p>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
