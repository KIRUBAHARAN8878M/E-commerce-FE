import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useParams } from 'react-router-dom';
import {env} from '../../../config'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Activate() {

    let params = useParams()
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

    //Formik Method
    let formik = useFormik({
        initialValues: {
            isActive: "Active"
        },
        validate: () => {
            return {}
        },
        onSubmit: async (user) => {
            try {
                let status = await axios.put(`${env.api}/Activate/${params.id}`,user);
                Toast.fire({ icon: 'success', title: `${status.data.Message}` })
                navigate('/')
            } catch (error) {
                Toast.fire({ icon: 'error', title: `${error}` })
            }
        }
    });

    return (
        <>
            <div className="Activate fadeInDown">
                <div id="formContent">
                    <span className='text-center fadeIn fourth'>
                        <h3>Welcome to Activation</h3>
                        <h5>Click to Active your Account</h5>
                    </span>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="submit" className="fadeIn fourth" id='butt' value={formik.values.isActive} name="isActive" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Activate