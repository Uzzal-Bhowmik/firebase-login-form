import React, { useState } from 'react';
import AdditionalOptions from '../AdditionalOptions/AdditionalOptions';
import './SignInForm.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [signUpError, setSignUpError] = useState('');

    const setUserEmail = e => {
        setEmail(e.target.value)
    }
    const setUserPass = e => {
        setPass(e.target.value)
    }
    const auth = getAuth();


    const handleSignInSubmitBtn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                setSignUpError('');
                window.alert('Sign In Was Successful');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSignUpError(errorMessage)
            });
    }

    return (
        <div>
            <form className='mt-4 p-4'>
                <div className="row mb-4">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" onBlur={setUserEmail} />
                    </div>
                </div>
                <div className="row mb-4">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" onBlur={setUserPass} />
                    </div>
                </div>

                {/* showing error msg  */}
                {
                    signUpError ? <p><b className="text-danger">{signUpError}</b></p> : ''
                }

                <button type="submit" className="btn btn-primary px-4 fw-bold" onClick={handleSignInSubmitBtn}>Sign in</button>
            </form>



            {/* Third Party Sign In Options */}
            <section>
                <AdditionalOptions />
            </section>
        </div>
    );
};

export default SignInForm;