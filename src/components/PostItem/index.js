import React from 'react';
import * as FaIcons from 'react-icons/fa';
import PropTypes from 'prop-types';
import { main } from '../../styles/themes';
import { Link, Wrapper, Image, Informations, Time, Description } from './styles';

function PostItem({ title, description, date, timeToRead, slug, icon, size }) {
  const Icon = FaIcons[icon];
  return (
    <Link cover to={slug} direction="up" bg={main.black} duration={0.6}>
      <Wrapper>
        <Image>
          <Icon size={size} />
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
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  timeToRead: PropTypes.number.isRequired
};

PostItem.defaultProps = {
  size: 40
};

export default PostItem;
