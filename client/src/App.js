import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AddHome from "./components/AddHome";
import Search from "./components/Search";
import { Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <div>
      <Navbar/>
      <AddHome/>
    </div>
  );
}

export default App;