import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import { useEffect } from 'react';




function App() {


  
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>}/> 
        <Route path="/create_invoice" element={<Home/>}/>
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
