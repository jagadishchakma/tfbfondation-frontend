import { AccountCircle, AssignmentInd, Business, Email, Home, LocationCity, Lock, Person, Phone, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, CircularProgress, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/account/signup.css';
import { rangamatiSubDistricts, bandarbanSubDistricts, khagrachariSubDistricts } from '../../utilities/address';
import { api } from '../../utilities/api';


function SignUp({ setSignUpLogin,close,setUserCredential }) {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [state, setState] = useState({
        loading: false,
        error: false,
        success: false,
    });


    /*----------- HNADLE FROM DATA CATCHING START ------------*/
    const handleFormData = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser((prevState) => {
            return { ...prevState, [name]: value }
        })

        //username
        if (name === 'username') {
            if (value.length > 3) {
                setError((prevState) => {
                    return { ...prevState, username: '' }
                })
            }
        }

        //first name
        if (name === 'first_name') {
            if (value.length > 3) {
                setError((prevState) => {
                    return { ...prevState, first_name: '' }
                })
            }
        }

        //last name
        if (name === 'last_name') {
            if (value.length > 3) {
                setError((prevState) => {
                    return { ...prevState, last_name: '' }
                })
            }
        }

        //profession 
        if (name === 'profession') {
            if (value.length > 2) {
                setError((prevState) => {
                    return { ...prevState, profession: '' }
                })
            }
        }
        //address 
        if (name === 'address') {
            if (value.length > 4) {
                setError((prevState) => {
                    return { ...prevState, address: '' }
                })
            }
        }
        //current address 
        if (name === 'current_address') {
            if (value.length > 4) {
                setError((prevState) => {
                    return { ...prevState, current_address: '' }
                })
            }
        }
        //email
        if (name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailRegex.test(value)) {
                setError((prevState) => {
                    return { ...prevState, email: '' }
                })
            }
        }
        //phone
        if (name === 'phone_no') {
            if (value.length === 11) {
                setError((prevState) => {
                    return { ...prevState, phone_no: '' }
                })
            }
        }
        //district
        if (name == 'district') {
            setError((prevState) => {
                return { ...prevState, district: '' }
            })
        }
        //sub district
        if (name == 'sub_district') {
            setError((prevState) => {
                return { ...prevState, sub_district: '' }
            })
        }
        //account type
        if (name == 'account_type') {
            setError((prevState) => {
                return { ...prevState, account_type: '' }
            })
        }
        //password
        if (name == 'password') {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/~`-]{6,}$/;
            if (passwordRegex.test(value)) {
                setError((prevState) => {
                    return { ...prevState, password: '' }
                })
            }
        }
        //confirm_password
        if (name == 'confirm_password') {
            if (value === user.password) {
                setError((prevState) => {
                    return { ...prevState, confirm_password: '' }
                })
            }
        }
    }

    // sub districts automaticaly selected
    const subDistrictsSelectAuto = () => {
        if (user.district == 'rangamati') {
            return rangamatiSubDistricts.map((subDistrict, index) => <MenuItem value={subDistrict.toLocaleLowerCase()} key={index}>{subDistrict}</MenuItem>)
        }
        if (user.district == 'khagrachari') {
            return khagrachariSubDistricts.map((subDistrict, index) => <MenuItem value={subDistrict.toLocaleLowerCase()} key={index}>{subDistrict}</MenuItem>)
        }
        if (user.district == 'bandarban') {
            return bandarbanSubDistricts.map((subDistrict, index) => <MenuItem value={subDistrict.toLocaleLowerCase()} key={index}>{subDistrict}</MenuItem>)
        }
    }
    /*---------- HANDLE FORM DATA CATCHING END ---------*/


    /*----------- HANDLE FORM VALIDATION START ----------*/
    const handleFormValidation = () => {
        //username
        if (!user.username) {
            setError((prevState) => {
                return { ...prevState, username: 'Please enter your user name.' }
            })
            return false
        } else if (user.username.length < 4) {
            setError((prevState) => {
                return { ...prevState, username: 'Your username is very short' }
            })
            return false
        }
        //first name
        if (!user.first_name) {
            setError((prevState) => {
                return { ...prevState, first_name: 'Please enter your first name.' }
            })
            return false
        } else if (user.first_name.length < 4) {
            setError((prevState) => {
                return { ...prevState, first_name: 'Your first name is very short.' }
            })
            return false
        }
        //last name
        if (!user.last_name) {
            setError((prevState) => {
                return { ...prevState, last_name: 'Please enter your last name.' }
            })
            return false
        } else if (user.last_name.length < 4) {
            setError((prevState) => {
                return { ...prevState, last_name: 'Your last name is very short.' }
            })
            return false
        }
        //profession
        if (!user.profession) {
            setError((prevState) => {
                return { ...prevState, profession: 'Please enter your profession.' }
            })
            return false
        } else if (user.profession < 3) {
            setError((prevState) => {
                return { ...prevState, profession: 'Your profession name is very short.' }
            })
            return false
        }
        //address
        if (!user.address) {
            setError((prevState) => {
                return { ...prevState, address: 'Please enter your address.' }
            })
            return false
        } else if (user.address.legnth < 4) {
            setError((prevState) => {
                return { ...prevState, address: 'Your address is very short.' }
            })
            return false
        }
        //current address
        if (!user.current_address) {
            setError((prevState) => {
                return { ...prevState, current_address: 'Please enter  current address.' }
            })
            return false
        } else if (user.current_address < 4) {
            setError((prevState) => {
                return { ...prevState, current_address: 'Your current address is very short.' }
            })
            return false
        }

        if (!user.email) {
            setError((prevState) => {
                return { ...prevState, email: 'Please enter your email.' }
            })
            return false
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(user.email)) {
                setError((prevState) => {
                    return { ...prevState, email: 'Please enter a valid email address.' }
                })
                return false
            }
        }

        //phone
        if (!user.phone_no) {
            setError((prevState) => {
                return { ...prevState, phone_no: 'Please enter your phone number.' }
            })
            return false
        } else if (user.phone_no.length !== 11) {
            setError((prevState) => {
                return { ...prevState, phone_no: 'Please enter your a valid phone number.' }
            })
            return false
        }

        //district
        if (!user.district) {
            setError((prevState) => {
                return { ...prevState, district: 'Please enter your district.' }
            })
            return false
        }

        //sub district
        if (!user.sub_district) {
            setError((prevState) => {
                return { ...prevState, sub_district: 'Please enter your sub district.' }
            })
            return false
        }

        //account type
        if (!user.account_type) {
            setError((prevState) => {
                return { ...prevState, account_type: 'Please enter your account type.' }
            })
            return false
        }

        //password
        if (!password) {
            setError((prevState) => {
                return { ...prevState, password: 'Please enter your password.' }
            })
            return false
        } else {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/~`-]{6,}$/;
            if (!passwordRegex.test(user.password)) {
                setError((prevState) => {
                    return { ...prevState, password: 'Password must be at least 6 characters with lower,Upper,number mixed.' }
                })
                return false
            }
        }

        //confirm_password
        if (!confirm_password) {
            setError((prevState) => {
                return { ...prevState, confirm_password: 'Please enter your confirm password.' }
            })
        } else if (user.password !== user.confirm_password) {
            setError((prevState) => {
                return { ...prevState, confirm_password: 'Confirm passwrod not matched.' }
            })
        }

        return true;
    }
    /*----------- HANDLE FORM VALIDATION END -----------*/


    /*----------- HANDLE FORM SUBMISSION START -----------*/
    const handlFormSubmission = async () => {
        if (handleFormValidation()) {
            //loading state change true
            setState((prevState) => ({ ...prevState, loading: true }));
            try {
                const response = await api.post('/account/create/', user)
                console.log(response.data)
                //state change after success submision
                setState((prevState) => ({ ...prevState, success: true, loading: false, error: false }));
                //redirect to verification_code check after successfull
                setUserCredential(user)
                setSignUpLogin("verification")
            } catch (error) {
                
                let errorObj = error.response.data
                let key = Object.keys(errorObj)
                let value = errorObj[key][0]
                setError((prevState) => {
                    return { ...prevState, [key]: value }
                })
                //error state change
                setState((prevState) => ({ ...prevState, error: true }))
                //error check
                console.log("error: ", error.response.data[key][0]);
                console.log(error.response.data);

                //loading state change false
                setState((prevState) => ({ ...prevState, loading: false }));
            }

        }
    }
    /*----------- HANDLE FORM SUBMISSION END -----------*/


    return (
        <>
            <Modal.Header closeButton onClick={()=>close(false)}>
                <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.username ? true : false}
                        id={error.username ? "user-name-error" : "user-name"}
                        label={error.username ? "Error" : "User Name"}
                        helperText={error.username ? error.username : ''}
                        variant="standard"
                        type='text'
                        onChange={handleFormData}
                        name='username'
                        fullWidth
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.first_name ? true : false}
                        id={error.first_name ? "first-name-error" : "first-name"}
                        label={error.first_name ? "Error" : "First Name"}
                        helperText={error.first_name ? error.first_name : ''}
                        variant="standard"
                        type='text'
                        name='first_name'
                        onChange={handleFormData}
                        fullWidth
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.last_name ? true : false}
                        id={error.last_name ? "last-name-error" : "last-name"}
                        label={error.last_name ? "Error" : "Last Name"}
                        helperText={error.last_name ? error.last_name : ''}
                        variant="standard"
                        type='text'
                        name='last_name'
                        onChange={handleFormData}
                        fullWidth
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Business sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.profession ? true : false}
                        id={error.profession ? "profession-error" : "profession"}
                        label={error.profession ? "Error" : "Profession"}
                        helperText={error.profession ? error.profession : ''}
                        variant="standard"
                        type='text'
                        name='profession'
                        onChange={handleFormData}
                        fullWidth
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Home sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.address ? true : false}
                        id={error.address ? "address-error" : "address"}
                        label={error.address ? "Error" : "Address"}
                        helperText={error.address ? error.address : ''}
                        variant="standard"
                        type='text'
                        name='address'
                        onChange={handleFormData}
                        fullWidth
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Home sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.current_address ? true : false}
                        id={error.current_address ? "current_address-error" : "current_address"}
                        label={error.current_address ? "Error" : "Current Address"}
                        helperText={error.current_address ? error.current_address : ''}
                        variant="standard"
                        type='text'
                        name='current_address'
                        onChange={handleFormData}
                        fullWidth
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.email ? true : false}
                        id={error.email ? "email-error" : "email"}
                        label={error.email ? "Error" : "Email"}
                        helperText={error.email ? error.email : ''}
                        variant="standard"
                        type='email'
                        name='email'
                        onChange={handleFormData}
                        fullWidth
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Phone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.phone_no ? true : false}
                        id={error.phone_no ? "phone_no-error" : "phone_no"}
                        label={error.phone_no ? "Error" : "Phone No"}
                        helperText={error.phone_no ? error.phone_no : ''}
                        variant="standard"
                        type='number'
                        name='phone_no'
                        onChange={handleFormData}
                        fullWidth
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <LocationCity sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <FormControl variant="standard" fullWidth error={error.district ? true : false}>
                        <InputLabel id="district">District</InputLabel>
                        <Select
                            labelId="district"
                            id="district"
                            name='district'
                            value={user.district || ''}
                            onChange={handleFormData}
                            label="District"
                        >
                            <MenuItem value="">
                                <em>District</em>
                            </MenuItem>
                            <MenuItem value='rangamati'>Rangamati</MenuItem>
                            <MenuItem value='khagrachari'>Khagrachari</MenuItem>
                            <MenuItem value='bandarban'>Bandarban</MenuItem>
                        </Select>
                        {error.district && <FormHelperText>{error.district}</FormHelperText>}
                    </FormControl>
                </Box>



                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <LocationCity sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <FormControl variant="standard" fullWidth error={error.sub_district ? true : false}>
                        <InputLabel id="sub-district">Sub-District</InputLabel>
                        <Select
                            labelId="sub-district"
                            id="sub-district"
                            name='sub_district'
                            value={user.sub_district || ''}
                            onChange={handleFormData}
                            label="Sub District"
                        >
                            <MenuItem value="">
                                <em>Sub-District</em>
                            </MenuItem>
                            {
                                subDistrictsSelectAuto()
                            }
                        </Select>
                        {error.sub_district && <FormHelperText>{error.sub_district}</FormHelperText>}
                    </FormControl>
                </Box>

                <span className='select-note'><i className="fa-solid fa-triangle-exclamation"></i> Before selecting account type please carefully read terms and conditions</span>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AssignmentInd sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <FormControl variant="standard" fullWidth error={error.account_type ? true : false}>
                        <InputLabel id="account-type">Account Type</InputLabel>
                        <Select
                            labelId="account-type"
                            id="account-type"
                            name='account_type'
                            value={user.account_type || ''}
                            onChange={handleFormData}
                            label="Account Type"
                        >
                            <MenuItem value="">
                                <em>Account Type</em>
                            </MenuItem>
                            <MenuItem value='tfb-member'>TFB Member</MenuItem>
                            <MenuItem value='normal-user'>Normal User</MenuItem>
                        </Select>
                        {error.account_type && <FormHelperText>{error.account_type}</FormHelperText>}
                    </FormControl>
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
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="signup-form-box">
                    <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        error={error.confirm_password ? true : false}
                        id={error.confirm_password ? "confirm_password-error" : "confirm_password"}
                        label={error.confirm_password ? "Error" : "Confirm Password"}
                        helperText={error.confirm_password ? error.confirm_password : ''}
                        type={showPassword ? 'text' : 'password'}
                        name='confirm_password'
                        onChange={handleFormData}
                        variant="standard"
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
                <Button style={state.error?{border:'1px solid red'}:{border:'none'}} variant="contained" color="success" onClick={handlFormSubmission} disabled={state.loading ? true : false} fullWidth>
                    {state.loading ? <CircularProgress color="secondary" size={25} /> : "Submit"}
                </Button>
                <span className='d-block w-100 text-center'> Already  have an account? <span className='signup-login' onClick={() => setSignUpLogin('login')}>Login</span></span>

            </Modal.Footer>
        </>
    );
}

export default SignUp;