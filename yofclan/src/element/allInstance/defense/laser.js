import Military from "../allInstance.js";
    let id = -1;
    let newId = 0;
export class Laser extends Military {
  newId = id + 1;
  id = id +1
  constructor() {
    let finalId = "laser" + newId.toString();

    super("laser", "defense", finalId, 40, 150,150,"nothing",0,0,0,"nothing",0, 1);
  }
}

/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level, amelioationPrice) {
*/