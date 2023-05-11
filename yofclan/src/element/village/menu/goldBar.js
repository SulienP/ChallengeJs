/* eslint-disable react-hooks/exhaustive-deps */
import { Progress } from "@mantine/core";
import { useEffect,  useState } from "react";

// ! Progress Gold Bar
function GoldBar() {
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
      color="yellow"
      size="lg"
      radius="xl"
      label={`oil: ${myMairie.currentGold} / ${myMairie.maxGoldRessource}`}
      value={value}
      className="barProgess"
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "20%",
        height: "20px",
      }}
    />
  );
}
export default GoldBar;
