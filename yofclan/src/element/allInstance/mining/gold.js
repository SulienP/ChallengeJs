import { Batiment } from "../allInstance.js";
    let id = -1;
    let newId = 0;
export class GoldMine extends Batiment {
  newId = id + 1;
  id = id +1
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
      1
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level,amelioraitonLevel ) {
*/