import * as React from "react";
import "./App.css";
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

  const intitialState = [
    { name: "banana", id: 100 },
    { name: "apple", id: 101 },
    { name: "orange", id: 102 },
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

  const editFruit = (fruitName, id) => {
    const newData = fruits.map((fruit, index) => {
      if(fruit.id === id){
        return {...fruit, name: fruitName};
      }
    })
  }

  return (
    <>
      <button onClick={increase} disabled={counterStatus}>
        Click
      </button>
      <button onClick={reset}>Reset</button>
      <h1>Click me now :D</h1>
      <p>Counter = {counter}</p>
      <br />
      <br />
      <h1>Fruits</h1>
      <button>Add</button>
      {fruits.map((fruit) => {
        return (
          <div className="fruit-item" key={fruit.id}>
            <h2>{fruit.name}</h2>
            <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
            <button>Edit</button>
          </div>
        );
      })}
    </>
  );
}

export default App2;
