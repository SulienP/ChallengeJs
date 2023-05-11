import { Button } from "@mantine/core";
import AddRessource from "../../gameManager/addRessource.js";

//!add button
function AddButtonRessource() {
    return (
      <>
        <Button
          variant="subtle"
          color="indigo"
          id="AddButtonRessource"
          onClick={AddRessource}
        >
          Add ressource
        </Button>
      </>
    );
}
export default AddButtonRessource;
