import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import {
  StudentsInsert,
  StudentsList,
  StudentsUpdate,
  StudentInfo,
  StudentsHome,
  StudentHelp,
  InstructorsList
} from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home" exact component={StudentsHome} />
        <Route path="/students/list" exact component={StudentsList} />
        <Route path="/students/create" exact component={StudentsInsert} />
        <Route path="/students/update/:id" exact component={StudentsUpdate} />
        <Route path="/students/:id" exact component={StudentInfo} />
        <Route path="/students/help" exact component={StudentHelp} />
        <Route path="/instructors/list" exact component={InstructorsList} />
      </Switch>
    </Router>
  );
}

export default App;
