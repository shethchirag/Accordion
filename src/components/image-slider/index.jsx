import { useEffect, useState } from "react";
import {
  BsArrowLeftCircle,
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlice, setCurrentSlice] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  console.log(images);
  const handleNext = () => {
    setCurrentSlice(currentSlice === images.length - 1 ? 0 : currentSlice + 1);
  };
  const handlePreview = () => {
    setCurrentSlice(currentSlice === 0 ? images.length - 1 : currentSlice - 1);
  };

  const fetchImage = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?limit=${limit}&page=${page}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (errorMessage !== null) {
    return <h1>Error {errorMessage}</h1>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePreview}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              className={
                currentSlice === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
              src={image.download_url}
              alt={image.author}
              key={image.id}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlice === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlice(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
