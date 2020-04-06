import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const BackButton = styled(AniLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  margin-top: 30px;
  width: 180px;
  justify-content: space-between;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    transition: color 0.5s;
    color: ${({ theme }) => theme.brightOrange};
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  background-color: #222;
  flex-direction: column;
  padding: 0 0 0 4rem;
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;

  ${media.lessThan('large')`
    padding: 0 2rem;

    max-width: 100%;
  `}
`;

export const Header = styled.header`
  color: white;
  max-width: 100vw;
  padding: 3rem 11rem 2rem 11.5rem;
  ${media.lessThan('large')`
    padding: 5rem 0 2rem 1rem;
    margin: 0;

  `}
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 2rem 0;
  color: ${({ theme }) => theme.brightOrange};
  ${media.lessThan('large')`
    padding: 0;
    margin: 2rem 0;

  `}
`;

export const Description = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2;
`;

export const Date = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const Content = styled.section`
  margin: auto;
  max-width: 100vw;
  padding: 2rem 10rem;

  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `}
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2;
    letter-spacing: 0.06rem;
    padding: 0 1.4rem;
    ${media.lessThan('large')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: ${({ theme }) => theme.text};
    border-left: 0.3rem solid ${({ theme }) => theme.brightOrange};
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid ${({ theme }) => theme.orange};
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
    ${media.lessThan('large')`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed ${({ theme }) => theme.brightOrange};
    color: ${({ theme }) => theme.brightOrange};
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: ${({ theme }) => theme.text};
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
