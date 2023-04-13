import StartGame from "./start.js";
GameManager()
function GameManager(element) {
  if (element === undefined) {
          let myVillage = StartGame();

      console.log(myVillage)
      
  }
  
  switch (element) {

    case "buy": 
      // "fonction buy"
      break;
    case "upgrade":
      // "fonction upgrade"
      break;
    default:
      break;
    
  }

}

export default GameManager;