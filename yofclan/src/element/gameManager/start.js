import { MAIRIE } from "../allInstance/ressource/mairie.js";
import { GOLDStorage } from "../allInstance/ressource/GOldStorages.js";
import { OilSTORAGE } from "../allInstance/ressource/oilStock.js";
import { GoldMine } from "../allInstance/mining/gold.js";
import { OILMINE } from "../allInstance/mining/oil.js";
import { BatimentPostionExtended } from "../allInstance/batimentPosition.js";
import toLocalStorage from "./toLocalStorage.js";
import draw from "../village/draw.js";




function StartGame() {

  let myMairie = new MAIRIE();
  let GoldStorage = new GOLDStorage();
  let oilStorage = new OilSTORAGE();
  let goldMine = new GoldMine();
  let oilMine = new OILMINE();
  let batiment = new BatimentPostionExtended();
  myMairie.currentNumber++;
  myMairie.currentNumberGOldMining.push(goldMine);
  myMairie.currentNumberOilMining.push(oilMine);
  myMairie.currentNumberGOldStorage.push(GoldStorage);
  myMairie.currentNumberOilStorage.push(oilStorage);
  myMairie.maxGoldRessource = GoldStorage.maxStorage;
  myMairie.maxOIlRessource = oilStorage.maxStorage;
  const firstDate = Date.now()
  toLocalStorage(batiment, "batimentArray");
  toLocalStorage(firstDate, "firstDate");
  toLocalStorage(myMairie, "myMairie");
}
export default StartGame;
