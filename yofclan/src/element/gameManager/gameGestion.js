import { MAIRIE } from "../../element/allInstance/ressource/mairie.js";
import { GOLDStorage } from "../../element/allInstance/ressource/GOldStorages.js";
import { OilSTORAGE } from "../../element/allInstance/ressource/oilStock.js";
import { GoldMine } from "../../element/allInstance/mining/gold.js"
import { OILMINE } from "../../element/allInstance/mining/oil.js";

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
    myMairie.currentNumber++
    myMairie.currentNumberGOldMining++
    myMairie.currentNumberOilMining++
    myMairie.currentNumberOilStorage++
    myMairie.currentNumberGOldStorage++
}
export default StartGame;