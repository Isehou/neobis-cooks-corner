import "./App.css";
import React from "react";
import AppRouter from "./AppRouter";
import SideHeader from "./components/side-header/SideHeader";

function App() {
  return (
    <div className="App">
      <SideHeader />
      <div className="pages-wrapper">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
