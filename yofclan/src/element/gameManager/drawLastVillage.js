import draw from "../village/draw";

function drawLastVillage() {
    const canvas = document.querySelector("#myVillage");
    const ctx = canvas.getContext("2d");
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
      canvas.addEventListener("click",function (event) {
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;
        const imageData = ctx.getImageData(x, y, 10, 10);
        console.log(imageData);
        console.log(x,y ,"x/y")
        const pixelData = imageData.data;
          console.log(
            `Rouge : ${pixelData[0]}, Vert : ${pixelData[1]}, Bleu : ${pixelData[2]}, Alpha : ${pixelData[3]}`
          );

      }, false);
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