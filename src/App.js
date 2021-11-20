import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/topics">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
