import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [authDetails, setAuthDetails] = useState({
        isAuthenticated : true,
        token: null,
        email : null
    })

    const login = (token) => {
        setAuthDetails({
            isAuthenticated : true,
            token: token
        })
    }

    const logout = (token) => {
        setAuthDetails({
            isAuthenticated : false,
            token: null,
        })
    }

        return(
            <AuthContext.Provider value={{authDetails, login, logout}}>
                {children}
            </AuthContext.Provider>
        )
}