import StartGame from "./start.js";
import buy from "./buy.js";
import upgrade from "./upgrade.js"
import fight from "../figthGestion/fight.js"
function GameManager(element) {
  if (element === undefined) {
    StartGame();
  } else {
    if (element[0] === "buy") {
        buy(element);
    } else if (element[0] === "upgrade") {
      upgrade(element);
    } else if (element[0] === "fight") {
      fight(element);
    }
    
    }

}

export default GameManager;