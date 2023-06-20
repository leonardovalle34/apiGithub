import { BsPeopleFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillSkipBackwardBtnFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { MdInsertLink } from "react-icons/md";
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
            <InternalDiv display="flex" flexDirection="column" width="20%">
              <Link to={"/"}>
                <BsFillSkipBackwardBtnFill />
              </Link>
              <InternalDiv>
                <ProfileImg src={dataFromGithub?.data?.avatar_url}></ProfileImg>
              </InternalDiv>
              <InternalDiv>
                <p>
                  <MdPersonPin />
                  <strong>{dataFromGithub?.data?.login}</strong>
                </p>
              </InternalDiv>
              <InternalDiv>
                <p>
                  <BsPersonCircle />
                  {dataFromGithub?.data?.name}
                </p>
              </InternalDiv>
              <InternalDiv>
                <p>
                  <BsPeopleFill />
                  {dataFromGithub?.data?.followers} Followers
                </p>
              </InternalDiv>
              <InternalDiv>
                <p>
                  <BsPeopleFill />
                  {dataFromGithub?.data?.following} Following
                </p>
              </InternalDiv>
              <InternalDiv>
                <p>
                  <MdInsertLink /> {dataFromGithub?.data?.blog}
                </p>
              </InternalDiv>
              <InternalDiv>
                <p>
                  <MdLocationPin /> {dataFromGithub?.data?.location}
                </p>
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
