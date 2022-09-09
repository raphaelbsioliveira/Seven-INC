import "./styles.css";
import React from "react";
import Home from "./Home";
import AddUser from "./AddUser";
import User from "./User";
import EditUser from "./EditUser";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/edituser/:id" component={EditUser} />
          <Route exact path="/user/:id" component={User} />        
        </Switch>
      </div>
    </Router>
  );
}
