import { Progress } from "@mantine/core";
import "../../../css/barProgress.css"

/* 
 ! TODO ajout d'un progression en fonction de ce qu'on a + variable
*/
function GoldBar() {
  let element = localStorage.getItem("myMairie");
  const myMairie = JSON.parse(element);
    let value = (myMairie.currentGold * 100) / myMairie.maxGoldRessource;
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
