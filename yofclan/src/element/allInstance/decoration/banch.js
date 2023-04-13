import Decoration from "../allInstance.js"
    let id = -1;
    let newId =0
export class Banch extends Decoration{
    newId = id + 1
    id = id +1
    constructor() {
        let finalId = "banvchu"+newId.toString();
         super("banch", "decoration", finalId,0,30,"nothing",0,0,0,"nothing",0,0)
     }

}