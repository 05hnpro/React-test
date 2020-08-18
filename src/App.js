import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import Home from "./components/Home";
import { Lunch } from "./components/Lunch";
import { NoMatch } from "./components/NoMatch";
import Location from "./components/Location";
import './App.css';


function App() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {/* <Route path="/home" component={Home} /> */}
            <Route exact path="/" component={Lunch} />
            <Route exact path="/map" component={Location} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
}

export default App;
