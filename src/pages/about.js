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

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 5rem 1.5rem;
    overflow: auto;
    height: auto;
  `}
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.brightOrange};
  font-size: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AboutMeWrapper = styled.div`
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
  width: 50%;
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    width: 100%;
    margin: 2rem 0;
  `}
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.orange};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.brightOrange};
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <Wrapper>
      <AboutMeWrapper>
        <Title>Sobre Mim</Title>
        <Description>
          Olá, eu sou Gok... Wendel Freitas, tenho 22 anos e nasci em Uberlândia (Minas Gerais)
          atualmente moro no interior de São Paulo em Bauru. Sou desenvolvedor apaixonado por criar
          e aprender coisas novas, me formei no Colégio Técnico Industrial (CTI - Unesp) em 2016 e
          no ano seguinte comecei minha carreira como Auxiliar de Programação na empresa Scaffold
          Education onde aprendi muito sobre a área e evolui muito profissionalmente, emocionalmente
          e mentalmente. Atualmente trabalho na Up Outsourcing, onde enfrento novos desafios e sigo
          evoluindo. Meu amor pelo desenvolvimento de software só cresceu e enquanto trabalhava eu
          queria evoluir ainda mais, então, comecei a participar ativamente da comunidade, ajudar
          quem sabia menos e aprender com quem sabe mais, dei minha primeira palestra com o foco em
          React Native e desenvolvi diversas aplicações com algumas tecnologias atuais. Adoro falar
          sobre a vida e entender como as pessoas olham e aprendem sobre desenvolvimento, começar a
          entender as pessoas foi o que me manteve &quot;pé no chão&quot; e com ainda mais vontade
          de continuar estudando e escrevendo códigos, pois, descobri maneiras diferentes de
          compartilhar conhecimento e fui retribuído de várias maneiras positivas.
          <br />
          <br />
          Se quiser conversar comigo, tirar dúvidas ou pedir alguma ajuda é só me mandar um e-mail
          em{' '}
          <ExternalLink aria-label="e-mail" href="mailto:wendelfreitasbranco@gmail.com">
            wendelfreitasbranco@gmail.com
          </ExternalLink>
          .
        </Description>
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
