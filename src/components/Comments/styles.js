import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  margin: auto;
  width: 90vw;
  max-width: 100rem;
  padding: 3rem 10rem 3rem;
  ${media.lessThan('large')`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `}
  iframe[src*='ads-iframe'] {
    display: none;
  }
  #disqus_thread {
    a {
      color: ${({ theme }) => theme.orange} !important;
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.orange};
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
  ${media.lessThan('large')`
    font-size: 1.375rem;
  `}
`;
