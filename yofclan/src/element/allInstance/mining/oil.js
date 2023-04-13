import { Batiment } from "../allInstance.js";
let newId = -1;

export class OILMINE extends Batiment {
  newId = newId + 1;

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
      1,
      100
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level ) {
*/