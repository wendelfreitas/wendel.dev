import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  width: 80px;
  background-color: #de7d09;
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const Progress = styled.div`
  background-color: #f69723;
  width: ${({ level }) => `${level}%`};
  height: 100%;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 13px;
  padding-right: 10px;
  font-weight: 500;
`;

export const Bar = styled.div`
  background-color: #4d4d4e;
  width: 30vw;
`;
