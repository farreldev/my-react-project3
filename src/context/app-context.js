import { createContext, useEffect, useContext, useReducer } from "react"

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

function fnReduce(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - action.payload};
        case 'updateUser':
            return {...state, user: action.payload};
        default:
            throw new Error(`Unexpected action type: ${action.type}`);
    }
}

const initState = {
    count: 85,
    user: {},
}

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(fnReduce, initState);

    useEffect(() => {
        const user = {
            name: "John Doe",
            avatar: `https://randomuser.me/api/portraits/men/${state.count}.jpg`,
        };
        // setUser(user);
        dispatch({ type: 'updateUser', payload: user })
    }, [state.count]);

    const appContextVal = [state, dispatch];
    
    return <AppContext.Provider value={appContextVal}> {children} </AppContext.Provider>
}
