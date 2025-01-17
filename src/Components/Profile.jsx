import React from 'react'
import useRole from '../hooks/useRole'
import UserProfile from '../Pages/Profile/UserProfile'
import Spinner from './Common/Spinner'
import MemberProfile from '../Pages/Profile/MemberProfile'
import AdminProfile from '../Pages/Profile/AdminProfile'


const Profile = () => {
    const {role} = useRole()

    if (!role) {
        return <Spinner></Spinner>
    }

    if (role === "User") {
        return <UserProfile></UserProfile>
    }
    if (role === "Member") {
        return <MemberProfile></MemberProfile>
    }
    if (role === "Admin") {
        return <AdminProfile></AdminProfile>
    }
}

export default Profile