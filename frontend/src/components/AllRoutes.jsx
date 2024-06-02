import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function PrivateRoute({children}){
    const { authDetails } = useContext(AuthContext)

    if(!authDetails?.isAuthenticated){
        return <Navigate to="/login" />
    }

    return children
}

export function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}