import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import "./App.css";
import { Appointment } from "./components/Appointment";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <div className="header">
        <h1>Appointment  Planner</h1>
      </div>
      <nav>
        <NavLink to={"/contacts"} activeClassName="active" className="to-contact">
          Contacts
        </NavLink>
        <NavLink to={"/appointments"} activeClassName="active" className="to-appoint">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={"/contacts"} />
          </Route>
          <Route path={"/contacts"}>
            <Contact />
          </Route>
          <Route path={"/appointments"}>
            <Appointment />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;