import styled from 'styled-components';
import Img from 'gatsby-image';
import media from 'styled-media-query';

export const Image = styled(Img)`
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const Email = styled.button`
  background-color: #181818;
  border: none;
  width: 60px;
  height: 60px;

  ${media.lessThan('large')`
    display: none;
  `}
`;
