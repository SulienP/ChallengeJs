import './App.css';
import Shop from "../src/element/village/menu/shop.js";
import Village from '../src/element/village/village.js';
import OilBar from '../src/element/village/menu/oilBar.js'
import GoldBar from "../src/element/village/menu/orBar.js";
import StartGame from "../src/element/gameManager/gameGestion.js"
function App() {
  return (
    <>
      <headear>
        <StartGame></StartGame>
        <GoldBar></GoldBar>
        <OilBar></OilBar>
      </headear>
      <Village></Village>
      <Shop></Shop>
    </>
  );
}

export default App;
