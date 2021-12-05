import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Task from './component/Task';
import {BrowserRouter as Routes, Link, Route } from "react-router-dom";


function App() {
  return (
    <>
  <Login/>
  <Register/>
  <Task/>
  
      
      </>
  );
}

export default App;
