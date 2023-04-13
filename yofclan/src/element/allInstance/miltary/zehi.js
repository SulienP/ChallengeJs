import Batiment from "../allInstance.js";
    let id = -1;
    let newId = 0;
export class Zehi extends Batiment {
  constructor() {
    newId = id + 1;
    id ++
    let finalId = "Zehi" + (newId + 1).toString();
    super("Zehi", "military", finalId, 4, 40, 5, "nothing",0,0,0,"nothing",0,1);
  }
}
/*
  !    constructor(name, type, id,price, ameliorationPrice,defense, typeProductions, productionByHour,productionMax, maxStorage, storageType, level ) {
*/