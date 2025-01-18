import React from 'react'
import useRole from '../hooks/useRole'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {
    const {role} = useRole()

    if (role !== "Admin") {
      return <Navigate to={"/dashboard"}></Navigate>
    }
  
      return (
      <div>{children}</div>
    )
  }
  
export default AdminPrivateRoute