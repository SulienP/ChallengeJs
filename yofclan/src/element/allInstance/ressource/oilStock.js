import { Batiment } from "../allInstance.js";
let newId = -1;

export class OilSTORAGE extends Batiment {
  newId = newId + 1;
  constructor() {
    let finalId = "oil" + newId.toString();
    super("oil", "mining", finalId, 1000, 1000,0, "nothing",0, 0, 1000, "oil",0, 1);
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType,currentStorage, level, ameliorationLevel ) {

  */