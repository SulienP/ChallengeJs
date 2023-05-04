import { Button } from "@mantine/core";
import upgrade from "../../gameManager/upgrade";

let displayValue = false

function upgradeBatiment(batimentName, cost, currentLvl) {
    displayValue = true;
    return (
      <>
            <div class="uprgade" style={{ display: displayValue } }>
                ${batimentName},<Button onClick={() => { upgrade();   displayValue = false }}>${cost}</Button>, $
          {currentLvl}
        </div>
      </>
    );
}
export default upgradeBatiment;
