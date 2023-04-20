import StartGame from "./start.js";
import buy from "./buy.js";
import upgrade from "./upgrade.js"
import fight from "../figthGestion/fight.js"
function GameManager(value) {
  let element = localStorage.getItem("myMairie");
  const myMairie = JSON.parse(element);
  if (myMairie === null) {
    StartGame();
  } else {
    if (value !== undefined) {
      if (value[0] === "buy") {
        buy(value);
      } else if (value[0] === "upgrade") {
        upgrade(value);
      } else if (value[0] === "fight") {
        fight(value);
      }
    }
  }

}

export default GameManager;