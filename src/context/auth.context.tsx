import { createContext, FC, useContext } from "react";
interface Props {
  // any props that come into the component
}

interface User {
  login: boolean;
}

interface AppContextInterface {
  user: User;
}

export const authContext = createContext<AppContextInterface | null>(null);

export const useAuth = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error("There is no Auth Provider.");
  }

  return context;
};

export const AuthProvider: FC<Props> = ({ children, ...props }) => {
  const user = { login: true };

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};
