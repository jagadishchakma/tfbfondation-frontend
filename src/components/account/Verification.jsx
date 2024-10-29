import { Alert, Box, CircularProgress, TextField } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import '../../assets/css/account/verification.css';
import {api} from '../../utilities/api';
import {backend_link} from '../../utilities/link';
import { GlobalContext } from '../../contexts/GlobalContext';

const Verification = ({ userCredential, close }) => {
    const [timeLeft, setTimeLeft] = useState(5);
    const [isResendAllowed, setIsResendAllowed] = useState(false);
    const [verificationCode, setVerificationCode] = useState([]);
    const [state, setState] = useState({
        loading: false,
        error: '',
        success: '',
    })
    const {login} = useContext(GlobalContext)

    /* ---------- Resend code timeing  start -----------*/
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setIsResendAllowed(true);
        }
    }, [timeLeft]);
    /* ---------- Resend code timeing  End -----------*/




    /* ---------- Verification Code Submission Start ---------- */
    useEffect(() => {
        if (verificationCode.length == 5) {
            setState({ ...state, loading: true })
            let five_verify_code = verificationCode.join('')
            codeValidationCheck(five_verify_code)
        }
    }, [verificationCode])
    /* ---------- Verification Code Submission End ---------- */


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleResend = async () => {
        let verifyData = {email: 'jagadishchakma401@gmail.com'}
        setState((prevState)=>{
            let newState = {...prevState}
            newState['error'] = ''
            newState['success'] = ''
            return newState
        })
        try {
            let response = await api.put(backend_link+'/account/resend/', verifyData)
            setState((prevState)=>{
                let newState = {...prevState}
                newState.error = ''
                newState.success = response.data.success
                return newState
            })
            setTimeLeft(5); // Reset timer to 10 minutes
            setIsResendAllowed(false);
        } catch (error) {
            setState((prevState)=>{
                let newState = {...prevState}
                newState.error = error.response.data.error
                newState.success = ''
                return newState;
            })
        }
    };




    /*------------ HANDLE VERIFICATION CODE START ------------ */
    const handleVerificationCode = (e) => {
        let name = e.target.name
        let value = e.target.value.toString()
        let index

        //at a time all 5 code paste into first input handle
        if (value.length == 5 && name == 'code1') {
            setVerificationCode((prevState) => {
                let newState = [...prevState]
                newState[0] = value[0]
                newState[1] = value[1]
                newState[2] = value[2]
                newState[3] = value[3]
                newState[4] = value[4]
                return newState
            })
            return
        }

        //every input code validation
        if (name === 'code1') {
            index = 0
            checkingCode(value, index)
        } else if (name === 'code2') {
            index = 1
            checkingCode(value, index)
        } else if (name === 'code3') {
            index = 2
            checkingCode(value, index)
        } else if (name === 'code4') {
            index = 3
            checkingCode(value, index)
        } else if (name === 'code5') {
            index = 4
            checkingCode(value, index)
        }
        //checking code
        function checkingCode(value, index) {
            if (!value) {
                removeCode(index)
            } else if (value.length == 1 && !verificationCode[index]) {
                console.log("Hello1")
                setCode(index)
            } else if (value.length > 1 && verificationCode[index]) {
                console.log("Hello2")
                stayCode(index)
            } else if (value.length > 1 && !verificationCode[index]) {
                console.log("Hello3")
                pasteMultipleCodeRemove(index)
            }
        }
        //set code
        function setCode(index) {
            setVerificationCode((prevState) => {
                let newState = [...prevState]
                newState[index] = value
                return newState
            })
        }
        //remove code
        function removeCode(index) {
            setVerificationCode((prevState) => {
                let newState = [...prevState]
                newState[index] = ''
                return newState
            })
        }
        //stay code
        function stayCode(index) {
            setVerificationCode((prevState) => {
                let newState = [...prevState]
                newState[index] = newState[index]
                return newState
            })
        }
        //pase multiple code remove
        function pasteMultipleCodeRemove(index) {
            setVerificationCode((prevState) => {
                let newState = [...prevState]
                newState[index] = ''
                return newState
            })
        }
    }
    /*------------ HANDLE VERIFICATION CODE END ------------ */

    /*---------- VERIFICATION CODE VALIDATION CHECK START ------------- */
    const codeValidationCheck = async (five_verify_code) => {
        let verifyData = {verification_code:five_verify_code, email: 'jagadishchakma401@gmail.com'}
        setState((prevState)=>{
            let newState = {...prevState}
            newState['error'] = ''
            newState['success'] = ''
            return newState
        })

        try {
            let response = await api.put(backend_link+"/account/verify/", verifyData)
            if(response.status === 201){
                setState((prevState)=>{
                    let newState = {...prevState}
                    newState['loading'] = false
                    newState['error'] = ''
                    newState['success'] = response.data.success
                    return newState
                })
                //login
                login(userCredential)
            }
            console.log(response)
        } catch (error) {
            console.log(error)
            setState((prevState)=>{
                let newState = {...prevState}
                newState['loading'] = false
                newState['error'] = error.response.data.error
                return newState
            })
            
        }
    }
    /*---------- VERIFICATION CODE VALIDATION CHECK END ------------- */
    return (
        <>
            <Modal.Header className='d-flex justify-content-between align-items-start'>
                <Modal.Title >
                    Verification Code <br />
                    <span style={{ fontSize: '12px', color: 'gray', top: '-15px', position: 'relative' }}>Please check your email for verification code!</span>
                    <div>
                        <h3>{formatTime(timeLeft)} {isResendAllowed && (<span className="resend-code" onClick={handleResend}><i className="fas fa-redo" ></i> Resend Code</span>)}</h3>
                    </div>
                    <div>
                        {state.success && <Alert severity="success">{state.success}</Alert>}
                        {state.error &&  <Alert severity="error">{state.error}</Alert>}
                    </div>
                </Modal.Title>
                <div className="verification-close-btn">
                    <i className="fas fa-times" onClick={() => close(false)}></i>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="verification-code-form">
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            '& > :not(style)': { m: 1, width: '25ch' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="code1"
                            name="code1"
                            variant="outlined"
                            className="verification-code"
                            onChange={handleVerificationCode}
                            value={verificationCode[0]}
                            type='number'
                            style={{ appearance: 'textfield' }}
                            disabled={state.loading ? true : false}
                        />
                        <TextField
                            id="code2"
                            name="code2"
                            variant="outlined"
                            className="verification-code"
                            onChange={handleVerificationCode}
                            value={verificationCode[1]}
                            type='number'
                            style={{ appearance: 'textfield' }}
                            disabled={state.loading ? true : false}
                        />
                        <TextField
                            id="code3"
                            name="code3"
                            variant="outlined"
                            className="verification-code"
                            onChange={handleVerificationCode}
                            value={verificationCode[2]}
                            type='number'
                            style={{ appearance: 'textfield' }}
                            disabled={state.loading ? true : false}
                        />
                        <TextField
                            id="code4"
                            name="code4"
                            variant="outlined"
                            className="verification-code"
                            onChange={handleVerificationCode}
                            value={verificationCode[3]}
                            type='number'
                            style={{ appearance: 'textfield' }}
                            disabled={state.loading ? true : false}
                        />
                        <TextField
                            id="code5"
                            name="code5"
                            variant="outlined"
                            className="verification-code"
                            onChange={handleVerificationCode}
                            value={verificationCode[4]}
                            type='number'
                            style={{ appearance: 'textfield' }}
                            disabled={state.loading ? true : false}
                        />
                    </Box>
                    {state.loading && (<div className='verification-code-form-submit'><CircularProgress size={20} /></div>)}
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </>
    );
};

export default Verification;