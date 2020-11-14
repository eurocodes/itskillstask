import { useState } from 'react';
import { SignInView } from './SignInView';
import { SignupView } from './SignupView';

function AuthScreen() {
    const [togglePages, setTogglePages] = useState({
        isSigninOpen: true,
        isSignupOpen: false,
    })

    const showSigninBox = () => {
        setTogglePages({
            isSigninOpen: false,
            isSignupOpen: true,
        })
    }

    const showSignupBox = () => {
        setTogglePages({
            isSigninOpen: true,
            isSignupOpen: false,
        })
    }

    return (
        <div className="main-container">
            <div className="form-contaner">
                <div className="box-controller">
                    <div className={"controller " + (togglePages.isSigninOpen ? "active-signin" : "")}
                        onClick={showSignupBox}>
                        <div className="toggle">Sign In</div>
                    </div>
                    <div className={"controller " + (togglePages.isSignupOpen ? "active-signup" : "")}
                        onClick={showSigninBox}
                    >
                        <div className="toggle">Sign Up</div>
                    </div>
                </div>
                <div className="box-contaner">
                    {togglePages.isSigninOpen && <SignInView />}
                    {togglePages.isSignupOpen && <SignupView />}
                </div>
            </div>
        </div>
    );
}

export default AuthScreen;
