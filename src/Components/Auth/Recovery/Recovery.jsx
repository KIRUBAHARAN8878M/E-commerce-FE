import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import {env} from '../../../config'

function Recovery() {
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

    //Formik Method
    let formik = useFormik({
        initialValues: {
            Email: ""
        },
        validate: (value) => {
            let errors = {}
            //Password;
            if (value.Email === "") {
                errors.Email = "border border-danger"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                let status = await axios.post(`${env.api}/Forgot`, User);
                console.log(status);
                Toast.fire({ icon: 'success', title: 'Reset Link send Your mail' })
                navigation('/')
            } catch (error) {
                Toast.fire({ icon: 'error', title: 'Sorry User not found.!' })
            }
        }
    });

    return (
        <>
            <div className="Recovery fadeInDown">
                <div id="formContent">
                    {/* <!-- Login Form --> */}
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" placeholder="Enter your Register Email" value={formik.values.Email} onChange={formik.handleChange} name="Email" required />
                        <input type="submit" className="fadeIn fourth btn" id='butt' disabled={!formik.isValid} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Recovery