import React, { useState } from 'react';
import './SignUpForm.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {
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
    const setUserName = e => {
        setName(e.target.value)
    }


    const auth = getAuth();

    const handleSignUpBtn = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                setSignUpError('')
                window.alert('Sign In Successful');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSignUpError(errorMessage);
            });
    }

    return (
        <div>
            <form className="row g-4 p-4">
                <div className="col-12">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Example: Uzzal Bhowmik" onBlur={setUserName} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" onBlur={setUserEmail} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" onBlur={setUserPass} />
                </div>

                {/* showing error msg  */}
                {
                    signUpError ? <p><b className="text-danger">{signUpError}</b></p> : ''
                }
                <div className="col-12">
                    <button type="submit" className="btn btn-primary fw-bold px-4" onClick={handleSignUpBtn}>Submit</button>
                </div>
            </form >
        </div >
    );
};

export default SignUpForm;