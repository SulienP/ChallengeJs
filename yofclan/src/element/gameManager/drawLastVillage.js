import draw from "../village/draw";
import checkColorAtClick from "./checkColor";
import GameManager from "./gameManager";
// !function to draw if the village after reloading the page or stopping the node server
function drawLastVillage() {
  const canvas = document.querySelector("#myVillage");
  const ctx = canvas.getContext("2d");
  let value = localStorage.getItem("batimentArray");
  let batimentArray = JSON.parse(value);
  let size = batimentArray.array.length;
  
  //*Draw the first village
  if (size === 0) {
    draw("mairie");
    draw("goldStorage");
    draw("oilStorage");
    draw("goldMine");
    draw("oilMine");
  } else {
    //* Check the color and call the defend function
    checkColorAtClick();
    const beAttack = Math.random()
    if (beAttack > 0.85) {
      GameManager(["defend"])
    }
    // * Draw the latest villae
    for (let i = 0; i < size; i++) {
      ctx.fillStyle = batimentArray.array[i].color;
      ctx.fillRect(
        batimentArray.array[i].xAxes,
        batimentArray.array[i].yAxes,
        batimentArray.array[i].size1,
        batimentArray.array[i].size2
        );
      }
    }
  }
  
  
  export default drawLastVillage;
  
  
  
  
