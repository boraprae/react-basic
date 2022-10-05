import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { switchClasses } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

function AddFruits() {

  useEffect(() => {
    axios
      .get(`http://localhost:9000/fruits`)
      .then((response) => {
        console.log(response.data);
        setFruits(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // state variable for new item
  let [newFruit, setNewFruit] = React.useState("");
  const [fruits, setFruits] = React.useState([]);
  const navigate = useNavigate();

  // ========== Add item ===========
  const addFruit = () => {
    // clone fruit array
    let newFruits = [...fruits];
    // create object of new fruit
    const item = {
      name: newFruit,
      image: "/apple.jpg",
      id: newFruits.length + 101,
    };
    // add new item to array
    newFruits.push(item);
    axios
      .post(`http://localhost:9000/fruits`, {
        name: newFruit,
        image: "/apple.jpg",
        id: newFruits.length + 101,
      })
      .then((res) => {
        console.log(res);
        console.log("The result: " + res.data);
      });
    // update state
    setFruits(newFruits);
    setNewFruit("");
    navigate("/", , {replace: true});
  };

  return (
    <>
      <>
        <Grid container justifyContent="flex-end">
          <br></br>
          <TextField
            id="outlined-basic"
            label="Enter fruit..."
            variant="outlined"
            onChange={(e) => setNewFruit(e.target.value)}
            value={newFruit}
            fullWidth
          />

          <Button variant="contained" onClick={addFruit}>
            OK
          </Button>
          <Button variant="outlined">Cancel</Button>
        </Grid>
      </>
    </>
  );
}

export default AddFruits;
