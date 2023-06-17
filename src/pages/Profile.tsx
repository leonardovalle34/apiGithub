import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  MainContainer,
  InternalDiv,
  Loading,
} from "../components/GlobalComponents";
import { selectedData, loadingState } from "../redux/dataSlice";

export default function Profile() {
  const dataFromGithub = useSelector(selectedData);
  const loading = useSelector(loadingState);

  return (
    <MainContainer>
      {loading == true && <Loading />}
      {loading == false && (
        <>
          <InternalDiv>
            <img src={dataFromGithub?.data?.data?.avatar_url}></img>
          </InternalDiv>
          <InternalDiv>
            <p>{dataFromGithub?.data?.data?.bio}</p>
          </InternalDiv>
          <InternalDiv>
            <p>{dataFromGithub?.data?.data?.followers}</p>
          </InternalDiv>
          <InternalDiv>
            <p>{dataFromGithub?.data?.data?.following}</p>
          </InternalDiv>
          <InternalDiv>
            <p>{dataFromGithub?.data?.data?.login}</p>
          </InternalDiv>
        </>
      )}
      <Link to={"/"}>Back</Link>
    </MainContainer>
  );
}
