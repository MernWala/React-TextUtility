import { useState } from "react";
import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState('dark');
  const [alerts, setAlerts] = useState(null);

  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlerts(null);
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'var(--bs-dark)';
      document.body.style.color = 'var(--bs-light)';
      showAlert("Dark mode activated", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'var(--bs-dark)';
      showAlert("Light mode activated", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alerts} />
        <Routes>
          <Route path='/' element={<TextForm mode={mode} alert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
