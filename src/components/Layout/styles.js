import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  display: flex;
  overflow: hidden;
  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const Main = styled.main`
  position: absolute;
  padding: 0 1rem 0 ${({ padding }) => `${padding}rem`};
  width: 100%;
  ${media.lessThan('large')`
    padding: 0;
  `}
`;
