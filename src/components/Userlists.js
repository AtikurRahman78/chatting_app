import React, { useEffect, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';

const Userlists = () => {

    const db = getDatabase();

    let data = useSelector((state)=>state.userLoginInfo.userInfo)

    let [userlist, setUserLists] = useState([]);


    useEffect(() => {
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if(data.uid != item.key){
                    arr.push(item.val());
                }
            });
            setUserLists(arr);
        });
    }, []);

    return (
        <div className='w-full bg-white shadow-lg rounded-lg py-3 px-5 mt-11 h-[347px] overflow-y-scroll'>
            <div className='relative'>
                <h3 className='font-nunito font-bold text-xl'>User List</h3>
                <HiDotsVertical className='absolute top-[6px] right-[6px] text-button' />
            </div>
            {userlist.map(item => (
                <div className='flex gap-x-5 items-center border-b border-solid border-button pb-3.5 mt-3.5'>
                    <div>
                        <img className='w-[70px] h-[70px] rounded-full' src='images/list1.png' />
                    </div>
                    <div>
                        <h3 className='font-nunito font-bold text-xl'>{item.username}</h3>
                        <p className='font-nunito font-semibold text-sm'>{item.email}</p>
                    </div>
                    <div>
                        <button className='font-nunito font-bold text-xl bg-button text-white py-2.5 px-5 rounded'>+</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Userlists;