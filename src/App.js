import React from "react";
import Home from "./components/home";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Exercise from "./components/exercise";
import About from "./components/about";
import Footer from "./components/footer";
import ExerciseDetail from "./components/exerciseDetail";

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/exercise" element={<Exercise/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/:id" element={<ExerciseDetail />}/> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App