import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/topics">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
