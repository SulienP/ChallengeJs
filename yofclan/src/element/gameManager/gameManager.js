import StartGame  from "./start.js";
function GameManager() {
  let myVillage = StartGame();
  console.log(myVillage.id);
}

export default GameManager;