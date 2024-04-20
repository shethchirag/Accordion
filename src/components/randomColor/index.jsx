import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  console.log("🚀 ~ RandomColor ~ typeOfColor:", typeOfColor);

  const [color, setColor] = useState("#000000");

  const randomColorPicker = (digit) => {
    return Math.floor(Math.random() * digit);
  };
  const generateHexColor = () => {
    let colorDigit = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += colorDigit[randomColorPicker(colorDigit.length)];
    }
    setColor(hexColor);
    console.log(color);
  };
  const generateRgbColor = () => {
    let r = randomColorPicker(256);
    let g = randomColorPicker(256);
    let b = randomColorPicker(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") {
      generateHexColor();
    } else {
      generateRgbColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
      <button
        onClick={() => setTypeOfColor("rgb")}
        style={{ marginLeft: "10px", marginRight: "10px", marginTop: "10px" }}
      >
        Generate RGB Color
      </button>
      <button
        onClick={typeOfColor === "hex" ? generateHexColor : generateRgbColor}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "30px",
          marginTop: "60px",
          flexDirection: "column",
          gap: "1px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX-COLOR" : "RGB-COLOR"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
