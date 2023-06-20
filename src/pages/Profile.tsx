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
  TextSpan,
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
            <InternalDiv display="flex" flexDirection="column" width="30%">
              <Link to={"/"}>
                <BsFillSkipBackwardBtnFill />
              </Link>
              <InternalDiv>
                <ProfileImg src={dataFromGithub?.data?.avatar_url}></ProfileImg>
              </InternalDiv>
              <InternalDiv>
                <TextSpan>
                  <MdPersonPin />
                  <strong>{dataFromGithub?.data?.login}</strong>
                </TextSpan>
              </InternalDiv>
              <InternalDiv>
                <TextSpan>
                  <BsPersonCircle />
                  {dataFromGithub?.data?.name}
                </TextSpan>
              </InternalDiv>
              <InternalDiv>
                <TextSpan>
                  <BsPeopleFill />
                  {dataFromGithub?.data?.followers} Followers
                </TextSpan>
              </InternalDiv>
              <InternalDiv>
                <TextSpan>
                  <BsPeopleFill />
                  {dataFromGithub?.data?.following} Following
                </TextSpan>
              </InternalDiv>
              <InternalDiv>
                <TextSpan>
                  <MdInsertLink /> {dataFromGithub?.data?.blog}
                </TextSpan>
              </InternalDiv>
              <InternalDiv>
                <TextSpan>
                  <MdLocationPin /> {dataFromGithub?.data?.location}
                </TextSpan>
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
