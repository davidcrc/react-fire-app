import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, FC, useContext } from "react";
import { auth } from "../firebase-config";

interface AppContextInterface {
  // user: User;
  signUp: any;
}

export const authContext = createContext<AppContextInterface | null>(null);

export const useAuth = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error("There is no Auth Provider.");
  }

  return context;
};

export const AuthProvider: FC = ({ children }) => {
  // const user = { login: true };
  const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

  return <authContext.Provider value={{ signUp }}>{children}</authContext.Provider>;
};
