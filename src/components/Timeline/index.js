import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaStar, FaGraduationCap, FaReact, FaMicrophoneAlt } from 'react-icons/fa';
import { IoLogoGameControllerA } from 'react-icons/io';
import { DiUnitySmall } from 'react-icons/di';
import media from 'styled-media-query';
import { MdWork } from 'react-icons/md';
import styled from 'styled-components';
import 'react-vertical-timeline-component/style.min.css';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;

  ${media.lessThan('large')`
    padding: 3rem 0 0 0;

  `}
  .vertical-timeline-element-date {
    color: white;

    ${media.lessThan('large')`
      color: black;
      margin-top: 15px;
    `}
  }
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 7px 0;
  color: ${({ color }) => color || 'white'};
  font-size: 20px;
`;

const styles = {
  content: { background: '#f69723', color: 'white' },
  border: { borderTop: '5px solid #f69723' },
  arrow: { borderRight: '7px solid #f69723' }
};

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.orange};
  text-decoration: none;
`;

const Timeline = () => (
  <Wrapper>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={styles.content}
        contentArrowStyle={styles.arrow}
        date="atualmente"
        iconStyle={styles.content}
        icon={<MdWork />}
      >
        <Title>Up Outsourcing!</Title>
        <h4>Bauru, São Paulo</h4>
        <p>
          Desenvolvedor PHP e ReactJS, trabalhando com um desafio na área de Engenharia Civil
          utilizando Symfony.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<FaReact />}
      >
        <Title color="black">Animavita</Title>
        <h4 className="vertical-timeline-element-subtitle">
          React Native, GraphQL, Apollo, NodeJS e MongoDB
        </h4>
        <p>
          Meu primerio aplicativo open source, Animavita é um projeto para ajudar os animais a serem
          adotados e resgatados. Usa uma stack de tecnologias modernas e serviços como notificações
          push. Você pode ver todo meu trabalho acessando o repositório do Animavita no GitHub{' '}
          <ExternalLink
            aria-label="animavita"
            href="https://github.com/wendelfreitas/animavita"
            target="__blank"
          >
            clicando aqui
          </ExternalLink>
          .
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<FaMicrophoneAlt />}
      >
        <Title color="black">Palestra sobre React Native</Title>
        <h4 className="vertical-timeline-element-subtitle">NeoAssist, Bauru - SP</h4>
        <p>
          Tenho problemas em falar em público, não posso negar, pra tentar amenizar um pouco isso
          resolvi realizar o sonho de palestrar. Foi então que em 30/10/2018 realizei minha primeira
          palestra pelo Dev.talks em Bauru sobre React Native, você pode acessar o link dos slides{' '}
          <ExternalLink
            aria-label="palestra"
            target="__blank"
            href="https://devtalksbauru.github.io/posts/23-introducao-ao-universo-react-native"
          >
            clicando aqui
          </ExternalLink>
          .
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017-2019"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<MdWork />}
      >
        <Title color="black">Scaffold Education</Title>
        <h4 className="vertical-timeline-element-subtitle">Bauru, São Paulo</h4>
        <p>
          Meu primeiro emprego, atuando como desenvolvedor PHP com foco em laravel de uma plataforma
          de aprendizagem à distância, trabalhei com micro-serviços e tive meu primeiro contato com
          ReactJS.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<DiUnitySmall />}
      >
        <Title color="black">Soloquiz</Title>
        <h4 className="vertical-timeline-element-subtitle">Unity</h4>
        <p>
          Após finalizar o CTI, decidi criar meu segundo jogo e assim como This Mig!, este também
          foi desenvolvido em C# na game engine Unity. Soloquiz foi um trivia game com perguntas e
          respostas do mundo de League of Legends, com um sistema de login via facebook para salvar
          os ranking.
        </p>
        <br />
        <ExternalLink
          aria-label="Soloquiz!"
          href="https://miro.medium.com/max/300/1*TU5v1MO5YJ9yTFlbinsuVA.png"
          target="__blank"
        >
          Clique aqui para visualizar a imagem do jogo
        </ExternalLink>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<DiUnitySmall />}
      >
        <Title color="black">This Mig!</Title>
        <h4 className="vertical-timeline-element-subtitle">Unity</h4>
        <p>
          No último ano do CTI eu queria muito por meus conhecimentos à prova, então, decidi fazer o
          meu primeiro jogo. This Mig! (This must be a impossible game!) é um jogo de infinity fall
          em pixel art desenvolvido em C# com a plataforma Unity. E devo dizer que foi um jogo que
          fazia qualquer um ficar nervoso.
        </p>
        <br />
        <ExternalLink
          aria-label="This Mig!"
          href="https://miro.medium.com/max/300/1*rFmmyMOaYHq2ScfAL9mE-g.jpeg"
          target="__blank"
        >
          Clique aqui para visualizar a imagem do jogo
        </ExternalLink>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014 - 2016"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<FaGraduationCap />}
      >
        <Title color="black">Colégio Técnico Industrial (CTI - Unesp)</Title>

        <h4 className="vertical-timeline-element-subtitle">Bauru, São Paulo</h4>
        <p>
          Amigos eu achei que sabia programar, foi ai que eu descobri que eu ia tomar muito tapa na
          cara nessa vida. Comecei meus estudos no CTI em 2014, onde toda minha base de conhecimento
          foi construída e onde muitas amizades foram feitas, terminei o curso e me formei em 2016.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2012 - 2013"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<IoLogoGameControllerA />}
      >
        <Title color="black">Hello World</Title>
        <h4 className="vertical-timeline-element-subtitle">Mundo RPG Maker</h4>

        <p>
          Meu primeiro contato com o universo dos códigos, iniciei no mundo do desenvolvimento como
          criador de jogos usando RPG Maker XP e programando em RGSS.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  </Wrapper>
);

export default Timeline;
