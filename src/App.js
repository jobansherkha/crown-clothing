import React from "react";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router";
import { Navigation } from "./components/Routes/Navigation/Navigation";
import { Shop } from "./components/Routes/Shop/Shop";
import { SignIn } from "./components/Routes/SignIn/SignIn";
import { Authentication } from "./components/Routes/Authentication/Authentication";


const App = () => {

  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='/SHOP' element={<Shop/>}/>
      <Route path='/signin' element={<Authentication/>}/>
      <Route path='/authentication' element={<Authentication/>}/>
      </Route>
      
     
      
   
  </Routes>
  );
}

export default App;
