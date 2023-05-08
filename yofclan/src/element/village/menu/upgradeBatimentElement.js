import { Button } from "@mantine/core";
import upgrade from "../../gameManager/upgrade";
import "../../../css/uppGradeDiv.css"
import React, { useState } from "react";

function UpgradeBatiment(batimentName, cost, currentLvl) {
  const [upgradeDisplay, upgradeDisplaySetState] = useState(false);
  function incverseDisplayUpgrade() {
    upgradeDisplaySetState(!upgradeDisplay);
  }
    return (
        <div className="upgrade"style={{ display: upgradeDisplay ? "block" : "none" }}>
          
          <Button onClick={incverseDisplayUpgrade}> </Button>{" "}
          
        </div>
    );
}
export default UpgradeBatiment;
