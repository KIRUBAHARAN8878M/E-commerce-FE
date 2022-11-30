import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {env} from '../../../config'

function Update() {
     //Get user Detail via link 
     const test = useParams()
     let navigate = useNavigate()

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

     //Formik method;
     let formik = useFormik({
        initialValues: {
            Password: ""
        },
        validate: (value) => {
            let errors = {}
            //Password;
            if (value.Password.length <= 8) {
                errors.Password = "border border-info"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                await axios.put(`${env.api}/Reset-Password/${test.id}/${test.token}`, User);
                Toast.fire({ icon: 'success', title: 'Password update done' })
                navigate('/')
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error.response.data.Message}` })
            }
        }
    });
    return (
        <>
            <div className="Update fadeInDown">
                <div id="formContent">
                    {/* <!-- Login Form --> */}
                    <form onSubmit={formik.handleSubmit}>
                        <input type="Password" id="login" className="fadeIn second mt-2" placeholder="Enter New Password" value={formik.values.Password} onChange={formik.handleChange} name="Password" required />
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="Conform New Password" required />
                        <input type="submit" className="fadeIn fourth btn" id='butt' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update