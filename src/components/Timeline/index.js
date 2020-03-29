import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaStar, FaGraduationCap, FaReact } from 'react-icons/fa';
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
        date="2011 - present"
        iconStyle={styles.content}
        icon={<FaReact />}
      >
        <Title>Lorem Ipsum</Title>
        <h4>Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<DiUnitySmall />}
      >
        <Title color="black">Scaffold Education</Title>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<FaGraduationCap />}
      >
        <Title color="black">Scaffold Education</Title>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} icon={<FaStar />} />
    </VerticalTimeline>
  </Wrapper>
);

export default Timeline;
