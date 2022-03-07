import './App.css';
import React, { useEffect, useState } from 'react';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import SignInForm from './Components/SignInForm/SignInForm';
import firebaseInitializer from './Firebase/firebase.initialize';

function App() {

  firebaseInitializer();

  const [signInBtn, setSignInBtn] = useState('clicked');
  const [signUpBtn, setSignUpBtn] = useState('unclicked');

  const [signInStyle, setSignInStyle] = useState({});
  const [signUpStyle, setSignUpStyle] = useState({});

  const handleSignInBtn = () => {
    setSignInBtn('clicked');
    setSignUpBtn('unclicked');
  }


  const handleSignUpBtn = () => {
    setSignUpBtn('clicked');
    setSignInBtn('unclicked');
  }

  const changeBtnStyle = () => {
    if (signInBtn === 'clicked') {
      setSignInStyle({ border: '2px solid blue' })
      setSignUpStyle({})
    }
    if (signUpBtn === 'clicked') {
      setSignUpStyle({ border: '2px solid blue' })
      setSignInStyle({})
    }

  }


  useEffect(() => {
    changeBtnStyle();
  }, [signInBtn, signUpBtn])

  return (
    <div className="parent">
      <div className='child'>

        {/* HeadLine Section */}
        <section>
          {/* title */}
          <h2 className='text-primary text-center mt-5'>{signInBtn === 'clicked' ? 'Please Login' : 'Please Register'}</h2>

          {/* toggle buttons */}
          <div className="toggle-buttons mt-4 mx-4 d-flex justify-content-evenly align-items-center">
            <h4 role="button"
              className='rounded-pill px-3 py-1'
              onClick={handleSignInBtn}
              style={signInStyle}>
              Sign In
            </h4>

            <h4 role="button"
              className='rounded-pill px-3 py-1'
              onClick={handleSignUpBtn}
              style={signUpStyle}>
              Sign Up
            </h4>
          </div>
        </section>



        {/* Form Section */}
        <section className='form'>
          {signInBtn === 'clicked' ? <SignInForm /> : <SignUpForm />}
        </section>


      </div>
    </div>
  );
}

export default App;
