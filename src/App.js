import Signup from "./Components/Signup";
import Login from "./Components/Login";
import {Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Navigate to="/Home" />} />
    <Route path="/Signup" element={<Signup />}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Home" element={<Navbar title = "Dev@Deakin" type = "search" place = "search" name1 = "Post" name2 = "Login"/>}/>
    </Routes>
    </div>
  );
}

export default App;
