import React from "react";
import "./App.css";
import { Contenido, Admin } from "../";
import Private from "../../components/rutas/Admin";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Switch>
      <Route exact path="/">
        <Contenido />
      </Route>
      <Route path="/admin" >
         <Admin />
      </Route>
    </Switch>
      </Provider>
    </Router>
  );
}

export default App;
