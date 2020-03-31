import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { graphql } from 'gatsby';
import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';

const Wrapper = styled.div`
  position: absolute;
  background-color: #222;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  ${media.lessThan('large')`
  padding: 0
    max-width: 100%;
  `}
`;

export const PostListWrapper = styled.div`
  flex-direction: column;
  width: 100vw;
  display: flex;
  flex: 1;
  padding: 0 0 0 3.8rem;

  ${media.lessThan('large')`
    padding: 3rem 0;
    max-width: 100%;
  `}
`;
const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog/' : `blog/page/${currentPage - 1}`;
  const nextPage = `blog/page/${currentPage + 1}`;
  return (
    <Layout padding={0}>
      <Wrapper>
        <SEO title="Blog" />
        <PostListWrapper>
          {posts.map(
            ({
              node: {
                fields: { slug },
                frontmatter: { title, description, date },
                timeToRead
              }
            }) => (
              <PostItem
                key={slug}
                slug={slug}
                timeToRead={timeToRead}
                title={title}
                description={description}
                date={date}
              />
            )
          )}
        </PostListWrapper>
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`;

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number
  }).isRequired
};

export default BlogList;
