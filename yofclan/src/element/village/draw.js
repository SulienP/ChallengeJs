import { ValuePositionBatiment } from "../allInstance/ValuePositionBatiment.js";
import checkColorAtClick from "../gameManager/checkColor.js";
import toLocalStorage from "../gameManager/toLocalStorage.js";
let axeX = 0;
let size1 = 15;
let size2 = 15;

// !Function to draw a building
function draw(batimentType) {
  let axeY = JSON.parse(localStorage.getItem("axeY"));
  let limite = JSON.parse(localStorage.getItem("limite"));
  let myMairie = JSON.parse(localStorage.getItem("myMairie"));
  let canvas = document.querySelector("#myVillage");
  let ctx = canvas.getContext("2d");
  let color = "";
  let myBat = "";
  let idColor = 0;
  // !building definition
  switch (batimentType) {
    case "mairie":
      idColor = 1;
      color = "#FF9700";
      break;
    case "zehi":
      idColor = myMairie.currentMilitaryBat.length;
      color = "#2C29FF";
      break;
    case "militaryBase":
      idColor = myMairie.currentMilitaryBat.length;
      color = "#0400FF";
      break;
    case "goldStorage":
      idColor = myMairie.currentNumberGOldStorage.length;
      color = "#FCC42E";
      break;
    case "oilStorage":
      idColor = myMairie.currentNumberOilStorage.length;
      color = "#FFCF4D";
      break;
    case "milice":
      idColor = myMairie.currentNumberDefense.length;
      color = "#FF0000";
      break;
    case "cannon":
      idColor = myMairie.currentNumberDefense.length;
      color = "#D50000";
      break;
    case "laser":
      idColor = myMairie.currentNumberDefense.length;
      color = "#A70000";
      break;
    case "goldMine":
      idColor = myMairie.currentNumberGOldMining.length;
      color = "#00A726";
      break;
    case "oilMine":
      idColor = myMairie.currentNumberOilMining.length;
      color = "#007019";
      break;
    case "hologram":
      color = "#B603A6";
      break;
    case "banch":
      color = "#FA00E3";
      break;
    default:
      break;
  }
  //* Retrieving localStorage
  let value = localStorage.getItem("batimentArray");
  let batimentArray = JSON.parse(value);

  // *Verification of whether there is already a building to draw in order to add a value to x to prevent 2 drawings from ending up on top of each other
  if (batimentArray !== undefined) {
    for (const element of batimentArray.array) {
      axeX = element.xAxes + 20;
    }
  }

  //* Check if the building will not be outside the canvas
  if (batimentArray.array.length >= limite) {
    axeY += 20;
    axeX = 0;
    toLocalStorage(axeY, "axeY");
    limite += 15;
    toLocalStorage(limite, "limite");
  }

  myBat = new ValuePositionBatiment(axeX, axeY, size1, size2, color, batimentType, idColor);
  // *Send then recovery of the building in the local storage
  batimentArray.array.push(myBat);
  toLocalStorage(batimentArray, "batimentArray");
  let newValue = localStorage.getItem("batimentArray");
  let batiment = JSON.parse(newValue);
  let i = batiment.array.length - 1;
  // *Parcours of tiotu my buildings in order to avoid the drawing of two buildings on top of each other
  ctx.fillStyle = batiment.array[i].color;
  ctx.fillRect(
    batiment.array[i].xAxes,
    batiment.array[i].yAxes,
    batiment.array[i].size1,
    batiment.array[i].size2
  );
  axeX += 18;
  if (batimentType === "mairie") {
    size1 = 15;
    size2 = 15;
    axeX += 20;
  }
  checkColorAtClick();
}
export default draw;
