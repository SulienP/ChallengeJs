import { Button, CloseButton } from "@mantine/core";
import React, { useState } from "react";
import "../../../css/help.css"
function HelpButton() {
    const [helpDisplay, helpDisplaySetState] = useState(false);

    function displayHelp() {
        helpDisplaySetState(!helpDisplay)
    }
    return (
      <>
        <Button onClick={displayHelp}>Help</Button>
        <div class="help" style={{ display: helpDisplay ? "block" : "none", zIndex: 9999 }}>
          Ici sera afficher l'aide
          <CloseButton title="Close popover" size="xl" iconSize={20} onClick={displayHelp} />
        </div>
      </>
    );
}

export default HelpButton;