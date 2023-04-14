import { Batiment } from "../allInstance.js";
   
export  class Zehi extends Batiment {
  static id = 0;
  constructor() {
    Zehi.id++;
    let finalId = "Zehi" + Zehi.id.toString();
    super(
      "Zehi",
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