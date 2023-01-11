import { createContext, useState, useEffect, useContext } from "react"

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [user, setUser] = useState({});
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const user = {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/85.jpg",
        };
        setUser(user);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const appContextVal = {
        user,
        theme,
        setUser,
        setTheme,
    };
    
    return <AppContext.Provider value={appContextVal}> {children} </AppContext.Provider>
}
