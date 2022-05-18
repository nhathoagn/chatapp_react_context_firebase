import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase/config'
export const AuthContext = React.createContext();
function AuthProvider({children}){
    const navigate = useNavigate();
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    useEffect( ()=>{
      const unsubscibed =  auth.onAuthStateChanged( (user) =>{
           if (user){
               const {displayname,email,uid,photoURL} = user;
               setUser({
                   displayname,email,uid,photoURL
               });
               setIsLoading(false)
               navigate("/")
           } 
           navigate("/login")
        });
        return () =>{
            unsubscibed();
        }
    },[navigate])
    return(
        <AuthContext.Provider value={{ user }}>
                {isLoading ? <Spin /> : children }
        </AuthContext.Provider>
    )

}
export default AuthProvider