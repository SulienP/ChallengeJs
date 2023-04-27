
function test(batimentType) {
    let canvas = document.querySelector("#myVillage");
    let ctx = canvas.getContext("2d");

    let value = "";
    switch (batimentType) {
        case "military":
        value = '#706FB3'; 
        break;
        case "defense":
        value = '#D35555';
        break;
        case "decoration":
        value = '#B3D355';
        break;
        default:
        break;
    }
    ctx.fillStyle = value;
    ctx.fillRect(0, 10, 10, 10);
}
export default test;