import { useContext, createContext, useState } from "react";
const AuthContext = createContext();


// const authStatus={userLoggedIn:false};
export function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(false);
  function userActivate() {
    setLoggedUser(true);
    localStorage.setItem("userlogged","true");

  }
  function userDeActivate(){ 
    setLoggedUser(false); 
    localStorage.setItem("userlogged","false");

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
// export function GetAuthStatus(){
//   return authStatus;
// }
