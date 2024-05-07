import "./App.css";
import ReactQr from "./components/ReactQr";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import RandomColor from "./components/randomColor";
import ScrollIndicator from "./components/scroll-indicator";
// const url = "https://picsum.photos/v2/list";
function App() {
  return (
    <>
      <div className="App">
        {/* <Accordion /> */}
        {/* <RandomColor /> */}
        {/* <ImageSlider url={url} limit={10} page={10} /> */}
        {/* <ReactQr /> */}
        {/* <LightDarkMode /> */}
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      </div>
    </>
  );
}

export default App;
