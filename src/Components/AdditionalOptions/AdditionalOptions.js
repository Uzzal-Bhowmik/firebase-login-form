import React, { useState } from 'react';
import './AdditionalOptions.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const AdditionalOptions = () => {

    const [signUpError, setSignUpError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setSignUpError('');
                window.alert('Sign in with google was successful')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSignUpError(errorMessage)
            });
    }


    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setSignUpError('')
                window.alert('Sign In With Github was successful')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSignUpError(errorMessage);
            });
    }

    return (
        <div className='divider'>

            <p className='text-center text-muted mb-4'><span>Or, continue with</span></p>


            <div className='p-3 text-center'>
                <i className="bi bi-google me-4" onClick={handleGoogleSignIn}></i>
                <i className="bi bi-github" onClick={handleGithubSignIn}></i>
            </div>

            {/* showing error msg  */}
            {
                signUpError ? <p><b className="text-danger">{signUpError}</b></p> : ''
            }
        </div>
    );
};

export default AdditionalOptions;