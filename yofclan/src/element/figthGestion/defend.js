import toLocalStorage from "../gameManager/toLocalStorage";
/*
 * feature that causes players to be attacked
 */
function defend() {
  let defendValue = 0;
  let element = localStorage.getItem("myMairie");
  const myMairie = JSON.parse(element);
  // * Recuperation of defense player
  for (const element of myMairie.currentNumberDefense) {
    defendValue = defendValue + element.defense;
  }
  // * Recuperation of defense player
  for (const element of myMairie.currentMilitaryBat) {
    defendValue = defendValue + element.defense;
  }
  // * Recuperation of mairie defense player
  defendValue = defendValue + 15;
  // * Select a random number between the player's defsne and his defense plus 1
  let pourcentOfdefeat =Math.random() * (defendValue - (defendValue - 1) + 1) + defendValue - 1;
    if (pourcentOfdefeat > defendValue - 0.3) {
      // *Definition of the player's resource loss in case of defeat (0.3% chance of defeat)
      const lessGold = myMairie.currentGold - 100 * myMairie.level;
      myMairie.currentGold = lessGold;
      if (myMairie.currentGold <= 0) {
        myMairie.currentGold = 0;
      }
      const lessOil = myMairie.currentOil - 100 * myMairie.level;
      myMairie.currentOil = lessOil;
      if (myMairie.currentOil <= 0) {
        myMairie.currentOil = 0;
      }
      // * Addition to local Storage
      toLocalStorage(myMairie, "myMairie");
      window.alert("You have been attacked and lost " +lessGold +"gold and " +lessOil +"oil");
    } else {
    window.alert("Congrtulation you have been attacked and win");
  }
}
export default defend