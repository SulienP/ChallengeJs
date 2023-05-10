import {Batiment } from "../allInstance.js";

export class Milice extends Batiment {
  static id = 0;
  constructor() {
    Milice.id++;
    let finalId = "Milice" + Milice.id.toString();

    super(
      "milice",
      "defense",
      finalId,
      200,
      150,
      50,
      "nothing",
      0,
      0,
      0,
      "nothing",
      0,
      1,
      "gold",
      5
    );
  }
}

/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level, amelioationPrice) {
*/