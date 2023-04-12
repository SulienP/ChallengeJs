import Fighters from "../figthers/allInstance.js";
let newId = -1;
export class Soldat extends Fighters {
  newId = newId + 1;
 
  constructor() {
    let finalId = "Soldat" + newId.toString();
    super("milice", "soldat", finalId, 5, 10, 15, 5, 0, 0,0);
  }
}
export class Machine extends Fighters {
  newId = newId + 1;
  constructor() {
      let finalId = "Machine" + newId.toString();
    super("Machine", "soldat",finalId, 5, 10, 15, 8,0,0,0);
  }
}

export class Robot extends Fighters {
  newId = newId + 1;
  constructor() {
      let finalId = "Robot" + newId.toString();

    super("Robot", "soldat", finalId, 5, 10, 15, 10, 0, 0,0);
  }
}

export class Vaisseaux extends Fighters {
  newId = newId + 1;
  constructor() {
      let finalId = "Robot" + newId.toString();

    super("Vaisseaux", "soldat",finalId, 5, 10, 15,15,0,0,0);
  }
}

