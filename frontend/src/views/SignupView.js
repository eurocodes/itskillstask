import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signupUser } from '../API'
import { UserContext } from '../userContext'

export const SignupView = (props) => {

    const history = useHistory()
    const { setUserData } = useContext(UserContext);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleNameInput = val => {
        setData({
            ...data,
            name: val,
        })
    }

    const handleEmailInput = val => {
        setData({
            ...data,
            email: val,
        })
    }

    const handlePasswordInput = val => {
        setData({
            ...data,
            password: val,
        })
    }

    const handleConfirmPasswordInput = val => {
        setData({
            ...data,
            confirmPassword: val,
        })
    }

    const signUp = async () => {
        const response = await signupUser(data.name, data.email, data.password);
        console.log("RESP Signup :", response);
        if (response.name && response.email && response.password) {
            setUserData({
                name: response.name,
                email: response.email,
                password: response.password,
            })
            history.push("/home");
        }
    }
    return (
        <div className="inner-container">
            <div className="header">
                <h4>Create A New Account Account</h4>
                <small>Your student account is your portal to all things Educef: <br />your classroom, projects, forum, career resources, and more!</small>
            </div>
            <div className="box">
                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        className="login-input"
                        onChange={(e) => handleNameInput(e.target.value)}
                        placeholder="User name" />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        name="email"
                        className="login-input"
                        onChange={(e) => handleEmailInput(e.target.value)}
                        placeholder="Email" />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        name="password"
                        className="login-input"
                        onChange={(e) => handlePasswordInput(e.target.value)}
                        placeholder="Password" />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        name="confirmPassword"
                        className="login-input"
                        onChange={(e) => handleConfirmPasswordInput(e.target.value)}
                        placeholder=" Confirm Password" />
                </div>

            </div>
            <div className="lower">
                <button type="button" className="login-btn" onClick={signUp}>SIGN UP</button>
                <div>
                    <small>Or sign up with one of these services</small>
                </div>
                <div className="social-login">
                    <button type="button" className="social facebook" onClick={() => { }}>
                        <i className="fa fa-facebook-f"></i>
                        <span>Facebook</span>
                    </button>
                    <button type="button" className="social twitter" onClick={() => { }}>
                        <i className="fa fa-twitter"></i>
                        <span>Twitter</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
