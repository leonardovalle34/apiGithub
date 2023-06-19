/* eslint-disable @typescript-eslint/naming-convention */
import { CSSProperties } from "react";
import styled from "styled-components";

interface StyledDivProps {
  display?: CSSProperties["display"];
  flexDirection?: CSSProperties["flexDirection"];
  width?: CSSProperties["width"];
  backgroundColor?: CSSProperties["backgroundColor"];
  marginLeft?: CSSProperties["marginLeft"];
}

export const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  padding: 16px;
  background: #4f4f4f;
`;

export const InternalDiv = styled.div<StyledDivProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#4f4f4f"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "3px")};
  justify-content: center;
}
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

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 100px;
`;
