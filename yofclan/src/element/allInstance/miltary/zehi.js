import Batiment from "../allInstance.js";
let newId = -1;
export class Zehi extends Batiment {
  constructor() {
    newId = newId + 1;
    let finalId = "Zehi" + (newId + 1).toString();
    super("Zehi", "military", finalId, 4, 40, 5, "nothing",0,0,0,"nothing",0,1,200);
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level ) {
*/