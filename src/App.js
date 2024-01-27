import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Profile from "./Profile";
import Contact from "./Contact";
import "./App.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
function App() {
  var storedtheme = localStorage.getItem("dark_mode");
  if (!storedtheme) {
    storedtheme = "light";
  }
  const [theme, setTheme] = useState(
    storedtheme === "light" ? "light" : "dark"
  );
  const ToggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  localStorage.setItem("dark_mode", theme);

  return (
    <>
      <ThemeContext.Provider value={{ theme, ToggleTheme }}>
        <div className="app" id={theme}>
          <Navbar value={{ theme, ToggleTheme }} />
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Profile />
          <Contact />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
