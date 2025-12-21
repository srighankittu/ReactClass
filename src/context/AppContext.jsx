import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("Initial name");
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
