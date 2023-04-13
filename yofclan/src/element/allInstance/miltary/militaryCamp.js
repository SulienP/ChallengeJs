import Batiment from "../allInstance.js";
    let id = -1;
let newId = 0
export class Camps extends Batiment {
  newId = id + 1;
  id =id+1
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