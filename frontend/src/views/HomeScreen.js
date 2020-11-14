import React, { useContext } from 'react'
import { UserContext } from '../userContext'

export const HomeScreen = () => {
    const userDetails = useContext(UserContext);
    return (
        <div>
            <div>Name: {userDetails.userData.name} </div>
            <div>Email: {userDetails.userData.email}</div>
            <div>Password: {userDetails.userData.password}</div>
        </div>
    )
}
