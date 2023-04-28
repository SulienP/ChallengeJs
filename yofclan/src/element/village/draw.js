import { ValuePositionBatiment } from "../allInstance/ValuePositionBatiment.js";
import toLocalStorage from "../gameManager/toLocalStorage.js";
let axeX = 0;
let axeY = 0;
function draw(batimentType) {
    let value = localStorage.getItem('batimentStructure');
    let batimentStruc = JSON.parse(value);
    let canvas = document.querySelector("#myVillage");    
    let ctx = canvas.getContext("2d");
    let color = "";
    let myBat = "";
    console.log(axeX, axeY)
    switch (batimentType) {
      case "zehi":
        color = "#706FB3";
        myBat = new ValuePositionBatiment(axeX, axeY, 10, 10, color, "zehi");
        batimentStruc.array.push(myBat);
        toLocalStorage(myBat, "batimentStructure");
        break;
      case "milice":
        color = "#D35555";
        myBat = new ValuePositionBatiment(axeX, axeY, 10, 10, color, "milice");
        batimentStruc.array.push(myBat);
        toLocalStorage(myBat, "batimentStructure");
        break;
      case "decoration":
        color = "#B3D355";
        break;
      default:
        break;
    }
    let newValue = localStorage.getItem("batimentStructure");
    let batiment = JSON.parse(newValue);
    let i = batiment.array.length -1;
    ctx.fillStyle = batiment.array[i].color;
    ctx.fillRect(batiment.array[i].xAxes, batiment.array[i].yAxes, batiment.array[i].size1, batiment.array[i].size2);
    axeX += 10;
    if (axeX > 60) {
        axeY += 10;
        axeX = 0
    }
}
export default draw;