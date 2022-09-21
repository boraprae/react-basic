import * as React from "react";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App2() {
  // const fruits = [
  //   { name: "banana", id: 100 },
  //   { name: "apple", id: 101 },
  //   { name: "orange", id: 102 },
  // ];
  // //   return fruits.map((fruit, index) => {
  // //     // return <h1 key={index}>{fruit}</h1>;

  // //   });
  // fruits.filter((fruit, index) => {
  //   return fruit === "apple";
  // });
  let [counter, setCounter] = React.useState(0);
  let [counterStatus, setCounterStatus] = React.useState(false);
  let [addHiddle, setAddHiddle] = React.useState(true);
  let [newFruit, setNewFruit] = React.useState("");

  const intitialState = [
    { name: "banana", id: 100, picture: "/images/banana.jpg" },
    { name: "apple", id: 101, picture: "/images/apple.jpg" },
    { name: "orange", id: 102, picture: "/images/orange.jpg" },
  ];
  const [fruits, setFruits] = React.useState(intitialState);

  const increase = () => {
    setCounter(counter + 1);
    if (counter === 4) {
      setCounterStatus(true);
    }
  };

  const reset = () => {
    setCounter(0);
    setCounterStatus(false);
  };

  const deleteFruit = (id) => {
    const newData = fruits.filter((fruit, index) => {
      return fruit.id !== id;
    });
    setFruits(newData);
  };

  const editFruit = () => {
    const newData = fruits.map((fruit, index) => {
      return { ...fruit, name: "fruitName" };
    });
    setFruits(newData);
    console.log(newData);
  };

  const addFruit = () => {
    //console.log(newFruit);
    const newFruits = [...fruits];
    newFruits.push({
      name: newFruit,
      picture: "/images/banana.jpg",
      id: newFruits.length + 101,
    });
    setFruits(newFruits);
  };

  return (
    <>
      {/* <button onClick={increase} disabled={counterStatus}>
        Click
      </button>
      <button onClick={reset}>Reset</button>
      <h1>Click me now :D</h1>
      <p>Counter = {counter}</p>
      <br />
      <br /> */}
      <h1>Fruits</h1>
      <div className="btnAddLayout">
        <button className="btnAdd" onClick={() => setAddHiddle(!addHiddle)}>
          Add
        </button>
        <div hidden={addHiddle}>
          <input
            type="text"
            placeholder="Enter fruit..."
            onChange={(e) => setNewFruit(e.target.value)}
            value={newFruit}
          />
          <button onClick={addFruit}>OK</button>
          <button onClick={() => setAddHiddle(!addHiddle)}>Cancel</button>
        </div>
      </div>
      {fruits.map((fruit) => {
        return (
          <Card sx={{ maxWidth: 345 , mb: 2}} >
            <CardMedia
              component="img"
              height="140"
              image={fruit.picture}
              alt={fruit.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {fruit.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
              <button onClick={editFruit}>Edit</button>
            </CardActions>
          </Card>
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
    </>
  );
}

export default App2;
