import React from 'react'
import useRole from '../hooks/useRole'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = () => {
    const {role} = useRole()

    if (role !== "Member") {
      return <Navigate to={"/dashboard"}></Navigate>
    }
  
      return (
      <div>{children}</div>
    )
  }
  
export default AdminPrivateRoute