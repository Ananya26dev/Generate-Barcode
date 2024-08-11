import React from "react";
import BarcodeText from "./components/BarcodeText";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="container">
        <h1>Create a Barcode in React.js using react-barcode package</h1>
      </div>
      <BarcodeText />
    </>
  );
};

export default App;
