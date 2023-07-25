/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import-helpers/order-imports */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ghLogo from "./assets/imgs/gh.png";

import "./App.css";
import {
  MainContainer,
  MainInput,
  Title,
  ButtonSearch,
  InternalDiv,
} from "./components/GlobalComponents";

import { BsSearch } from "react-icons/bs";
import { fetchDataAsync, fetchDataAsyncRepos } from "./redux/dataAction";
import { AppDispatch, RootState } from "./redux/store";

function App() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  type FetchDataAsyncAction = ReturnType<typeof fetchDataAsync>;

  const getData = async () => {
    const response: FetchDataAsyncAction = dispatch(fetchDataAsync(user));
    const responseRepos = dispatch(fetchDataAsyncRepos(user));
  };

  return (
    <MainContainer>
      <InternalDiv display="flex" flexDirection="column">
        <Title>API Github</Title>
        <a href="#" rel="noreferrer">
          <img src={ghLogo} className="logo" alt="ghLogo" />
        </a>
        <InternalDiv width="100%" justifyContent="center" marginLeft="auto">
          <MainInput
            onChange={(el: any) => setUser(el.target.value)}
            placeholder="Digite o nome do perfil"
            value={user}
          />
          <Link to={`/perfil`}>
            <ButtonSearch onClick={() => getData()}>
              <BsSearch />
            </ButtonSearch>
          </Link>
        </InternalDiv>
      </InternalDiv>
    </MainContainer>
  );
}

export default App;
