import { Button } from "@mantine/core";
import  AddRessource  from "../../gameManager/addRessource.js";
function AddButtonRessource() {
    return (
      <>
        <Button
          variant="subtle"
          color="indigo"
          id="shop"
          onClick={AddRessource}
          style={{
            right: "0",
          }}
        >Add ressource</Button>
      </>
    );
}
export default AddButtonRessource;
