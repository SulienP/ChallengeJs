import { Batiment } from "../allInstance.js";

export class Camps extends Batiment {
  static id = 0;
  constructor() {
    Camps.id++;
    let finalId = "Milice" + Camps.id.toString();

    super(
      "camps",
      "military",
      finalId,
      4,
      40,
      5,
      "nothing",
      0,
      0,
      0,
      "nothing",
      0,
      1
    );
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level ) {
*/