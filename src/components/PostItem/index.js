import React from 'react';
import { FaReact } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { main } from '../../styles/themes';
import { Link, Wrapper, Image, Informations, Time, Description } from './styles';

const PostItem = ({ title, description, date, timeToRead, slug }) => (
  <Link cover to={slug} direction="up" bg={main.black} duration={0.6}>
    <Wrapper>
      <Image>
        <FaReact size={40} />
      </Image>
      <Informations>
        <Time>
          {date} • {timeToRead} mins de leitura
        </Time>
        <b>{title}</b>
        <Description>{description}</Description>
      </Informations>
    </Wrapper>
  </Link>
);

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired
};

export default PostItem;
