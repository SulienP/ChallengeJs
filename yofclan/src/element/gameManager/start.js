import { MAIRIE } from "../allInstance/ressource/mairie.js";
import { GOLDStorage } from "../allInstance/ressource/GOldStorages.js";
import { OilSTORAGE } from "../allInstance/ressource/oilStock.js";
import { GoldMine } from "../allInstance/mining/gold.js";
import { OILMINE } from "../allInstance/mining/oil.js";
import { BatimentPostionExtended } from "../allInstance/batimentPosition.js";
import toLocalStorage from "./toLocalStorage.js";
// !starting function of the game, it defines the town hall and the first buildings and get the date
function StartGame() {
    
  let axeY = 0;
  let limite = 15
  let myMairie = new MAIRIE();
  const GoldStorage = new GOLDStorage();
  const oilStorage = new OilSTORAGE();
  const goldMine = new GoldMine();
  const oilMine = new OILMINE();
  const batiment = new BatimentPostionExtended();

  // * Adding Batiment to the mairie 
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
  toLocalStorage(axeY, "axeY");
  toLocalStorage(limite, "limite");
}
export default StartGame;
