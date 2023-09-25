import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/FOoter";

function App() {
  const [taskData, setTaskData] = useState({
    counter: 0,
    backlogs: 0,
    doneTasks: 0,
    inprogress: 0,
  });

  const handleChange = (data) => {
    setTaskData(data);
  };

  return (
    <>
      <div className="App">
        <Header taskData={taskData} />
        <Main handleChange={handleChange} />
        <Footer />
      </div>
    </>
  );
}

export default App;
