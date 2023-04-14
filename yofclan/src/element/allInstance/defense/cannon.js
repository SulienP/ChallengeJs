import { Batiment } from "../allInstance.js";

export class Cannon extends Batiment {
  static id = 0;
  constructor() {
    Cannon.id++;
    let finalId = "cannon" + Cannon.id.toString();
    super(
      "milice",
      "defense",
      finalId,
      40,
      150,
      90,
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
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level, amelioationPrice) {
*/