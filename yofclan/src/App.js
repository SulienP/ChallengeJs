import './App.css';
import Shop from "../src/element/village/menu/shop.js";
import Village from '../src/element/village/village.js';
import OilBar from '../src/element/village/menu/oilBar.js'
import GoldBar from "../src/element/village/menu/orBar.js";
import GameManager from "../src/element/gameManager/gameManager.js";
function App() {
  return (
    <>
        <GameManager></GameManager>
        <GoldBar></GoldBar>
        <OilBar></OilBar>
$      <Village></Village>
      <Shop></Shop>
    </>
  );
}

export default App;
