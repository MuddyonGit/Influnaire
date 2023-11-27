// MyContext.js
import React, { createContext, useContext, useState, useCallback } from "react";

const MyContext = createContext({
  selectedMode: "brand",
  toggleSwitch: () => {},
});

interface ToggleSwitchProps {
  children: React.ReactNode; // Specify the type explicitly as React.ReactNode
}

export function MyContextProvider({ children }: ToggleSwitchProps) {
  const [selectedMode, setSelectedMode] = useState("brand");

  const toggleSwitch = useCallback(() => {
    setSelectedMode((prevMode) =>
      prevMode === "brand" ? "influencer" : "brand"
    );
  }, []);

  return (
    <MyContext.Provider value={{ selectedMode, toggleSwitch }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}
