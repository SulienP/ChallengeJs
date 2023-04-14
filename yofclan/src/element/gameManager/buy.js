import { Batiment } from "../allInstance/allInstance";
import { Zehi } from "../allInstance/miltary/zehi.js";
import { Camps } from "../allInstance/miltary/militaryCamp.js";
function buy(value) {
    console.log(value)
    let element = localStorage.getItem('myMairie')
    const myMairie = JSON.parse(element);
    let newBat = Batiment
    if (value[2] === "oil") {
        if (myMairie.currentOil > value[3]) {
        if (value[1] === "military") {
            if (myMairie.currentMilitaryBat.length < myMairie.maxMilitary) {
                    switch (value[4]) {
                      case "zehi":
                        newBat = new Zehi();
                        myMairie.currentMilitaryBat.push(newBat);
                        myMairie.currentOil = myMairie.currentOil - value[3];
                        localStorage.setItem("myMairie", JSON.stringify(myMairie));
                        break;
                      case "militaryBase":
                        newBat = new Camps();
                        myMairie.currentMilitaryBat.push(newBat);
                        myMairie.currentOil = myMairie.currentOil - value[3];
                         localStorage.setItem("myMairie", JSON.stringify(myMairie));
                        break;
                      default:
                        break;
                    }

                }
                }
            }
        }
    }

export default buy;