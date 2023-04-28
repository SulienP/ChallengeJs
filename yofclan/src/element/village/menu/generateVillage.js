import { Button } from "@mantine/core";
import React, { useState } from "react";
import drawLastVillage from "../../gameManager/drawLastVillage.js"
function GenrateVillage() {
        const [buttonDisplay, buttonDisplaySetState] = useState(true);
    function inverseDisplay() {
        buttonDisplaySetState(!buttonDisplay);
    }
    return (
      <>
        <Button
          style={{ display: buttonDisplay ? "block" : "none" }}
          onClick={() => {
            inverseDisplay();
            drawLastVillage();
          }}
        >
          generate my Village
        </Button>
      </>
    );
}
export default GenrateVillage;