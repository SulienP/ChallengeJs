import './App.css';
import React from "react";
import Shop from "../src/element/village/menu/shop.js";
import Village from '../src/element/village/village.js';
import OilBar from '../src/element/village/menu/oilBar.js'
import GoldBar from "../src/element/village/menu/orBar.js";
import GameManager from "../src/element/gameManager/gameManager.js";
import Attaque from "../src/element/village/menu/attaque.js";
import AddButtonRessource from "../src/element/village/menu/addButtonRessouce.js";
import "../src/css/AddButtonRessource.css";
function App() {
  
  return (
    <>
      <GameManager></GameManager>

      <div class="Gold">
        <GoldBar></GoldBar>
      </div>
      <div class="Oil">
        <OilBar></OilBar>
      </div>
      <div class="Attaque">
        <Attaque></Attaque>
      </div>
      <div class="Village">
        <Village></Village>
      </div>
      <div class="Shop">
        <Shop></Shop>
      </div>

      <div class="AddButtonRessource">
        <AddButtonRessource></AddButtonRessource>
      </div>
    </>
  );
}
GameManager()
export default App;
