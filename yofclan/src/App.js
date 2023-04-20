import './App.css';
import React from "react";
import Shop from "../src/element/village/menu/shop.js";
import Village from '../src/element/village/village.js';
import OilBar from '../src/element/village/menu/oilBar.js'
import GoldBar from "../src/element/village/menu/orBar.js";
import GameManager from "../src/element/gameManager/gameManager.js";
import Attaque from "../src/element/village/menu/attaque.js";
import Harvest  from './element/village/menu/toHarvest.js';
function App() {
  
  return (
    <>
        <GameManager></GameManager>
      <GoldBar></GoldBar>
      <OilBar></OilBar>
      <Attaque></Attaque>
     <Village></Village>
      <Shop></Shop>
      <Harvest></Harvest>
    </>
  );
}
GameManager()
export default App;
