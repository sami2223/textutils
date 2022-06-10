// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);


  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = "#404035";
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"; // for changing site title dynamically

      // setInterval(() => {
      //   document.title = "Hello Dear..."
      // }, 1000);
      // setInterval(() => {
      //   document.title = "How are you..."
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
      document.title = "TextUtils - Light Mode"; // for changing site title dynamically
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar title="TextUtils" aboutText="About"  /> */}
        {/* <Navbar  /> */}
        <div className="container my-3">
          <Alert alert={alert} />

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
