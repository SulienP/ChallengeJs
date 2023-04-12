import Mairie from "../allInstance.js";
let newId = -1;

export class MAIrie extends Mairie {
  newId = newId + 1;
  constructor() {
    let finalId = "mairie" + newId.toString();
    super("mairie", "mairie", finalId, 1, 15, 20, 0,0, 1000,5,5,2,2,5,0,0,0,0,0,5,0);
  }
}
/*
  * name,
  *  type,
  * id,
  * nbrMAx,
  * defense,
  * currentNumber,
  * level,
  * price,
  * ameliorationPrice,
  * maxOilMining,
  * maxGOldMining,
  * maxGOldStorage,
  * maxOIlStorage,
  * maxDefense,
  * currentNumberOilMining,
  * currentNumberGOldMining,
  * currentNumberGOldStorage,
  * currentNumberDefense,
  * currentNumberOilStorage,
  * maxMilitary,
  * currentMilitaryBat
*/