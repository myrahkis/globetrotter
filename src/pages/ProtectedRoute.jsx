import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContex";
import { useEffect } from "react";

function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(function() {
        
    })

    return children;
}