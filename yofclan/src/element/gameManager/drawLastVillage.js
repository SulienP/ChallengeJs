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
      var ctx = canvas.getContext("2d");

    canvas.addEventListener("click",function (event) {
      

      let test = ctx.getImageData(event.offsetX, event.offsetY, 1, 1);
        var couleurHex ="#" +((1 << 24) +(test.data[0] << 16) +(test.data[1] << 8) +test.data[2]).toString(16).slice(1);
            console.log(couleurHex);
      }, false);
       ctx = canvas.getContext("2d");
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