import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const[Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark Mode has been enbled" , "Success");
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light Mode has been enbled" , "Success");
    }
};
  return (
    <>
   <Navbar mode={Mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container">
   <TextForm heading="Enter The Text To Analyze" mode={Mode} showAlert={showAlert}/>
   </div>
    </>
  );
}

export default App;
