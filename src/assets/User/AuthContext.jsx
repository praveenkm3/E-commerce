import { useContext, createContext, useState, useEffect } from "react";
const AuthContext = createContext();


const authStatus={userLoggedIn:false};
export function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(false);
  function userActivate() {
    setLoggedUser(true);
    authStatus.userLoggedIn=true;

  }
  function userDeActivate(){ 
    setLoggedUser(false);
    authStatus.userLoggedIn=false;
  }
  
  return (
    <AuthContext.Provider value={{ loggedUser, userActivate, userDeActivate }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function UseAuth() {
  return useContext(AuthContext);
}
export function GetAuthStatus(){
  return authStatus;
}
