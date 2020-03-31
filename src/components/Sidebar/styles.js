import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const Wrapper = styled.aside`
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  padding: 2rem 0 1rem 0;
  color: ${({ theme }) => theme.grey};
  text-align: center;
  width: 4rem;

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

  a {
    color: ${({ theme }) => theme.grey};
  }
`;

export const Link = styled(AniLink)`
  color: ${({ theme }) => theme.grey};
`;

export const LinkItem = styled.div`
  &:hover {
    color: ${({ theme }) => theme.orange};
    cursor: pointer;
  }

  .active {
    color: ${({ theme }) => theme.orange};
  }
`;
