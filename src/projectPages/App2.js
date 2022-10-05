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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddFruits from "./AddFruits";
import { useNavigate, useParams } from "react-router-dom";

function App2() {
  // state variable to hide/show add and edit dialogs
  const [addHidden, setAddHidden] = React.useState(true);
  const [editHidden, setEditHidden] = React.useState(true);
  // state variable for new item
  // let [newFruit, setNewFruit] = React.useState("");
  const [fruits, setFruits] = React.useState([]);

  const navigate = useNavigate();
  const params = useParams();

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your fruit has been deleted.", "success");
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
      }
    });

    // get("http://localhost:9000/fruits/" + id)
    // const newData = fruits.filter((fruit, index) => {
    //   return fruit.id !== id;
    // });
    // setFruits(newData);
  };
  
  // ========== Add item ===========
  // const addFruit = () => {
  //   console.log(params.name);
  //   // clone fruit array
  //   let newFruits = [...fruits];
  //   // create object of new fruit
  //   const item = {
  //     name: newFruit,
  //     image: "/apple.jpg",
  //     id: newFruits.length + 101,
  //   };
  //   // add new item to array
  //   newFruits.push(item);
  //   axios
  //     .post(`http://localhost:9000/fruits`, {
  //       name: newFruit,
  //       image: "/apple.jpg",
  //       id: newFruits.length + 101,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  //   // update state
  //   setFruits(newFruits);
  //   setNewFruit("");
  //   navigate("/");
  // };

  // ========== Prepare to Edit item ===========
  const beforeEdit = (index, fruitName) => {
    setEditHidden(!editHidden);
    setFruitIndex(index);
    setEditFruitName(fruitName);
  };

  // ========== Edit item ===========
  // const editFruit = () => {
  //   let newFruits = [...fruits];
  //   newFruits[fruitIndex].name = editFruitName;
  //   setFruits(newFruits);
  //   setEditHidden(true);
  // };

  return (
    <>
      <h1>Fruit shop management system</h1>
      <div className="btnAddLayout">
        <button className="btnAdd" onClick={() => navigate("/addFruits")}>
          Add
        </button>
      </div>

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
        {/* <TextField
          id="outlined-basic"
          label="Fruit Name"
          variant="outlined"
          placeholder="Enter fruit..."
          value={editFruitName}
          onChange={(e) => setEditFruitName(e.target.value)}
          color="success"
          required
        /> */}

        {/* <Button onClick={editFruit} variant="contained">
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
        </Button> */}
      </div>
      {/* -------------------------- */}
    </>
  );
}

export default App2;
