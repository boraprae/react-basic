import * as React from "react";
import "./App.css";
import Fruit from "./components/Fruit";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function App2() {
  // state variable to hide/show add and edit dialogs
  const [addHidden, setAddHidden] = React.useState(true);
  const [editHidden, setEditHidden] = React.useState(true);
  // state variable for new item
  let [newFruit, setNewFruit] = React.useState("");

  const intitialState = [
    { name: "banana", id: 100, image: "/banana.jpg" },
    { name: "apple", id: 101, image: "/apple.jpg" },
    { name: "orange", id: 102, image: "/orange.jpg" },
  ];
  const [fruits, setFruits] = React.useState(intitialState);
  // state variable to keep selected fruit index in array and fruit name
  const [fruitIndex, setFruitIndex] = React.useState(0);
  const [editFruitName, setEditFruitName] = React.useState("");

  const deleteFruit = (id) => {
    const newData = fruits.filter((fruit, index) => {
      return fruit.id !== id;
    });
    setFruits(newData);
  };

  // ========== Add item ===========
  const addFruit = () => {
    // console.log(newFruit);
    // clone fruit array
    let newFruits = [...fruits];
    // create object of new fruit
    const item = {
      name: newFruit,
      image: "apple.png",
      id: newFruits.length + 101,
    };
    // add new item to array
    newFruits.push(item);

    // const test = [...fruits, {name: newFruit, image: 'apple.png', id: newFruits.length + 101}];
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
              
              <Button variant="contained" onClick={addFruit}>OK</Button>
              <Button variant="outlined" onClick={() => setAddHidden(!addHidden)}>Cancel</Button>
              
              
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
        <input
          type="text"
          placeholder="Enter fruit..."
          value={editFruitName}
          onChange={(e) => setEditFruitName(e.target.value)}
          required
        />
        <button onClick={editFruit}>OK</button>
        <button
          onClick={() => {
            setEditHidden(!editHidden);
            setEditFruitName("");
          }}
        >
          Cancel
        </button>
      </div>
      {/* -------------------------- */}
    </>
  );
}

export default App2;
