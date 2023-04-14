import { Batiment } from "../allInstance.js";

export class GoldMine extends Batiment {
  static id = 0;
  constructor() {
    GoldMine.id++;
    let finalId = "Zehi" + GoldMine.id.toString();
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
      1
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level,amelioraitonLevel ) {
*/