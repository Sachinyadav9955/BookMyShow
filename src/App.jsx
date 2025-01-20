import { useState } from "react";
import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import OneMOvieCard from "./Component/Cards/OneMOvieCard";
import AllCard from "./Component/CombineDataCard/AllCard";
import Home from "./Component/Home";
import SeatingBooking from "./Component/Cards/SeatingBooking";
import Success from "./Component/Cards/Success";
import { Cancel } from "axios";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/' element={} /> */}
        <Route path="/movies/:id" element={<OneMOvieCard />} />
        <Route path="/AllCard" element={<AllCard />} />
        <Route path="/seatingBook/:id" element={<SeatingBooking/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/cancel" element={<Cancel/>} />
      </Routes>
    </>
  );
}

export default App;
