import * as React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();

    const products = [
      {"id": 100, "name": "shirt", "price": 200},
      {"id": 101, "name": "shoe", "price": 500},
    ];
  return (
    <>
      <h1>Home</h1> 
      <button onClick={()=> navigate('/about', {state: products[1]})}>About</button>
    </>
  );
};

export default Home;
