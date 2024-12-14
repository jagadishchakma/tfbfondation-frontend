import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignUp from './SignUp';
import Login from './Login';
import Verification from './Verification';
import { GlobalContext } from '../../contexts/GlobalContext';


const SignUpLogin = () => {
    const [userCredential, setUserCredential] = useState({});
    const {state} = useContext(GlobalContext)
   

    const modalBody = () => {
        if (state.signUpLogin === 'login') {
            return <Login/>
        }
        if (state.signUpLogin === 'signup'){
            return <SignUp setUserCredential={setUserCredential}/>
        }
        if (state.signUpLogin === 'verification'){
            return <Verification userCredential={userCredential} />
        }
    }


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