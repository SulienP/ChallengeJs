import { Button } from "@mantine/core";
import AddRessource from "../../gameManager/addRessource.js";

//!add button
function AddButtonRessource() {
    return (
      <>
        <Button
          variant="subtle"
          color="orange"
          id="AddButtonRessource"
          onClick={AddRessource}
        >
          Add ressource
        </Button>
      </>
    );
}
export default AddButtonRessource;
