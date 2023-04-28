function toLocalStorage(element, type) {
    switch (type) {
      case "myMairie":
        localStorage.setItem("myMairie", JSON.stringify(element));
        break;
      case "firstDate":
        localStorage.setItem("firstDate", JSON.stringify(element));
        break;
      case "batimentStructure":
        localStorage.setItem("batimentStructure", JSON.stringify(element));
        break;
      default:
        break;
    }
}
export default toLocalStorage;