import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import AboutTeam from "./components/AboutTeam";
import { AppContext } from "./context/app-context";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const user = {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    };
    setUser(user);
  }, []);

  const appContextVal = {
    user,
    theme,
    setUser,
    setTheme,
  };

  return (
    <div className="overflow-x-hidden h-screen bg-white dark:bg-gray-700">
      <div className="max-w-[1200px] mx-auto px-4">
        <AppContext.Provider value={appContextVal}>
          <Header />
          {/* <header className='border-b p-4 mb-5 flex justify-between items-center'>
            <nav className='space-x-7'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </nav>
            <div>
              <button>Switch</button>
            </div>
          </header> */}

          <main className="px-4 dark:text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/about/team" element={<AboutTeam />} />
            </Routes>
          </main>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
