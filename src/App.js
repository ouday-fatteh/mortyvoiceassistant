import { Navbar, MainPage, Footer } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const toggleMode = (mode) => {
      const css =
        mode === "dark"
          ? "linear-gradient(109.6deg,rgb(36, 45, 57) 11.2%,rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)"
          : "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";
      const body = document.body || document.getElementsByTagName("body")[0];
      body.style.background = css;
    };
    toggleMode(mode);
  }, [mode]);

  return (
    <div className="App">
      <Navbar mode={mode} />
      <MainPage setMode={setMode} mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
