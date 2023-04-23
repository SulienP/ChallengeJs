import { Progress } from "@mantine/core";
import "../../../css/barProgress.css";

/* 
 ! TODO ajout d'un progression en fonction d'une valeur
*/

function OilBar() {
   let element = localStorage.getItem("myMairie");
  const myMairie = JSON.parse(element);
  let value = (myMairie.currentOil * 100) / myMairie.maxOIlRessource;

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
