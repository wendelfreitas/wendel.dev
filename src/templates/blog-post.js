import React from 'react';
import { graphql } from 'gatsby';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import {
  Wrapper,
  Header,
  Date,
  Description,
  Title,
  Content,
  BackButton
} from '../components/Post/styles';
import { main } from '../styles/themes';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout padding={0}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
      <Wrapper>
        <Header>
          <Date>
            {post.frontmatter.date} • {post.timeToRead} min de leitura
          </Date>
          <BackButton cover to="/blog" direction="up" bg={main.black} duration={0.6}>
            <FaLongArrowAltLeft size={30} /> Voltar para listagem
          </BackButton>
          <Title>{post.frontmatter.title}</Title>
          <Description>{post.frontmatter.description}</Description>
        </Header>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string
      }),
      html: PropTypes.string,
      timeToRead: PropTypes.number
    })
  }).isRequired
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
