import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { GlobalContext, GlobalContextProvider } from '../../contexts/GlobalContext';

const Login = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const {setState, login} = useContext(GlobalContext);

    //form data catch
    const handleFormData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));

        if (name == 'username') {
            if (value.length > 0) {
                setError((prevError) => ({ ...prevError, username: '' }));
            }
        }
        if (name == 'password') {
            if (value.length > 0) {
                setError((prevError) => ({ ...prevError, password: '' }));
            }
        }
    }
    
    //form data validation
    const handleFormValidation = () => {
        if (!user.username) {
            setError((prevError) => {
                return { ...prevError, username: 'Please enter your username.' }
            })
            return
        }
        if (!user.password) {
            setError((prevError) => {
                return { ...prevError, password: 'Please enter your password.' }
            })
            return
        }
    }

    //form data submision
    const handleLogin = () => {
        handleFormValidation();
        login(user);
    }

    
    return (
        <>
            <Modal.Header className='d-flex justify-content-between align-items-start'>
                <Modal.Title>Login</Modal.Title>
                <div className="verification-close-btn">
                    <i className="fas fa-times" onClick={() => setState((prevState)=>({...prevState, signupModal:false}))}></i>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.username ? true : false}
                        id={error.username ? "user-name-error" : "user-name"}
                        label={error.username ? "Error" : "User Name or Email"}
                        helperText={error.username ? error.username : ''}
                        variant="standard"
                        type='text'
                        onChange={handleFormData}
                        name='username'
                        fullWidth
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.password ? true : false}
                        id={error.password ? "password-error" : "password"}
                        label={error.password ? "Error" : "Password"}
                        helperText={error.password ? error.password : ''}
                        type={showPassword ? 'text' : 'password'}
                        variant="standard"
                        name='password'
                        onChange={handleFormData}
                        fullWidth
                    />
                    {showPassword ? (
                        <Visibility sx={{ ml: 1, cursor: 'pointer', my: 0.5 }} onClick={() => setShowPassword(false)} />
                    ) : (
                        <VisibilityOff sx={{ ml: 1, cursor: 'pointer', my: 0.5 }} onClick={() => setShowPassword(true)} />
                    )}
                </Box>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" color="success" onClick={handleLogin} fullWidth>
                    Submit
                </Button>
                <span className='d-block w-100 text-center'>Not  have an account? <span className="signup-login" onClick={() => setState((prevState)=>({...prevState, signUpLogin:'signup'}))}>Sign Up</span></span>
            </Modal.Footer>
        </>
    );
};

export default Login;