import { MAIRIE } from "../allInstance/ressource/mairie.js";
import { GOLDStorage } from "../allInstance/ressource/GOldStorages.js";
import { OilSTORAGE } from "../allInstance/ressource/oilStock.js";
import { GoldMine } from "../allInstance/mining/gold.js";
import { OILMINE } from "../allInstance/mining/oil.js";

/*
    TODO: Gestion des instances, récupération des id
    TODO: Sauvegarde du jeu
    
*/

function StartGame() {
  let myMairie = new MAIRIE();
  let GoldStorage = new GOLDStorage();
  let oilStorage = new OilSTORAGE();
  let goldMine = new GoldMine();
  let oilMine = new OILMINE();
  myMairie.currentNumber++;
  myMairie.currentNumberGOldMining.push(goldMine);
  myMairie.currentNumberOilMining.push(oilMine);
  myMairie.currentNumberGOldStorage.push(GoldStorage);
  myMairie.currentNumberOilStorage.push(oilStorage);
  myMairie.maxGoldRessource = GoldStorage.maxStorage;
  myMairie.maxOIlStorage = oilStorage.maxStorage;
  localStorage.setItem("myMairie", JSON.stringify(myMairie));
}
export default StartGame;
