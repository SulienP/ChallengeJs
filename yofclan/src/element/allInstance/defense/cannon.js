import Military from "../allInstance.js";
let newId = -1;
export class Cannon extends Military {
  newId = newId + 1;

  constructor() {
    let finalId = "cannon" + newId.toString();
    super("milice", "defense", finalId, 40, 150,90,"nothing",0,0,0,"nothing",0, 1, 150);
  }
}

/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level, amelioationPrice) {
*/