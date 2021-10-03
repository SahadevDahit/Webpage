import React from 'react';
import {  Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Download from './components/Download'
import Contact from './components/Contact'
import Navbar from './components/navbar'
import Login from './components/login';

function App() {
  return (
    < >
      <Navbar />
        <Switch>  <Route exact path="/" component={Home} />
         <Route exact path="/home" component={Home} />
         <Route exact  path="/download" component={Download} />
         <Route path="/Contact" component={Contact} />
         <Route path="/login" component={Login} />
         
         </Switch>

      {/* 
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/download">
          <Download />
        </Route>

        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route> */}


    </>
  );
}

export default App;
