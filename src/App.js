import RandomQuote from "./pages/RandomQuote";
import SearchQuote from "./pages/SearchQuote";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="d-flex justify-content-lg-evenly my-4">
        <Link to="/">
          <Button variant="dark">Home</Button>
        </Link>
        <Link to="/random">
          <Button variant="success">Random</Button>
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<SearchQuote />} />
        <Route path="/random" element={<RandomQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
