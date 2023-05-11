import { Batiment } from "../allInstance.js";
/*
  * Définition of a laser
 */
export class Laser extends Batiment {
  static id = 0;
  constructor() {
    Laser.id++;
    let finalId = "laser" + Laser.id.toString();

    super(
      "laser",
      "defense",
      finalId,
      160,
      150,
      130,
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