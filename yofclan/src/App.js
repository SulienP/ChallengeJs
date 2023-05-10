import './App.css';
import React, { useState } from "react";
import Shop from "../src/element/village/menu/shop.js";
import Village from '../src/element/village/village.js';
import OilBar from '../src/element/village/menu/oilBar.js'
import GoldBar from "../src/element/village/menu/goldBar.js";
import GameManager from "../src/element/gameManager/gameManager.js";
import Attaque from "../src/element/village/menu/attaque.js";
import AddButtonRessource from "../src/element/village/menu/addButtonRessouce.js";
import GenrateVillage from './element/village/menu/generateVillage';
import HelpButton from './element/village/menu/helpButton';
import "../src/css/AddButtonRessource.css";
import UpgradeBatiment from './element/village/menu/upgradeBatimentElement';
function App() {

  return (
    <>
      <div class="Generate">
        <GenrateVillage></GenrateVillage>
      </div>
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
      <div class="HelpButton">
        <HelpButton></HelpButton>
      </div>
      <div class="upgrade">
        <UpgradeBatiment></UpgradeBatiment>
      </div>
    </>
  );
}
GameManager()
export default App;
