function test() {
    console.log("on passe ici")
    let canvas = document.querySelector("#myVillage");
    let ctx = canvas.getContext("2d");
    let village = new Image(400, 400)
    village.src = "./banch.jpg";
    village.onload = function () {
        ctx.drawImage(village, 0, 0, 200, 200);
    };
}
export default test;