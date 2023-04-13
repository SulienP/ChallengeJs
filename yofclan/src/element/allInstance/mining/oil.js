import { Batiment } from "../allInstance.js";
    let id = -1;
    let newId = 0;

export class OILMINE extends Batiment {
  newId = id + 1;
  id = id +1
  constructor() {
    let finalId = "oil" + newId.toString();
    super(
      "oil",
      "mining",
      finalId,
      15,
      150,
      0,
      "oil",
      150,
      1000,
      0,
      "nothing",
      0,
      1
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level ) {
*/