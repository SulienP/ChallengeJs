// !function to send items to local storage
function toLocalStorage(element, type) {
    switch (type) {
      case "myMairie":
        localStorage.setItem("myMairie", JSON.stringify(element));
        break;
      case "firstDate":
        localStorage.setItem("firstDate", JSON.stringify(element));
        break;
      case "batimentArray":
        localStorage.setItem("batimentArray", JSON.stringify(element));
        break;
      case "axeY":
        localStorage.setItem("axeY", JSON.stringify(element));
        break;
      case "limite":
        localStorage.setItem("limite", JSON.stringify(element));
        break;
      default:
        break;
    }
}
export default toLocalStorage;