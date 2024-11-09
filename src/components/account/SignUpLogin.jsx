import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignUp from './SignUp';
import Login from './Login';
import Verification from './Verification';
import { GlobalContext } from '../../contexts/GlobalContext';

const SignUpLogin = () => {
    const [signUpLogin, setSignUpLogin] = useState('login');
    const [userCredential, setUserCredential] = useState({});

    const modalBody = () => {
        if (signUpLogin === 'login') {
            return <Login setSignUpLogin={setSignUpLogin} />
        }
        if (signUpLogin === 'signup'){
            return <SignUp setSignUpLogin={setSignUpLogin}  setUserCredential={setUserCredential}/>
        }
        if (signUpLogin === 'verification'){
            return <Verification userCredential={userCredential} />
        }
    }
    //context data
    const {state} = useContext(GlobalContext)
    return (
        <Modal
            show={state.signupModal}
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