import { Button } from "@mantine/core";

/* 
 ! TODO ajout d'un progression en fonction d'une valeur
*/
function Attaque() {
  return (
    <Button
      color="indigo"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "5%",
        height: "5%",
      }}
      >
          Fight
          </Button>
  );
}
export default Attaque;
