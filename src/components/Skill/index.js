import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Name, Progress, Bar } from './styles';

const Skill = ({ hability }) => (
  <Wrapper>
    <Name>
      <b>{hability.name}</b>
    </Name>
    <Bar>
      <Progress level={hability.level} />
    </Bar>
  </Wrapper>
);

Skill.propTypes = {
  hability: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number
  }).isRequired
};

export default Skill;
