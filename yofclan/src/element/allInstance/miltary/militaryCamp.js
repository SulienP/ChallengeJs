import Batiment from "../allInstance.js";
let newId = -1;
export class Camps extends Batiment {
  newId = newId + 1;
  constructor() {
    let finalId = "Camps" + newId.toString();

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