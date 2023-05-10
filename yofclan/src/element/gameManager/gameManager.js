import StartGame from "./start.js";
import buy from "./buy.js";
import upgrade from "./upgrade.js"
import fight from "../figthGestion/fight.js"
import ErrorWindos from "./error.js";
import defend from "../figthGestion/defend.js";
import { Button } from "@mantine/core";
import training from "./training.js";
function GameManager(value) {
  console.log(value)
  let element = localStorage.getItem("myMairie");
  const myMairie = JSON.parse(element);
  if (myMairie === null) {
    StartGame();
  } else {
    if (value !== undefined) {
      if (value[0] === "buy") {
        const error = buy(value);
        if (error) {
          if (error.length > 0) {
            ErrorWindos(error);
          }
        }
      } else if (value[0] === "upgrade") {
        const elementStyle = document.querySelector("#upgrade");
        const deletButton = elementStyle.querySelector("button");
        elementStyle.removeChild(deletButton)
        //elementStyle.removeChild(textNode);
        elementStyle.style.display = "none";
        upgrade(value);
      } else if (value[0] === "fight") {
        fight(value);
      } else if (value[0] === "defend") {
        defend();
      } else if (value[0] === "training") {
        training(value)
      }
    }
  }
  
}

export default GameManager;