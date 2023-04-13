import { Batiment } from "../allInstance.js";
    let id = -1;
    let newId = 0;
export class OilSTORAGE extends Batiment {
  newId = id + 1;
  id = id +1
  constructor() {
    let finalId = "oil" + newId.toString();
    super("oil", "mining", finalId, 1000, 1000,0, "nothing",0, 0, 1000, "oil",0, 1);
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType,currentStorage, level, ameliorationLevel ) {

  */