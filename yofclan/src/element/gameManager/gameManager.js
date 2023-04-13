import StartGame from "./start.js";
import buy from "./buy.js";
import upgrade from "./upgrade.js"
import fight from "../figthGestion/fight.js"
GameManager()
function GameManager(element) {
  if (element === undefined) {
          let myVillage = StartGame();

      console.log(myVillage)
      
  }
  
  switch (element) {

    case "buy": 
      buy();
      break;
    case "upgrade":
      upgrade();
      break;
    case "attaque":
      fight();
      break;
    default:
      break;
    
  }

}

export default GameManager;