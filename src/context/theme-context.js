import { createContext, useEffect, useContext, useReducer } from "react"

export const ThemeContext = createContext({});

export function useThemeContext() {
  return useContext(ThemeContext);
}

function fnReduce(state, action) {
    switch (action.type) {
        case 'toggletheme':
            return {...state, theme: state.theme === "dark" ? "light" : "dark"};
        default:
            throw new Error(`Unexpected action type: ${action.type}`);
    }
}

const initState = {
    theme: 'light'
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(fnReduce, initState);

    useEffect(() => {
        if (state.theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [state.theme]);

    const themeContextVal = [state, dispatch];
    
    return <ThemeContext.Provider value={themeContextVal}> {children} </ThemeContext.Provider>
}
