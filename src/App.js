import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
import Alerts from "./components/Alerts";

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
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'var(--bs-dark)';
      document.body.style.color = 'var(--bs-light)';
      showAlert("Dark mode activated", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'var(--bs-dark)';
      showAlert("Light mode activated", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode} />
      <Alerts alert = {alerts}/>
      <div className="container my-3">
        <TextForm mode={mode} alert={showAlert}/>
        {/* <About /> */}
      </div>
      <Footer/>
    </>
  );
}

export default App;
