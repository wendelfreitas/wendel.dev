import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';
import Timeline from '../components/Timeline';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  max-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 5rem;

  ${media.lessThan('large')`
    padding: 0;
    overflow: auto;
  `}
`;

const AchievementsPage = () => (
  <Layout padding={0}>
    <SEO title="Conquistas" />
    <Wrapper>
      <Timeline />
    </Wrapper>
  </Layout>
);

export default AchievementsPage;
