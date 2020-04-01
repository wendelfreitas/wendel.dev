import styled from 'styled-components';
import React from 'react';
import media from 'styled-media-query';
import Layout from '../components/Layout';
import Skill from '../components/Skill';
import SEO from '../components/seo';
import personal from '../utils/personal';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding-left: 3rem;

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 5rem 1.5rem;
    align-items: center;
    overflow: auto;
  `}
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.brightOrange};
  font-size: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  text-align: justify;

  ${media.lessThan('large')`
      max-width: 100%;
  `}
`;

const Description = styled.p`
  color: white;
  margin-top: 15px;
  font-weight: 500;
  line-height: 1.5;
`;

const SkillWrapper = styled.div`
  height: 100vh;
  margin-top: 0rem;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${media.lessThan('large')`
    width: 100%;
    margin: 2rem 0;
  `}
`;

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <Wrapper>
      <AboutMeWrapper>
        <Title>Sobre Mim</Title>
        <Description>{personal.description}</Description>
      </AboutMeWrapper>
      <SkillWrapper>
        {personal.skills.map((skill) => (
          <Skill key={skill.name} hability={skill} />
        ))}
      </SkillWrapper>
    </Wrapper>
  </Layout>
);

export default AboutPage;
