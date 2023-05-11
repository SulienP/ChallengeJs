import { Batiment } from "../allInstance.js";
   /*
  * Définition of a zehi
 */
export  class Zehi extends Batiment {
  static id = 0;
  constructor() {
    Zehi.id++;
    let finalId = "Zehi" + Zehi.id.toString();
    super(
      "Zehi",
      "military",
      finalId,
      120,
      40,
      10,
      "nothing",
      0,
      0,
      0,
      "nothing",
      0,
      1,
      "oil",
      3,200
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level ) {
*/