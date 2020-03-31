import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const Link = styled(AniLink)`
  text-decoration: none;
  ${media.lessThan('large')`
      display: inline-block;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  color: white;
  height: auto;
  padding: 1.65rem 3rem;
  border-bottom: 0.1px solid ${({ theme }) => theme.grey};
  align-items: center;

  &:hover {
    cursor: pointer;
    transition: color 0.5s;
    color: ${({ theme }) => theme.brightOrange};
  }

  ${media.lessThan('large')`
      padding: 2rem 2rem;
  `}
`;

export const Image = styled.div`
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

export const Informations = styled.div`
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

export const Time = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: white !important;
`;
export const Description = styled.p`
  font-size: 16px;
  color: white !important;
`;
