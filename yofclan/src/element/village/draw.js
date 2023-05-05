import { ValuePositionBatiment } from "../allInstance/ValuePositionBatiment.js";
import toLocalStorage from "../gameManager/toLocalStorage.js";
let axeX = 0;
let axeY = 0;
let size1 = 15;
let size2 = 15;

function draw(batimentType) {
    let canvas = document.querySelector("#myVillage");
    canvas.addEventListener("click", function (event) {
           console.log(canvas.getImageData(event.offsetX, event.offsetY));

}, false);
    let ctx = canvas.getContext("2d");
    let color = "";
    let myBat = "";
    switch (batimentType) {
    case "mairie":
      size1 = 20;
      size2 = 20;
      color = "#FF9700";
      axeX += 0;
      axeY += 0;
      break;
    case "zehi":
      color = "#2C29FF";
      break;
    case "militaryBase":
      color = "#0400FF";
      break;
    case "goldStorage":
      color = "#FCC42E";
      break;
    case "oilStorage":
      color = "#FFCF4D";
      break;
    case "milice":
      color = "#FF0000";
      break;
    case "cannon":
      color = "#D50000";
      break;
    case "laser":
      color = "#A70000";
      break;
    case "goldMine":
      color = "#00A726";
      break;
    case "oilMine":
      color = "#007019";
      break;
    case "hologram":
      color = "#B603A6";
      break;
    case "banch":
      color = "#FA00E3";
      break;
    case "pub":
      color = "#7A016F";
      break;
    default:
      break;
    }
    let value = localStorage.getItem("batimentArray");
    let batimentArray = JSON.parse(value);
    if (batimentArray !== undefined) {
        for (let i = 0; i < batimentArray.array.length; i++) {
            axeX = batimentArray.array[i].xAxes + 18
            if (axeY <= canvas.wdith) {
                axeY = batimentArray[i].yAxes + 18
            } else {
                axeY = 0
            }
        }
    }
    myBat = new ValuePositionBatiment(axeX,axeY,size1,size2,color,batimentType);
    batimentArray.array.push(myBat);
    toLocalStorage(batimentArray, "batimentArray");
    let newValue = localStorage.getItem("batimentArray");
    let batiment = JSON.parse(newValue);
    let i = batiment.array.length - 1;
    ctx.fillStyle = batiment.array[i].color;
    ctx.fillRect(batiment.array[i].xAxes, batiment.array[i].yAxes, batiment.array[i].size1, batiment.array[i].size2);
    
    axeX += 18;
    if (batimentType === "mairie") {
        size1 = 15;
        size2 = 15;
        axeX += 15;
    }
  let maxWidth = canvas.wdith;
  if (axeX > maxWidth) {
    axeY += 15;
    axeX = 0;
  }
}
export default draw;
