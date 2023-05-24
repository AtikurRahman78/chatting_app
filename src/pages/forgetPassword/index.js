import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    let [email, setEmail] = useState('');

    let handleForgotPassword = () => {
        sendPasswordResetEmail(auth, email).then(() => {
            toast.success('Please Check Your Email!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }).catch((error) => {
            const errorCode = error.code;
            toast.success(errorCode);
        });
    }

    return (
        <div className='bg-button w-full h-screen flex justify-center items-center'>
            <ToastContainer position="bottom-center" theme="dark" />
            <div className='bg-white rounded p-5 w-96'>
                <h3 className='font-nunito font-normal text-3xl text-header2-res'>Forget Password?</h3>
                <div className='relative mt-9'>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className='border border-solid rounded-lg border-border-color-res py-5 w-full px-14' />
                    <p className='font-nunito font-semibold text-sm text-header-res absolute top-[-10px] left-10 bg-white px-[18px]'>Email Address
                    </p>
                    <button onClick={handleForgotPassword} className='bg-button rounded-lg font-nunito font-semibold text-sm text-white p-5 mt-7'>Update</button>
                    <button className='bg-button rounded-lg font-nunito font-semibold text-sm text-white p-5 mt-7 ml-2.5'><Link to='/login'>Back to Home</Link></button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;