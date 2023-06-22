import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectedReposData } from "../../redux/dataSlice";

export default function Filter() {
  const repos = useSelector(selectedReposData);
  const arrOfLangs: string[] = [];
  const arrOfFilters: string[] = [];

  const organizingArr = () => {
    arrOfLangs.map((el: string, i: number) => {
      if (arrOfLangs.indexOf(el) === i && el !== null) {
        arrOfFilters.push(el);
      }
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
      <button>teste</button>
      {arrOfFilters?.map((el: string, i: number) => {
        return (
          <>
            <button key={i}>{el}</button>;
          </>
        );
      })}
    </>
  );
}
