import { Batiment } from "../allInstance.js";
/*
  * Définition of a cannon
 */
export class Cannon extends Batiment {
  static id = 0;
  constructor() {
    Cannon.id++;
    let finalId = "cannon" + Cannon.id.toString();
    super(
      "cannon",
      "defense",
      finalId,
      190,
      150,
      230,
      "nothing",
      0,
      0,
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
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level, amelioationPrice) {
*/