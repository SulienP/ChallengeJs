import toLocalStorage from "./toLocalStorage.js";
// !Function for the addition of resources at the town hall
function AddRessource() {
  //* Recuperation of local Storae
  let value = localStorage.getItem("firstDate");
  let element = localStorage.getItem("myMairie");
  const lastConnection = JSON.parse(value);
  const myMairie = JSON.parse(element);
  // * Check the connection bettween 2 conection
  const myDate = Date.now();
  const myDateInHour = myDate / (1000 * 60 * 60);
  const lastConnectionInHour = lastConnection / (1000 * 60 * 60);
  let difference = 0;
  difference = myDateInHour - lastConnectionInHour;
  difference = Math.trunc(difference);
  let production = 0;
  // *Go through all the buildings that produce resources
  for (const element of myMairie.currentNumberGOldMining) {
    production = element.productionByHour * difference;
    if (production > element.productionMax) {
      production = element.productionMax;
    }
    myMairie.currentGold = myMairie.currentGold + production;
  }
  for (const element of myMairie.currentNumberOilMining) {
    production = element.productionByHour * difference;
    if (production > element.productionMax) {
      production = element.productionMax;
    }
    myMairie.currentOil = myMairie.currentOil + production;
  }
  // *Verification that the values ​​do not exceed the limits
  if (myMairie.currentGold > myMairie.maxGoldRessource) {
    myMairie.currentGold = myMairie.maxGoldRessource;
  }
  if (myMairie.currentOil > myMairie.maxOIlRessource) {
    myMairie.currentOil = myMairie.maxOIlRessource;
  }
  //*Addition to local Storage
  toLocalStorage(myDate, "firstDate");
  toLocalStorage(myMairie, "myMairie");
}
export default AddRessource;
