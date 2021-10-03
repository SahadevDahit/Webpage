import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from './components/Home'
import Download from './components/Download'
import Contact from './components/Contact'
import reactDom from 'react-dom';
import Navbar from './components/navbar'
import navbar from './components/navbar';
import Login from './components/login';

function App() {
  return (
    < >
<Navbar/>
      <Router>
      <Switch>
        <Route path="/"  exact>
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
        <Route path="/download">
          <Download />
        </Route>

        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
</Switch>
      </Router>

    </>
  );
}

export default App;
