import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

function animation(level) {
  return keyframes`
  from {
    width: 0%
  }

  to {
    width: ${level}%;
  }
`;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 15px 0;

  ${media.lessThan('large')`
    width: 100%;
    margin: 10px 0;
  `}
`;

export const Name = styled.div`
  width: 80px;
  background-color: ${({ theme }) => theme.orange};
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  ${media.lessThan('large')`
    width: 105px;
  `}
`;

export const Progress = styled.div`
  background-color: ${({ theme }) => theme.brightOrange};
  height: 100%;
  color: white;
  display: flex;
  width: ${({ level }) => `${level}%`};
  justify-content: flex-end;
  align-items: center;
  font-size: 13px;
  padding-right: 10px;
  font-weight: 500;
  animation: ${({ level }) => animation(level)} 1.5s;
`;

export const Bar = styled.div`
  background-color: ${({ theme }) => theme.grey};
  width: 30vw;
  ${media.lessThan('large')`
    width: 100%;
  `}
`;
