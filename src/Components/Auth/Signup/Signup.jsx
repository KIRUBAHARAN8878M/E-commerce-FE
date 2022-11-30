import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import {env} from '../../../config'

function Sigin() {
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

    //Registration method;
    let formik = useFormik({
        initialValues: {
            Username: "",
            Email: "",
            Password: ""
        },
        validate: (value) => {
            let errors = {}
            //Name; 
            if (value.Username === "") {
                errors.Username = "border border-danger"
            }
            //Password;
            if (value.Password.length <= 6) {
                errors.Password = "Password must be 8 Digit"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                let test = await axios.post(`${env.api}/Register`, User);
                Toast.fire({ icon: 'success', title: `${test.data.Message}` })
                navigation('/')
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.Message}` })
            }
        }
    });
    return (
        <>
            <div className="sign fadeInDown">
                <div id="formContent">
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="Username" className="fadeIn second mt-5 " placeholder="UserName" value={formik.values.Username} onChange={formik.handleChange} name="Username" />
                        <input type="text" id="Email" className="fadeIn second" placeholder="Email" value={formik.values.Email} onChange={formik.handleChange} name='Email' required />
                        <input type="password" id="password" className="fadeIn third" placeholder="password" value={formik.values.Password} onChange={formik.handleChange} name='Password' required />
                        <span className="text-warning">{formik.errors.Password}</span>
                        <input type="password" id="confopassword" className="fadeIn third" name="login" placeholder="Conform Password" required />
                        <input type="submit" disabled={!formik.isValid} className="fadeIn fourth btn" id='butt' />
                    </form>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <a className="underlineHover" id='click' href="/">Already have Account</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sigin