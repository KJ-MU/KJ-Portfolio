import "./App.css";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";
function App() {
  const [theme, setTheme] = useState("dark");
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="dark:bg-Darkblue dark:text-white px-5">
      <NavBar theme={theme} handleTheme={handleTheme} pathname={pathname} />

      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact me" element={<Contacts />} />
      </Routes>
      <Footer />
      <div className="container mx-auto"></div>
    </div>
  );
}

export default App;
