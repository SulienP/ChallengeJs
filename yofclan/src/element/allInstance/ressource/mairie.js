import { Mairie }  from '../allInstance.js';
export class MAIRIE extends Mairie {
  static newId = 0;
  
  constructor() {
    MAIRIE.newId++
    let finalId = "mairie" + MAIRIE.newId.toString();
    super("mairie", "mairie", finalId, 1, 15, 0, 1,0, 1000,5,5,2,2,5,[],[],[],[],[],5,[], 1000, 1000);
  }
}
/*
    * name,
    * type,
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
    * currentMilitaryBat,
    * currentOil,
    * currentGold
*/