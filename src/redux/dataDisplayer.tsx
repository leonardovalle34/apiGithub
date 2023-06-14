import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { dataInstance, instanceData } from "./dataApi";
import { fetchDataAsync } from "./dataSlice";

const DataDisplayer = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.data);
  const [dataPresent, setDataPresent] = useState<boolean>(false);

  useEffect(() => {
    if (!dataPresent) {
      dispatch(fetchDataAsync());
      setDataPresent(true);
    }
  }, []);

  const renderedData = data.map((d: dataInstance) => {
    // eslint-disable-next-line react/jsx-key
    const insideElements = d.data.map((i: instanceData) => (
      // eslint-disable-next-line react/jsx-key
      <p>
        {i.header}:{i.length}
      </p>
    ));
    return (
      <>
        <h1>{d.header}</h1>
        {insideElements}
      </>
    );
  });

  return <div>{renderedData}</div>;
};

export default DataDisplayer;
