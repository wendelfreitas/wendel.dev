import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaStar, FaGraduationCap, FaReact } from 'react-icons/fa';
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

const Timeline = () => (
  <Wrapper>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={styles.content}
        contentArrowStyle={styles.arrow}
        date="atualmente"
        iconStyle={styles.content}
        icon={<FaReact />}
      >
        <Title>Up Outsourcing!</Title>
        <h4>Bauru, São Paulo</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<MdWork />}
      >
        <Title color="black">Scaffold Education</Title>
        <h4 className="vertical-timeline-element-subtitle">Bauru, São Paulo</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
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
          meu primeiro jogo. This Mig! é um infinity fall em pixel art que fazia qualquer um ficar
          nervoso. Por mais que ele era um infinity fall, ele tinha um final que era um easter egg,
          e à propósito, ninguém encontrou.
        </p>
        <br />
        <a
          ara-label="This Mig!"
          href="https://miro.medium.com/max/300/1*rFmmyMOaYHq2ScfAL9mE-g.jpeg"
          target="__blank"
        >
          Visualizar imagem do jogo
        </a>
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
