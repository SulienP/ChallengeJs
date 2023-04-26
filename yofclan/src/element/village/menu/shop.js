import { Button } from "@mantine/core";
import React, { useState } from "react";
import Card from "./card";
function Shop() {
  const [state, setState] = useState(false);
  function inverseDisplay() {
      setState(!state)
  }
  return (
    <>
      <Button
        variant="subtle"
        color="indigo"
        id="shop"
        onClick={inverseDisplay}

      >
        Shop
      </Button>
      <div id="d1" style={{ display: state ? "block" : "none" }}>
        <Card></Card>
      </div>
    </>
  );
}
export default Shop;
