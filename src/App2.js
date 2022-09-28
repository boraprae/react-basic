import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Fruit from "./components/Fruit";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";

function App2() {
  // state variable to hide/show add and edit dialogs
  const [addHidden, setAddHidden] = React.useState(true);
  const [editHidden, setEditHidden] = React.useState(true);
  // state variable for new item
  let [newFruit, setNewFruit] = React.useState("");
  const [fruits, setFruits] = React.useState([]);

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
  console.log(fruits);
  // state variable to keep selected fruit index in array and fruit name
  const [fruitIndex, setFruitIndex] = React.useState(0);
  const [editFruitName, setEditFruitName] = React.useState("");

  const deleteFruit = (id) => {
    // get("http://localhost:9000/fruits/" + id)
    // const newData = fruits.filter((fruit, index) => {
    //   return fruit.id !== id;
    // });
    // setFruits(newData);
    axios
      .delete(`http://localhost:9000/fruits/${id}`)
      .then((response) => {
        const newData = fruits.filter((fruit, index) => {
          return fruit.id !== id;
        });
        setFruits(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ========== Add item ===========
  const addFruit = () => {
    // clone fruit array
    let newFruits = [...fruits];
    // create object of new fruit
    const item = {
      name: newFruit,
      image: "/images/apple.png",
      id: newFruits.length + 101,
    };
    // add new item to array
    newFruits.push(item);
    axios
      .post(`http://localhost:9000/fruits`, {
        name: newFruit,
        image: "/apple.png",
        id: newFruits.length + 201,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    // update state
    setFruits(newFruits);
    setNewFruit("");
  };

  // ========== Prepare to Edit item ===========
  const beforeEdit = (index, fruitName) => {
    setEditHidden(!editHidden);
    setFruitIndex(index);
    setEditFruitName(fruitName);
  };

  // ========== Edit item ===========
  const editFruit = () => {
    let newFruits = [...fruits];
    newFruits[fruitIndex].name = editFruitName;
    setFruits(newFruits);
    setEditHidden(true);
  };

  return (
    <>
      <h1>Fruit shop management system</h1>
      <div className="btnAddLayout">
        <button className="btnAdd" onClick={() => setAddHidden(!addHidden)}>
          Add
        </button>
      </div>
      {!addHidden && (
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
            <Button variant="outlined" onClick={() => setAddHidden(!addHidden)}>
              Cancel
            </Button>
          </Grid>
        </>
      )}

      {/* </div> */}
      {fruits.map((fruit, index) => {
        return (
          <Fruit
            fruit={fruit}
            index={index}
            deleteFruit={deleteFruit}
            beforeEdit={beforeEdit}
            key={fruit.id}
          />
          // <div className="fruit-item" key={fruit.id}>
          //   <h2>{fruit.name}</h2>
          //   <div className="avatar">
          //     <img className="imgSize" src={fruit.picture} alt={fruit.name} />
          //   </div>
          //   <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
          //   <button onClick={editFruit}>Edit</button>
          // </div>
        );
      })}

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

export default App2;
