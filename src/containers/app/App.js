import React from "react";
import "./App.css";
import { Cover, JobExperience, Knowledge, Proyects } from "../";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Cover />
        <JobExperience />
        <Knowledge />
        <Proyects />
      </Provider>
    </Router>
  );
}

export default App;
