import StartGame from "./start.js";
import buy from "./buy.js";
import upgrade from "./upgrade.js"
import fight from "../figthGestion/fight.js"
import ErrorWindos from "./error.js";
import defend from "../figthGestion/defend.js";
function GameManager(value) {
  let element = localStorage.getItem("myMairie");
  const myMairie = JSON.parse(element);
  if (myMairie === null) {
    StartGame();
    GameManager(["loadVillage"])
  } else {
    if (value !== undefined) {
      if (value[0] === "buy") {
        const error = buy(value);
        if (error)
          if (error.length > 0) {
            ErrorWindos(error);       
        }
      } else if (value[0] === "upgrade") {
        upgrade(value);
      } else if (value[0] === "fight") {
        fight(value);
      } else if (value[0] === "defend") {
        defend();
      }
    }
    }

}

export default GameManager;