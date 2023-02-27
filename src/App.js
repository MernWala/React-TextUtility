import { useState } from "react";
import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404Custom from "./components/Error404Custom.js";

function App() {
  const [mode, setMode] = useState('dark');
  const [alerts, setAlerts] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'var(--bs-dark)';
      document.body.style.color = 'var(--bs-light)';
      showAlert("Dark mode activated", "success");
      setMode('dark');
    }
    else {
      document.body.style.backgroundColor = 'var(--bs-light)';
      document.body.style.color = 'var(--bs-dark)';
      showAlert("Light mode activated", "success");
      setMode('light');
    }
  }

  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlerts(null);
    }, 2000)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alerts} />
        <Routes>
          <Route path='/' element={<TextForm mode={mode} alert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path='*' element={<Error404Custom mode={mode} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
