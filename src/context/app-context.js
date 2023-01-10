import { createContext, useState, useEffect, useContext } from "react"

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ Children }) {
    const [user, setUser] = useState({});
    const [theme, setTheme] = useState("light");

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

    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    
    return <AppContext.Provider value={appContextVal}> {Children} </AppContext.Provider>
}
