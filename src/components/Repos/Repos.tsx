/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";

import { selectedReposData } from "../../redux/dataSlice";
import {
  InternalDivGrid,
  ReposCard,
  Link,
  TextInsideCard,
} from "./reposStyledComponents";

export default function Repos() {
  const reposData = useSelector(selectedReposData);
  console.log(reposData) + "teste aki";

  return (
    <InternalDivGrid>
      {reposData?.data?.map((el: any) => {
        return (
          <ReposCard>
            <TextInsideCard>Name: {el.name}</TextInsideCard>
            <TextInsideCard>Id: {el.id}</TextInsideCard>
            <TextInsideCard textAlign="right">
              <Link href={el.html_url} target="_blank" rel="noreferrer">
                VER
              </Link>
            </TextInsideCard>
          </ReposCard>
        );
      })}
    </InternalDivGrid>
  );
}
