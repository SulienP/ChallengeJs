import "../../../css/card.css";
import { Button } from "@mantine/core";
import React, { useState } from "react";
function Card() {
    const [buttonDisplay , buttonDisplaySetState] = useState(true)
    const [militaryState, militarySetState] = useState(false);
    const [ressourceState, ressourceSetState] = useState(false);
    const [defenseState, defenseSetState] = useState(false);
    const [miningState, miningSetState] = useState(false);
    const [decorationState, decorationSetState] = useState(false);
    const [internButtonState, internButtonSetState] = useState(false);
    function inverseDisplay(element) {
        switch (element) {
          case "military":
            buttonDisplaySetState(!buttonDisplay);
            militarySetState(!militaryState);
            internButtonSetState(!internButtonState);
            break;
          case "defense":
            buttonDisplaySetState(!buttonDisplay);
            defenseSetState(!defenseState);
            internButtonSetState(!internButtonState);
            break;
          case "mining":
            buttonDisplaySetState(!buttonDisplay);
            miningSetState(!miningState);
            internButtonSetState(!internButtonState);
            break;
          case "ressource":
              buttonDisplaySetState(!buttonDisplay);
              ressourceSetState(!ressourceState);
              internButtonSetState(!internButtonState);;
            break;
          case "decoration":
               buttonDisplaySetState(!buttonDisplay);
               decorationSetState(!decorationState);
               internButtonSetState(!internButtonState);
                break
            default:
                
                break;
        }
       
    }     
  return (
    <>
      <div className="card">
        <div className="container">
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("military");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Military
          </Button>
          <div
            id="content"
            style={{ display: militaryState ? "block" : "none" }}
          >
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("military");
                }}
              >
                <Button
                  id="zehi"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 105 }}
                >
                  ZEHI: XXXoil
                </Button>
                <Button
                  id="militaryBase"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  label="dfghjk"
                >
                  MilitaryBase XXXXor XXX oil
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("ressource");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Ressource
          </Button>
          <div
            id="content"
            style={{ display: ressourceState ? "block" : "none" }}
          >
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("ressource");
                }}
              >
                <Button
                  id="mairie"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Mairie 0 or
                </Button>
                <Button
                  id="strongBoxe"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Or Storage 110 oil
                </Button>
                <Button
                  id="silot"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Oil Storage 100 or
                  {/* <img src=""></img> */}
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("defense");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Defense
          </Button>
          <div
            id="content"
            style={{ display: defenseState ? "block" : "none" }}
          >
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("defense");
                }}
              >
                <Button
                  id="milice"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Milice XXXX
                </Button>
                <Button
                  id="cannon"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Cannon XXXXX 
                </Button>
                <Button
                  id="laser"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Laser XXXX 
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("mining");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Mining
          </Button>
          <div id="content" style={{ display: miningState ? "block" : "none" }}>
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("mining");
                }}
              >
                <Button
                  id="mine"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Mine  XXXX
                </Button>
                <Button
                  id="drilingMachine"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Driling oil XXXX 
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("decoration");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Decoration
          </Button>
          <div
            id="content"
            style={{ display: decorationState ? "block" : "none" }}
          >
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("decoration");
                }}
              >
                <Button
                  id="hologram"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Hologram xxxx 
                  {/* <img src=""></img> */}
                </Button>
                <Button
                  id="banch"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Banch XXXX
                  {/* <img src=""></img> */}
                </Button>
                <Button
                  id="pub"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Pub XXXX
                </Button>
              </Button.Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
