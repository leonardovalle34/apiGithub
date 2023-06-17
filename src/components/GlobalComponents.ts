import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background: #4f4f4f;
`;

export const InternalDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainInput = styled.input`
  width: 50vw;
  height: 5vh;
  font-size: 1.5rem;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 1.5rem
  color: #fff;
`;

export const ButtonSearch = styled.button`
  border: solid;
  color: #fff;
`;

export const Loading = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 12px solid #f3f3f3;
  border-top: 12px solid #3498db;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
