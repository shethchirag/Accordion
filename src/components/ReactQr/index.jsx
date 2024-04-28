import { useState } from "react";
import QRCode from "react-qr-code";

const ReactQr = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");
  const generateQr = () => {
    setQrValue(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "15px",
        }}
      >
        <input
          style={{ borderRadius: "5px", padding: "5px" }}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
        />
        <button disabled={inputValue === ""} onClick={generateQr}>
          Generate
        </button>
      </div>
      <div>
        <QRCode size={500} value={qrValue} />
      </div>
    </div>
  );
};

export default ReactQr;
