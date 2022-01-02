import { createContext, useContext, useReducer } from "react";

export const GlobalState = createContext();

export const StateProvider = ({ reducer, initState, children }) => (
  <GlobalState.Provider value={useReducer(reducer, initState)}>
    {children}
  </GlobalState.Provider>
);

export const useGlobalState = () => useContext(GlobalState);
