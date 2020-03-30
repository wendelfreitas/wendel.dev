import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useStaticQuery, graphql } from 'gatsby';
import { FaReact } from 'react-icons/fa';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
  position: absolute;
  background-color: #222;
  flex-direction: column;
  padding: 0 0 0 3.8rem;
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  ${media.lessThan('large')`
    padding: 3rem 0;
    max-width: 100%;
  `}
`;

const Teste = styled.div`
  ${media.lessThan('large')`
      display: inline-block;
  `}
`;

const PostWrapper = styled.div`
  display: flex;
  color: white;
  height: auto;
  padding: 1.5rem 3rem;
  border-bottom: 0.1px solid ${({ theme }) => theme.grey};
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.brightOrange};
  }

  ${media.lessThan('large')`
      padding: 2rem 2rem;
  `}
`;

const PostImage = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${({ theme }) => theme.brightOrange};
  border-radius: 50%;
  border: 3px solid white;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white !important;
`;

const PostData = styled.div`
  padding: 0 0 0 1rem;
  display: flex;
  flex-direction: column;
  height: 60%;
  max-width: 75%;
  justify-content: space-between;
  b {
    font-size: 25px;
    margin: 10px 0;
    font-weight: bold;
  }
`;

const Time = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: white !important;
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: white !important;
`;

const POSTS_QUERY = graphql`
  query PostList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "MM[/]DD[/]Y")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`;

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(POSTS_QUERY);
  const posts = allMarkdownRemark.edges;
  return (
    <Layout padding={0}>
      <Wrapper>
        <SEO title="Blog" />
        {posts.map(({ node: { frontmatter: { title, description, date }, timeToRead } }) => (
          <Teste>
            <PostWrapper>
              <PostImage>
                <FaReact size={40} />
              </PostImage>
              <PostData>
                <Time>
                  {date} • {timeToRead} mins de leitura
                </Time>
                <b>{title}</b>
                <Description>{description}</Description>
              </PostData>
            </PostWrapper>
          </Teste>
        ))}
      </Wrapper>
    </Layout>
  );
};
export default BlogPage;
