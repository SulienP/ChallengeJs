import { Batiment } from "../allInstance.js";
let newId = -1;

export class GOLDStorage extends Batiment {
  newId = newId + 1;
  constructor() {
    let finalId = "oil" + newId.toString();
    super("gold", "mining", finalId, 1000, 0,"nothing", 0,0,1000,"gold",0,1, 400);
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType,currentStorgage ,level, aame ) {
*/