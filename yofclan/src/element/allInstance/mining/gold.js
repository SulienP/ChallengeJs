import { Batiment } from "../allInstance.js";
let newId = -1;

export class GoldMine extends Batiment {
  newId = newId + 1;

  constructor() {
    let finalId = "gold" + newId.toString();
    super(
      "gold",
      "mining",
      finalId,
      15,
      150,
      0,
      "gold",
      10,
      100,
      0,
      "nothing",
      0,
      1,
      100
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level,amelioraitonLevel ) {
*/