import axios from 'axios';
import { useFormik } from 'formik';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {env} from '../../../config'


function Login() {
    let navigation = useNavigate()

    //Alert function;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    //Login Method;
    let login = useFormik({
        initialValues: {
            Email: "",
            Password: ""
        },
        validate: (value) => {
            let errors = {};
            //Password;
            if (value.Password.length <= 8) {
                errors.Password = "Password Must be Eight Degit"
            }
            return errors
        },
        onSubmit: async (Login) => {
            try {
                let login = await axios.post(`${env.api}/Login`, Login);
                let watchman = login.data;
                let Name = watchman.Username
                if (watchman.token) {
                    Toast.fire({ icon: 'success', title: 'Signed in successfully' })
                    navigation('/Home',Name);
                } else {
                    Toast.fire({ icon: 'warning', title: `${watchman.Message}` })
                }
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.Message}` })
            }
        }
    })

    return (
        <>
            <div className="content fadeInDown">
                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}
                    <h2 className='text-black'>Welcome</h2>

                    {/* <!-- Login Form --> */}
                    <form onSubmit={login.handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" placeholder="Email" value={login.values.Email} onChange={login.handleChange} name="Email" required />
                        <input type="password" id="password" className="fadeIn third" placeholder="password" value={login.values.Password} onChange={login.handleChange} name="Password" required />
                        <span className="text-warning">{login.errors.Password}</span>
                        <input type="submit" className="fadeIn fourth btn" id='butt' />
                    </form>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <a className="underlineHover" id='link' href="Recovery">Forgot Password?<Fragment>&nbsp;</Fragment><Fragment>&nbsp;</Fragment><Fragment>&nbsp;</Fragment><span className="text-black">or</span>
                            <Fragment>&nbsp;</Fragment><Fragment>&nbsp;</Fragment><Fragment>&nbsp;</Fragment></a>
                        <a className="underlineHover" id='click' href="Register">Create new Account</a>
                    </div>
                    <div className="text-center">
                        <strong>For Testing</strong>
                        <br />
                        <h6>Email: kirubaharan8878m@gmail.com</h6>
                        <h6>Pass: User@1234</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login