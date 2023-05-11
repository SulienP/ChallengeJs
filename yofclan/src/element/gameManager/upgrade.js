import toLocalStorage from "./toLocalStorage.js"
// !Building upgrade function
function upgrade(batiment) {
  const rankInMyArray = batiment[2];
  let element = localStorage.getItem("myMairie");
  let myMairie = JSON.parse(element);
  let ameliorationPrices = batiment[1].ameliorationPrice;
  let currentOil = myMairie.currentOil;
  let currentGold = myMairie.currentGold;
  let currentLevel = batiment[1].level;
  let batimentType = batiment[1].type;
  let maxLevel = batiment[1].maxLevel;
  const nameBat = batiment[3];
  const enougthOil = "You can't upgrade this, you don't have enoutgh oil ";
  const maxLevelhit =
    "You can't upgrade this, max level, if you want more uprgare the mairie";
  const enoutghGold = "You can't upgrade this, you don't have enoutgh gold";
  // *check if the building can be improved

  if (batimentType === "mining") {
    if (batiment[1].typeAmelioration === "gold") {
      if (currentLevel < maxLevel) {
        if (currentOil > ameliorationPrices) {
          batiment[1].productionByHour = batiment[1].productionByHour + 10;
          batiment[1].productionMax = batiment[1].productionMax + 100;
          batiment[1].level += 1;
          myMairie.currentOil = myMairie.currentOil - ameliorationPrices;
          batiment[1].ameliorationPrice = batiment[1].ameliorationPrice + 100;
          window.alert("L'amélioration s'est bien déroulé");
        } else {
          alertInvalidUpgrade(enougthOil);
        }
      } else {
        alertInvalidUpgrade(maxLevelhit);
      }
    } else if (batiment[1].typeAmelioration === "oil") {
      if (currentLevel < maxLevel) {
        if (currentGold > ameliorationPrices) {
          batiment[1].productionByHour = batiment[1].productionByHour + 10;
          batiment[1].productionMax = batiment[1].productionMax + 100;
          batiment[1].level += 1;
          myMairie.currentGold = myMairie.currentGold - ameliorationPrices;
          batiment[1].ameliorationPrice = batiment[1].ameliorationPrice + 100;
          window.alert("L'amélioration s'est bien déroulé");
        } else {
          alertInvalidUpgrade(enougthOil);
        }
      } else {
        alertInvalidUpgrade(maxLevelhit);
      }
    }
  } else if (batimentType === "defense") {
    if (currentLevel < maxLevel) {
      if (currentGold > ameliorationPrices) {
        batiment[1].defense = batiment[1].defense + 10;
        batiment[1].productionMax = batiment[1].productionMax + 100;
        batiment[1].level += 1;
        myMairie.currentGold = myMairie.currentGold - ameliorationPrices;
        batiment[1].ameliorationPrice = batiment[1].ameliorationPrice + 100;
        window.alert("L'amélioration s'est bien déroulé");
      } else {
        alertInvalidUpgrade(enoutghGold);
      }
    } else {
      alertInvalidUpgrade(maxLevelhit);
    }
  } else if (batimentType === "military") {
    if (currentLevel < maxLevel) {
      if (currentGold > ameliorationPrices) {
        batiment[1].defense = batiment[1].defense + 10;
        batiment[1].productionMax = batiment[1].productionMax + 100;
        batiment[1].level += 1;
        myMairie.currentGold = myMairie.currentGold - ameliorationPrices;
        batiment[1].ameliorationPrice = batiment[1].ameliorationPrice + 100;
        window.alert("L'amélioration s'est bien déroulé");
      } else {
        alertInvalidUpgrade(enougthOil);
      }
    } else {
      alertInvalidUpgrade(maxLevelhit);
    }
  } else if (batimentType === "storage") {
    if (batiment[1].typeAmelioration === "gold") {
      if (currentLevel < maxLevel) {
        if (currentOil > ameliorationPrices) {
          batiment[1].maxStorage = batiment[1].maxStorage + 1000;
          batiment[1].productionMax = batiment[1].productionMax + 100;
          batiment[1].level += 1;
          myMairie.currentOil = myMairie.currentOil - ameliorationPrices;
          batiment[1].ameliorationPrice = batiment[1].ameliorationPrice + 100;
          window.alert("L'amélioration s'est bien déroulé");
        } else {
          alertInvalidUpgrade(enougthOil);
        }
      } else {
        alertInvalidUpgrade(maxLevelhit);
      }
    } else if (batiment[1].typeAmelioration === "oil") {
      if (currentLevel < maxLevel) {
        if (currentGold > ameliorationPrices) {
          batiment[1].maxStorage = batiment[1].maxStorage + 1000;
          batiment[1].productionMax = batiment[1].productionMax + 100;
          batiment[1].level += 1;
          myMairie.currentGold = myMairie.currentGold - ameliorationPrices;
          batiment[1].ameliorationPrice = batiment[1].ameliorationPrice + 100;
          window.alert("L'amélioration s'est bien déroulé");
        } else {
          alertInvalidUpgrade(enougthOil);
        }
      } else {
        alertInvalidUpgrade(maxLevelhit);
      }
    }
  } else if (batimentType === "mairie") {
    if (currentGold >= ameliorationPrices) {
      myMairie.currentGold = myMairie.currentGold - myMairie.ameliorationPrice;
      myMairie.ameliorationPrice = myMairie.ameliorationPrice + 1000;
      myMairie.maxDefense = myMairie.maxDefense + 5;
      myMairie.maxGOldMining = myMairie.maxGOldMining + 5;
      myMairie.maxGOldStorage = myMairie.maxGOldStorage + 2;
      myMairie.maxGoldRessource = myMairie.maxGoldRessource + 1000;
      myMairie.maxMilitary = myMairie.maxMilitary + 5;
      myMairie.maxOIlRessource = myMairie.maxOIlRessource + 1000;
      myMairie.maxOIlStorage = myMairie.maxOIlStorage + 2;
      myMairie.maxOilMining = myMairie.maxOilMining + 5;
      myMairie.level = myMairie.level + 1;
      window.alert("L'amélioration s'est bien déroulé");
    } else {
      alertInvalidUpgrade(enoutghGold);
    }
  }
  // !replacement of the building in the local storage
  switch (nameBat) {
    case "mairie":
      toLocalStorage(myMairie, "myMairie");
      break;
    case "zehi":
      myMairie.currentMilitaryBat[rankInMyArray] = batiment[1];
      break;
    case "camps":
      myMairie.currentMilitaryBat[rankInMyArray] = batiment[1];
      break;
    case "gold":
      myMairie.currentNumberGOldMining[rankInMyArray] = batiment;
      break;
    case "oilMine":
      myMairie.currentNumberOilMining[rankInMyArray] = batiment[1];
      break;
    case "goldStorage":
      myMairie.currentNumberGOldStorage[rankInMyArray] = batiment[1];
      break;
    case "oilStorage":
      myMairie.currentNumberOilStorage[rankInMyArray] = batiment[1];
      break;
    case "cannon":
      myMairie.currentNumberDefense[rankInMyArray] = batiment[1];
      break;
    case "laser":
      myMairie.currentNumberDefense[rankInMyArray] = batiment[1];
      break;
    case "milice":
      myMairie.currentNumberDefense[rankInMyArray] = batiment[1];
      break;
    default:
      break;
  }
  toLocalStorage(myMairie, "myMairie");
  function alertInvalidUpgrade(message) {
    window.alert(message);
  }
}
export default upgrade;

