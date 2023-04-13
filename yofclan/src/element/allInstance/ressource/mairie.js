import { Mairie }  from '../allInstance.js';
let id = -1;
let newId =0
export class MAIRIE extends Mairie {
   newId = id + 1;
  constructor() {
    let finalId = "mairie" + newId.toString();
    super("mairie", "mairie", finalId, 1, 15, 0, 1,0, 1000,5,5,2,2,5,[],[],[],[],[],5,0);
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