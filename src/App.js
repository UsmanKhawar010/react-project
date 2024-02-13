import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
  return (
    <>
      
      <Navbar/>
      <div className="container">
        <TextForms heading = "Enter the desired passage"/>
      </div>
      
    </>
  );
}

export default App;
