import React from "react";
import './App.css'
import CakeView from './Redux/Cake/CakeView'
import UserView from './Redux/User/UserView'

function App() {
  
  return (
    <div className="App">
    <CakeView />
    <UserView />
    </div>
  )
}

export default App;
