import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/FOoter";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
