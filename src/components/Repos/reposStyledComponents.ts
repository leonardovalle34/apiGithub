/* eslint-disable @typescript-eslint/naming-convention */
import { CSSProperties } from "react";
import styled from "styled-components";

export const InternalDivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  width: 100%;
  background-color: #777272;
  margin-left: 10%;

  @media screen and (max-width: 818px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

interface StyledDivProps {
  textAlign?: CSSProperties["textAlign"];
}

export const ReposCard = styled.div`
  width: auto
  background-color: #4f4f4f;
  border-left: 11.5px solid yellow;
  border-right: 1px solid grey;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin: 10%
  padding: 12px;
  background: #fff;
  color: black;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 12px;
`;

export const TextInsideCard = styled.p<StyledDivProps>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;

export const Link = styled.a`
  text-align: right;
  color: black;
  margin-right: 2px;
  &:hover {
    color: grey;
  }
`;
