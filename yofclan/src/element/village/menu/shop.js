import "../../../css/shop.css";
import { Button } from "@mantine/core";
import React, { useState } from "react";
import Card from "./card";
function Sop() {
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
        size="xl"
      >
        Shop
      </Button>
      <div id="d1" style={{ display: state ? "block" : "none" }}>
        <Card></Card>
      </div>
    </>
  );
}
export default Sop;
