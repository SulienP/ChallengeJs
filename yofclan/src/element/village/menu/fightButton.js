import { Button, CloseButton } from "@mantine/core";
import GameManager from "../../gameManager/gameManager.js";
import { useState } from "react";
import "../../../css/fightButton.css";
/* 
! TODO ajout d'un progression en fonction d'une valeur
*/
function Attaque() {
  const [displayFightDiv, displayFightDivSetState ] = useState(false)
  function inverseDisplayFight() {
    displayFightDivSetState(!displayFightDiv);
  }
  function trainedTroop(element){
    GameManager(element)
  }
  return (
    <>
    <Button
    variant="subtle"color="red"onClick={() => {inverseDisplayFight();}}
    >
    Fight
    </Button>
    <div class="container"style={{ display: displayFightDiv ? "block" : "none" }}>
    <CloseButton color="red" onClick={() => { inverseDisplayFight(); }}></CloseButton>
    <div class="figth">
    <Button onClick={() => { GameManager(["fight"]); }}>Do a fight</Button>
    </div>
    <br></br>
    <div>
    <li> 
    <ul>
    <Button onClick={() => { trainedTroop([ "training" ,"Soldat", "oil", 15, 10]); }}>Buy soldat for 15 oil(atk :10, def 5 place 10)</Button>
    </ul>
    <ul>
    <Button onClick={() => { trainedTroop(["training" ,"Machine", "oil", 70, 30]); }}>Buy Machine for 70 oil(atk :25, def 25 place 30)</Button>
    </ul>
    <ul>
    <Button onClick={() => { trainedTroop(["training" ,"Robot", "oil", 150, 25]); }}>Buy Robot for 150 oil(atk :45, def 35 place 25)</Button>
    </ul>
    <ul>
    <Button onClick={() => { trainedTroop(["training", "Vaisseaux", "oil", 230, 50]); }}>Buy Vaisseaux for 230 oil(atk :50 def 25 place 50)</Button>
    </ul>
    </li>
    </div>
    </div>
    </>
    );
  }
  export default Attaque;
