import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Name, Progress, Bar } from './styles';

function Skill({ ability }) {
  return (
    <Wrapper>
      <Name>
        <b>{ability.name}</b>
      </Name>
      <Bar>
        <Progress level={ability.level} />
      </Bar>
    </Wrapper>
  );
}

Skill.propTypes = {
  ability: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number
  }).isRequired
};

export default Skill;
