import { Batiment } from "../allInstance.js";
    let id = -1;
    let newId = 0;
export class GOLDStorage extends Batiment {
  newId = id + 1;
  id = id +1
  constructor() {
    let finalId = "gold" + newId.toString();
    super("gold", "mining", finalId, 1000,1000, 0,"nothing", 0,0,1000,"gold",0,1, 400);
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType,currentStorgage ,level, aame ) {
*/