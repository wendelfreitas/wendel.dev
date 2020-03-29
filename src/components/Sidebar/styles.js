import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const Wrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #181818;
  background: #181818;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  padding: 2rem 0 1rem 0;
  color: #4d4d4e;
  text-align: center;
  width: 4rem;
  z-index: 10;

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: row;
    height: 3rem;
    padding: 0.3rem 2rem;
    width: 100%;
  `}
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 25%;
  ${media.lessThan('large')`
    flex-direction: row;
    padding: 1rem;
    height: 100%;
    align-items: center;
    width: 100%;
  `}
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 150px;
  align-items: center;

  ${media.lessThan('large')`
      display: none;
  `}
`;

export const Link = styled(AniLink)`
  color: #4d4d4e;
`;

export const LinkItem = styled.div`
  &:hover {
    color: #dd7e09;
    cursor: pointer;
  }

  .active {
    color: #dd7e09;
  }
`;
