import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListner } from "../utils/Utils";

export const UserContext = createContext({
  setcurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListner((user)=>{
            if (user){
                createUserDocumentFromAuth(user)
            }
            setcurrentUser(user)

        })

    },[])
  const [currentUser, setcurrentUser]  = useState(null);
  const value = { currentUser, setcurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
