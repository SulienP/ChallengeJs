/* eslint-disable react-hooks/exhaustive-deps */
import { Progress } from "@mantine/core";
import { useEffect, useState } from "react";

// ! Oil progress Bar

function OilBar() {
  const [value, setValue] = useState(0);
  let element = localStorage.getItem("myMairie");
  let myMairie = JSON.parse(element);

  useEffect(() => {
    const interval = setInterval(() => {
      element = localStorage.getItem("myMairie");
      myMairie = JSON.parse(element);
      setValue((myMairie.currentOil * 100) / myMairie.maxOIlRessource);
    }, 100);

  
    return () => clearInterval(interval);
  }, []);
  return (
    <Progress
      color="indigo"
      radius="xl"
      label={`oil: ${myMairie.currentOil} / ${myMairie.maxOIlRessource}`}
      size="lg"
      value={value}
      style={{
        position: "absolute",
        top: "20px",
        right: "0",
        width: "20%",
        height: "20px",
      }}
    />
  );
}


export default OilBar;
