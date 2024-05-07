import React, { useEffect, useState } from "react";

import "./scroll.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [scrollPr, setScrollPr] = useState(0);

  const getData = async (getUrl) => {
    setLoading(true);
    try {
      const response = await fetch(getUrl);
      const dataPromise = await response.json();
      setData(dataPromise);
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    getData(url);
    console.log(url);
  }, []);

  const handlerScroll = () => {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPr((howMuchScroll / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <div className="nav-main">
        <h1>Scroll Indicator</h1>
        <div className="scroll-container">
          <div className="scroll-bar" style={{ width: `${scrollPr}%` }}></div>
        </div>
      </div>
      <div className="data-container">
        {data &&
          data?.products &&
          data?.products.length > 0 &&
          data?.products.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
