import useLocalStorage from "./useLocalStorage";
import "./theme.css";
export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button
          className="btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}
