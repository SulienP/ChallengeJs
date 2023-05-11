import { Fighters } from "../../allInstance";
let newId = -1;
/*
  * Définition of a Soldat
 */
export class Soldat extends Fighters {
  newId = newId + 1;
 
  constructor() {
    let finalId = "Soldat" + newId.toString();
    super("Soldat", "soldat", finalId, 10, 10, 5, 15, 0, 0, 0);
  }
}
/*
  * Définition of a Machine
 */
export class Machine extends Fighters {
  newId = newId + 1;
  constructor() {
      let finalId = "Machine" + newId.toString();
    super("Machine", "soldat",finalId, 30, 25, 25, 70,0,0,0);
  }
}
/*
  * Définition of a Robot
 */
export class Robot extends Fighters {
  newId = newId + 1;
  constructor() {
      let finalId = "Robot" + newId.toString();

    super("Robot", "soldat", finalId, 25, 45, 35, 150, 0, 0,0);
  }
}
/*
  * Définition of a Vaisseaux
 */
export class Vaisseaux extends Fighters {
  newId = newId + 1;
  constructor() {
      let finalId = "Robot" + newId.toString();

    super("Vaisseaux", "soldat",finalId, 50, 50, 25,230,0,0,0);
  }
}

