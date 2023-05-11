import { Batiment } from "../allInstance.js";
/*
  * Définition of a oilMine
 */
export class OILMINE extends Batiment {
  static id = 0;
  constructor() {
    OILMINE.id++;
    let finalId = "OILMINE" + OILMINE.id.toString();
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
      1,
      "gold",
      5,0
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level ) {
*/