import { Batiment } from "../allInstance.js";
/*
  * Définition of a camps
 */
export class Camps extends Batiment {
  static id = 0;
  constructor() {
    Camps.id++;
    let finalId = "camps" + Camps.id.toString();

    super(
      "camps",
      "military",
      finalId,
      125,
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