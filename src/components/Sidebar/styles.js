import styled from 'styled-components';
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
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 150px;
  align-items: center;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 150px;

  align-items: center;
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
