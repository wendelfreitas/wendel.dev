import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Wrapper } from './styles';

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <Wrapper>
    {!isFirst && (
      <AniLink to={prevPage} cover direction="left" bg="#222" duration={0.6}>
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink to={nextPage} cover direction="right" bg="#222" duration={0.6}>
        proxima página →
      </AniLink>
    )}
  </Wrapper>
);

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string.isRequired,
  nextPage: PropTypes.string.isRequired
};

export default Pagination;
