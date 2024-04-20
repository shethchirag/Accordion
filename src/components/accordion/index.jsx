import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [multiSelected, setMultiSelected] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiselect, setMultiselect] = useState([]);
  console.log(selected);

  const accordionToggleHandler = (id) => {
    console.log(id);
    setSelected(id === selected ? null : id);
  };
  // const handleMultiSelection = (getCurrentId) => {
  //   console.log(getCurrentId);
  //   let cpyMutiple = [...multiselect];
  //   const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

  //   console.log(findIndexOfCurrentId);
  //   if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
  //   else cpyMutiple.splice(findIndexOfCurrentId, 1);
  //   setMultiselect(cpyMutiple);
  // };
  const handleMultiSelection = (getCurrentId) => {
    setMultiselect((prev) => {
      if (prev.includes(getCurrentId)) {
        return prev.filter((id) => id !== getCurrentId);
      } else {
        return [...prev, getCurrentId];
      }
    });
  };
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelected(!multiSelected)}>
        {multiSelected ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                onClick={
                  multiSelected
                    ? () => handleMultiSelection(item.id)
                    : () => accordionToggleHandler(item.id)
                }
                className="title"
              >
                <h3> {item.question}</h3>
                <span>+</span>
              </div>
              {multiSelected
                ? multiselect.indexOf(item.id) !== -1 && (
                    <div className="acc-content ">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="acc-content ">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
