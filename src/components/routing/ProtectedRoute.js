import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
  
    const role ="Teacher";
    if(role ==="student"){

        alert('Your are not allowed to go this route')
        return<Navigate  to="/home" replace/>;
    }
  
    return children ;
}
