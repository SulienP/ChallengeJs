import { Batiment } from "../allInstance.js";

export class Laser extends Batiment {
  static id = 0;
  constructor() {
    Laser.id++;
    let finalId = "laser" + Laser.id.toString();

    super(
      "laser",
      "defense",
      finalId,
      40,
      150,
      150,
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