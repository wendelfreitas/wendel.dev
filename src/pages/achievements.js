import styled from 'styled-components';
import React from 'react';
import Layout from '../components/Layout';
import Timeline from '../components/Timeline';
import SEO from '../components/seo';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 5rem;
`;

const AchievementsPage = () => (
  <Layout padding={0}>
    <SEO title="Achievements" />
    <Wrapper>
      <Timeline />
    </Wrapper>
  </Layout>
);

export default AchievementsPage;
