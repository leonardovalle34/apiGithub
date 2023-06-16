import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MainContainer, InternalDiv } from "../components/GlobalComponents";
import dataSlice from "../redux/dataSlice";

export default function Profile() {
  const dataFromGithub = useSelector(dataSlice);

  console.log(dataSlice);
  return (
    <MainContainer>
      <InternalDiv>
        <img src={dataFromGithub.data.avatar_url}></img>
      </InternalDiv>
      <InternalDiv>
        <p>{dataFromGithub.data.bio}</p>
      </InternalDiv>
      <InternalDiv>
        <p>{dataFromGithub.data.followers}</p>
      </InternalDiv>
      <InternalDiv>
        <p>{dataFromGithub.data.following}</p>
      </InternalDiv>
      <InternalDiv>
        <p>{dataFromGithub.data.login}</p>
      </InternalDiv>
      <Link to={"/"}>Back</Link>
    </MainContainer>
  );
}
