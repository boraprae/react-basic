import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Fruit from "../components/Fruit";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { switchClasses } from "@mui/material";
import Swal from "sweetalert2";

function EditFruits() {
  const [editHidden, setEditHidden] = React.useState(true);
  // state variable to keep selected fruit index in array and fruit name
  const [fruitIndex, setFruitIndex] = React.useState(0);
  // state variable for new item
  let [newFruit, setNewFruit] = React.useState("");
  const [fruits, setFruits] = React.useState([]);
  const [editFruitName, setEditFruitName] = React.useState("");

  // ========== Edit item ===========
  const editFruit = () => {
    let newFruits = [...fruits];
    newFruits[fruitIndex].name = editFruitName;
    setFruits(newFruits);
    setEditHidden(true);
  };

  return (
    <>
      {/* ------- Edit dialog  -------*/}
      <div hidden={editHidden}>
        <TextField
          id="outlined-basic"
          label="Fruit Name"
          variant="outlined"
          placeholder="Enter fruit..."
          value={editFruitName}
          onChange={(e) => setEditFruitName(e.target.value)}
          color="success"
          required
        />

        <Button onClick={editFruit} variant="contained">
          OK
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            setEditHidden(!editHidden);
            setEditFruitName("");
          }}
        >
          Cancel
        </Button>
      </div>
      {/* -------------------------- */}
    </>
  );
}

export default EditFruits;
