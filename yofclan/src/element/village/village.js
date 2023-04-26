/*
  TODO: Déplacement des batiments 
*/

function Village() {



  return (
    <>
        <canvas
          id="myVillage"
        ></canvas>
    </>
  );
}

export default Village;

function test() {
  let canvas = document.querySelector("#myVillage");
  console.log(canvas);

  let ctx = canvas.getContext("2d");
  let image = "./banch.jpg";
  image.addEventListener(
    "load",
    function () {
      ctx.drawImage(image, 75, 25, 150, 100);
    },
    false
  );
}
