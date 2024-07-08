import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";

import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';
import Home from "./pages/Home/Home";
import PageNotFound from './pages/PageNotFound/PageNotFound';
import NavBar from './pages/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="*" element={<PageNotFound/>}/> 
       

        {/* Handle all irrelevant routes */}
       

      </Routes>
     
    </div>
  );
}

export default App;
