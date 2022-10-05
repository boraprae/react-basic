import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App2 from "./App2";
import AddFruits from "./AddFruits";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App2/>}/>
        <Route path="/addFruits" element={<AddFruits/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
