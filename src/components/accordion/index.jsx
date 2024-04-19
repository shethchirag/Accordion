import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [multiSelected, setMultiSelected] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiselect, setMultiselect] = useState([]);
  const accordionToggleHandler = (id) => {
    setSelected(id === selected ? null : id);
  };
  const handleMultiSelection = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelected(!multiSelected)}>
        Enable Multi Selection
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
              {selected === item.id && (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
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
