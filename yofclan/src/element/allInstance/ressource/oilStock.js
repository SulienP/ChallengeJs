import { Batiment } from "../allInstance.js";

export class OilSTORAGE extends Batiment {
  static id = 0;
  constructor() {
    OilSTORAGE.id++;
    let finalId = "oilStorage" + OilSTORAGE.id.toString();
    super(
      "oilStorage",
      "storage",
      finalId,
      1000,
      1000,
      0,
      "nothing",
      0,
      0,
      1000,
      "oil",
      0,
      1,
      "gold",
      5,0
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType,currentStorage, level, ameliorationLevel ) {

  */