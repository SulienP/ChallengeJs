import Reload from "./reload.js";
import toLocalStorage from "./toLocalStorage.js";
function AddRessource() {
  let value = localStorage.getItem("firstDate");
  let element = localStorage.getItem("myMairie");
  const lastConnection = JSON.parse(value);
  const myMairie = JSON.parse(element);
  const myDate = Date.now();
  const myDateInHour = myDate / (1000 * 60 * 60);
  const lastConnectionInHour = lastConnection / (1000 * 60 * 60);
  let difference = 0;
  difference = myDateInHour - lastConnectionInHour;
  difference = Math.trunc(difference);
  let production = 0;
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
  if (myMairie.currentGold > myMairie.maxGoldRessource) {
    myMairie.currentGold = myMairie.maxGoldRessource;
  }
  if (myMairie.currentOil > myMairie.maxOIlRessource) {
    myMairie.currentOil = myMairie.maxOIlRessource;
  }
  Reload();
  localStorage.setItem("firstDate", JSON.stringify(myDate));
  toLocalStorage(myMairie);
}
export default AddRessource;
