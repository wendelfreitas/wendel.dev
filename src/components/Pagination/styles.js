import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  align-items: center;
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 1.5rem 3rem 1.5rem 6rem;

  justify-content: space-between;
  ${media.lessThan('large')`
    font-size: 1.3rem;
    padding: 1.5rem 2rem;
  `}
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: ${({ theme }) => theme.brightOrange};
    }
  }
`;
