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
import { simulateFetchApi } from "./redux/dataApi";

function App() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const getData = async () => {
    return await dispatch(simulateFetchApi(user));
  };

  return (
    <MainContainer>
      <div>
        <Title>API Github</Title>
        <a href="#" rel="noreferrer">
          <img src={ghLogo} className="logo" alt="ghLogo" />
        </a>
        <InternalDiv>
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
      </div>
    </MainContainer>
  );
}

export default App;
