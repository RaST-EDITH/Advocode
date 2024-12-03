import { useContext, createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
