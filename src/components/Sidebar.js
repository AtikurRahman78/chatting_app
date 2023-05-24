import React, { useState } from 'react';
import { AiOutlineHome, AiFillMessage, AiFillSetting } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginInfo } from '../slices/userSlice';
import { MdCloudUpload } from 'react-icons/md';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

const Sidebar = () => {

    const auth = getAuth();
    const storage = getStorage();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [image, setImage] = useState('');
    const [cropData, setCropData] = useState("#");
    const [cropper, setCropper] = useState('');

    let data = useSelector((state) => state.userLoginInfo.userInfo)

    let [modalShow, setModalShow] = useState(false);

    let handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(userLoginInfo(null));
            localStorage.removeItem('userInfo');
            navigate('/login');
        })
    }

    let handleUploadImage = () => {
        setModalShow(true);
    }

    let handleCancel = () => {
        setModalShow(false);
        setImage('');
        setCropData('');
        setCropper('');
    }

    const handleProfileUpload = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
            const storageRef = ref(storage, auth.currentUser.uid);
            const message4 = cropper.getCroppedCanvas().toDataURL();
            uploadString(storageRef, message4, 'data_url').then((snapshot) => {
                getDownloadURL(storageRef).then((downloadURL) => {
                    getDownloadURL(storageRef).then((downloadURL) => {
                        updateProfile(auth.currentUser, {
                            photoURL: downloadURL,
                        }).then(() => {
                            setModalShow(false);
                            setImage('');
                            setCropData('');
                            setCropper('');
                        });
                    });
                });
            });
        }
    };


    return (
        <div className='w-full bg-button h-screen rounded-3xl p-9'>
            <div className='relative w-28 h-28 rounded-full group'>
                <img className='mx-auto cursor-pointer w-full h-full rounded-full' src={data.photoURL} />
                <div onClick={handleUploadImage} className='w-full h-full rounded-full bg-[rgba(0,0,0,.4)] absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer'>
                    <MdCloudUpload className='text-white text-2xl' />
                </div>
            </div>
            <h2 className='font-nunito font-bold text-xl text-white text-center mt-2.5'>
                {data.displayName}
            </h2>
            <div className='mt-12 relative z-[1] after:z-[-1] after:bg-white after:w-[135%] after:h-[89px] after:content-[""] after:absolute after:top-[-24px] after:left-0 after:rounded-tl-lg after:rounded-bl-lg before:w-[8px] before:h-[253%] before:bg-button before:absolute before:top-[-25px] before:right-[-36px] before:content-[""] before:rounded-tl-lg before:rounded-bl-lg'>
                <AiOutlineHome className='text-4xl text-[#5F35F5] mx-auto cursor-pointer' />
            </div>
            <div className='mt-12 relative z-[1] after:z-[-1] after:bg-none after:w-[135%] after:h-[89px] after:content-[""] after:absolute after:top-[-24px] after:left-0 after:rounded-tl-lg after:rounded-bl-lg before:w-[8px] before:h-[253%] before:bg-none before:absolute before:top-[-25px] before:right-[-36px] before:content-[""] before:rounded-tl-lg before:rounded-bl-lg'>
                <AiFillMessage className='text-4xl text-[#BAD1FF] mx-auto cursor-pointer' />
            </div>
            <div className='mt-12 relative z-[1] after:z-[-1] after:bg-none after:w-[135%] after:h-[89px] after:content-[""] after:absolute after:top-[-24px] after:left-0 after:rounded-tl-lg after:rounded-bl-lg before:w-[8px] before:h-[253%] before:bg-none before:absolute before:top-[-25px] before:right-[-36px] before:content-[""] before:rounded-tl-lg before:rounded-bl-lg'>
                <IoIosNotificationsOutline className='text-4xl text-[#BAD1FF] mx-auto cursor-pointer' />
            </div>
            <div className='mt-12 relative z-[1] after:z-[-1] after:bg-none after:w-[135%] after:h-[89px] after:content-[""] after:absolute after:top-[-24px] after:left-0 after:rounded-tl-lg after:rounded-bl-lg before:w-[8px] before:h-[253%] before:bg-none before:absolute before:top-[-25px] before:right-[-36px] before:content-[""] before:rounded-tl-lg before:rounded-bl-lg'>
                <AiFillSetting className='text-4xl text-[#BAD1FF] mx-auto cursor-pointer' />
            </div>
            <div className='mt-12 relative z-[1] after:z-[-1] after:bg-none after:w-[135%] after:h-[89px] after:content-[""] after:absolute after:top-[-24px] after:left-0 after:rounded-tl-lg after:rounded-bl-lg before:w-[8px] before:h-[253%] before:bg-none before:absolute before:top-[-25px] before:right-[-36px] before:content-[""] before:rounded-tl-lg before:rounded-bl-lg'>
                <FiLogOut onClick={handleSignOut} className='text-4xl text-[#BAD1FF] mx-auto cursor-pointer' />
            </div>
            {modalShow && (
                <div className='w-full h-screen bg-button absolute top-0 left-0 z-50 flex justify-center items-center'>
                    <div className='w-2/4 bg-white rounded-lg p-5'>
                        <h2 className='font-nunito font-bold text-3xl text-header-res'>Upload Your Profile Picture.</h2>
                        <div className='relative w-28 h-28 rounded-full group overflow-hidden mx-auto'>
                            {image ? (
                                <div className="img-preview w-full h-full rounded-full" />
                            ) : (
                                <img className='w-full h-full rounded-full' src={auth.currentUser.photoURL} />
                            )}
                        </div>
                        <input onChange={handleProfileUpload} className='mt-8' type='file' />
                        <br />
                        {image && (
                            <Cropper
                                style={{ height: 300, width: "100%" }}
                                zoomTo={0.5}
                                initialAspectRatio={1}
                                preview=".img-preview"
                                src={image}
                                viewMode={1}
                                minCropBoxHeight={10}
                                minCropBoxWidth={10}
                                background={false}
                                responsive={true}
                                autoCropArea={1}
                                checkOrientation={false}
                                onInitialized={(instance) => {
                                    setCropper(instance);
                                }}
                                guides={true}
                            />
                        )}
                        <button onClick={getCropData} className='w-1/4 bg-button rounded-lg font-nunito font-semibold text-xl text-white py-5 mt-8'>Upload</button>
                        <button onClick={handleCancel} className='w-1/4 bg-red-500 rounded-lg font-nunito font-semibold text-xl text-white py-5 mt-8 ml-8'>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar;