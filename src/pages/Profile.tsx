import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  MainContainer,
  InternalDiv,
  Loading,
  ProfileImg,
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
          <InternalDiv width="100%">
            <InternalDiv display="flex" flexDirection="column" width="15%">
              <Link to={"/"}>Back</Link>
              <InternalDiv>
                <ProfileImg src={dataFromGithub?.data?.avatar_url}></ProfileImg>
              </InternalDiv>
              <InternalDiv display="flex" flexDirection="column">
                <p>
                  @<strong>{dataFromGithub?.data?.login}</strong>
                </p>
                <p>{dataFromGithub?.data?.name}</p>
              </InternalDiv>
              <InternalDiv>
                <p>{dataFromGithub?.data?.followers}</p>
              </InternalDiv>
              <InternalDiv>
                <p>{dataFromGithub?.data?.following}</p>
              </InternalDiv>
              <InternalDiv>
                <p>{dataFromGithub?.data?.blog}</p>
              </InternalDiv>
              <InternalDiv>
                <p>{dataFromGithub?.data?.location}</p>
              </InternalDiv>
            </InternalDiv>
            <InternalDiv width="70%" backgroundColor="#777272" marginLeft="10%">
              Repoinfo
            </InternalDiv>
          </InternalDiv>
        </>
      )}
    </MainContainer>
  );
}
