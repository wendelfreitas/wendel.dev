import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const Wrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.brightOrange};
  border-top: 1px solid ${({ theme }) => theme.brightOrange};
  display: flex;
`;

export const Link = styled(AniLink)`
  align-items: center;
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 2rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  ${media.lessThan('large')`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
  &:hover {
    background: ${({ theme }) => theme.orange};
  }
  &.previous {
    border-right: 1px solid ${({ theme }) => theme.orange};
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
