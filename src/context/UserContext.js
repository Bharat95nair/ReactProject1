import { Children, createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider = ({children})=>{

    const [user,setUser] = useState({name:'Guest'});

    const setLoggedInUser =(name)=>{
        setUser({name})
    } 

    return  <UserContext.Provider value = {{user,setLoggedInUser}}>
                {children}
            </UserContext.Provider>
}