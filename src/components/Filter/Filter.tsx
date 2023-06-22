import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectedReposData } from "../../redux/dataSlice";

export default function Filter() {
  const repos = useSelector(selectedReposData);
  const arrOfLangs: string[] = [];
  let arrOfFilters: string[] = [];

  const organizingArr = () => {
    arrOfFilters = arrOfLangs.filter((el, i) => {
      arrOfLangs.indexOf(el) === i;
    });
    console.log(arrOfFilters);
  };
  const createArr = () => {
    repos?.data?.map((el: any) => {
      arrOfLangs.push(el.language);
    });
    organizingArr();
  };

  useEffect(() => {
    createArr();
  }, []);

  return (
    <>
      <p>Retorno filtro</p>
      <p>Retorno filtro</p>
      <p>Retorno filtro</p>
      <p>Retorno filtro</p>
      <p>Retorno filtro</p>
    </>
  );
}
