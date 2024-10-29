import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Login = ({ setSignUpLogin,close }) => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    //form data catch
    const handleFormData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));

        if (name == 'user_name') {
            if (value.length > 0) {
                setError((prevError) => ({ ...prevError, user_name: '' }));
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
        if (!user.user_name) {
            setError((prevError) => {
                return { ...prevError, user_name: 'Please enter your username.' }
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
    }
    return (
        <>
            <Modal.Header closeButton onClick={()=>close(false)}>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.user_name ? true : false}
                        id={error.user_name ? "user-name-error" : "user-name"}
                        label={error.user_name ? "Error" : "User Name or Email"}
                        helperText={error.user_name ? error.user_name : ''}
                        variant="standard"
                        type='text'
                        onChange={handleFormData}
                        name='user_name'
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
                <span className='d-block w-100 text-center'>Not  have an account? <span className="signup-login" onClick={() => setSignUpLogin('signup')}>Sign Up</span></span>
            </Modal.Footer>
        </>
    );
};

export default Login;