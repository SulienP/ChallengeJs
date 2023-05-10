import { Batiment } from "../allInstance.js";
 
export class GOLDStorage extends Batiment {
  static id = 0;
  constructor() {
    GOLDStorage.id++;
    let finalId = "GOLDStorage" + GOLDStorage.id.toString();
    super(
      "goldStorage",
      "storage",
      finalId,
      530,
      1000,
      0,
      "nothing",
      0,
      0,
      1000,
      "gold",
      0,
      1,
      400,
      "oil",
      5,0
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType,currentStorgage ,level, aame ) {
*/