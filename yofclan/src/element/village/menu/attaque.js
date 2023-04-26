import { Button } from "@mantine/core";
import "../../gameManager/gameManager.js"
import GameManager from "../../gameManager/gameManager.js";
/* 
 ! TODO ajout d'un progression en fonction d'une valeur
*/
function Attaque() {
  return (
    <Button variant="subtle" color="red"

      onClick={GameManager(["fight"])}> Fight
    </Button>
  );
}
export default Attaque;
