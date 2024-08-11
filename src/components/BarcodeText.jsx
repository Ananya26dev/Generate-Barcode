import React, { useState } from "react";
import "./BarcodeText.css";
import Barcode from "react-barcode";
const BarcodeText = () => {
  const [text, setText] = useState("");
  function generateBarcode(e) {
    setText(e.target.value);
  }
  return (
    <div className="container">
      <div className="input-container">
        <p className="label">Enter Text:</p>
        <input type="text" value={text} onChange={generateBarcode} />
        <br />
      </div>
      {text && <Barcode className="barcode-container" value={text} />}
    </div>
  );
};

export default BarcodeText;
