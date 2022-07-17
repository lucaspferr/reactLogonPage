import React from "react";
import { useNavigate } from "react-router-dom";

export const CounterContext = React.createContext();

export const CounterStorage = ({ children }) => {
  const logout = useNavigate();
  const [counter, setCounter] = React.useState(600);

  React.useEffect(() => {
    if (counter === 0) {
      logout("/");
      localStorage.removeItem("token");
    }
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
