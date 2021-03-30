import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./Header.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
