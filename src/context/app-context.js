import { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext({});

export function useAppContext() {
    return useContext(AppContext)
}



//     useEffect(() => {
//         if(theme === "dark") {
//             document.documentElement.classList.add("dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//         }
//     },[theme]);