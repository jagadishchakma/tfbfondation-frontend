import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignUp from './SignUp';
import Login from './Login';
import Verification from './Verification';

const SignUpLogin = ({ open, close }) => {
    const [signUpLogin, setSignUpLogin] = useState('verification');
    const [userCredential, setUserCredential] = useState({});

    const modalBody = () => {
        if (signUpLogin === 'login') {
            return <Login setSignUpLogin={setSignUpLogin} close={close}/>
        }
        if (signUpLogin === 'signup'){
            return <SignUp setSignUpLogin={setSignUpLogin} close={close} setUserCredential={setUserCredential}/>
        }
        if (signUpLogin === 'verification'){
            return <Verification userCredential={userCredential} close={close}/>
        }
    }
    return (
        <Modal
            show={open}
            onHide={() => {}}
            animation={false}
            size="md"
            centered
            scrollable
        >
            {modalBody()}
        </Modal>
    );
};

export default SignUpLogin;