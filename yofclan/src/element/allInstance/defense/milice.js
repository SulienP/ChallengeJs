import Batiment from "../allInstance.js";
    let id = -1;
let newId = 0
export class Milice extends Batiment {
  newId = id + 1
  id =id +1
  constructor() {
    let finalId = "milice" + newId.toString();

    super("milice", "defense", finalId, 40, 150,50,"nothing",0,0,0,"nothing",0, 1);
  }
}

/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level, amelioationPrice) {
*/