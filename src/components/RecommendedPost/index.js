import React from 'react';
import propTypes from 'prop-types';

import { Wrapper, Link } from './styles';
import { main } from '../../styles/themes';

const RecommendedPosts = ({ next, previous }) => (
  <Wrapper>
    {previous && (
      <Link
        to={previous.fields.slug}
        cover
        direction="left"
        bg={main.black}
        duration={0.8}
        className="previous"
      >
        {previous.frontmatter.title}
      </Link>
    )}
    {next && (
      <Link
        to={next.fields.slug}
        cover
        direction="right"
        bg={main.black}
        duration={0.8}
        className="next"
      >
        {next.frontmatter.title}
      </Link>
    )}
  </Wrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  }).isRequired,
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  }).isRequired
};

export default RecommendedPosts;
