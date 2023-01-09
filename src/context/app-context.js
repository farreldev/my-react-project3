import { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext({});

export function useAppContext() {
    return useContext(AppContext)
}

export function AppProvider({ children }) {

    const [name, setName] = useState('');
    const [theme, setTheme] = useState('light');

    const appContextValue = {
        name,
        setName,
        theme,
        setTheme
    }
    
    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },[theme]);
    return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
}