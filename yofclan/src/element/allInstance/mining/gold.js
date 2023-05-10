import { Batiment } from "../allInstance.js";

export class GoldMine extends Batiment {
  static id = 0;
  constructor() {
    GoldMine.id++;
    let finalId = "GOLDMINE" + GoldMine.id.toString();
    super(
      "gold",
      "mining",
      finalId,
      150,
      150,
      200,
      "gold",
      10,
      100,
      0,
      "nothing",
      0,
      1
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level,amelioraitonLevel ) {
*/