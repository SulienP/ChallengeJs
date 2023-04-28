import draw from "../village/draw";

function drawLastVillage() {
    let value = localStorage.getItem("batimentArray");
    let batimentArray = JSON.parse(value);
    let size = batimentArray.array.length;
    if (size === 0) {
      draw("mairie");
      draw("goldStorage");
      draw("oilStorage");
      draw("goldMine");
      draw("oilMine");
    } else {
    let canvas = document.querySelector("#myVillage");
        let ctx = canvas.getContext("2d");
        for (let i = 0; i < size; i++){
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