import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App2 from "./App2";
import AddFruits from "./AddFruits";
import Home from "../pages/Home";
import About from "../pages/About";
import DataTableApp from "../datagrid/dataTableApp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataTableApp/>}/>
        <Route path="/addFruits" element={<AddFruits/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
