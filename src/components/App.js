import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "../styles/style.css";
import Spinner from "./Spinner";
import { Route, HashRouter } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function App() {
  const { showBackground } = useContext(AppContext);

  let bg = !showBackground ? { background: "none" } : {};
  return (
    <div className="app-container" style={bg}>
      <HashRouter>
        <header className="header">
          <h1>Unsplash Clone</h1>
        </header>

        <Route path="/" component={SearchBar} />
        <Route path="/images" exact component={ImageList} />
      </HashRouter>
    </div>
  );
}

export default App;
