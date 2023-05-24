import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';

const Blockedusers = () => {
  return (
    <div className='w-full bg-white shadow-lg rounded-lg py-3 px-5 mt-11 h-[347px] overflow-y-scroll'>
            <div className='relative'>
                <h3 className='font-nunito font-bold text-xl'>Blocked Users</h3>
                <HiDotsVertical className='absolute top-[6px] right-[6px] text-button' />
            </div>
            <div className='flex gap-x-5 items-center border-b border-solid border-button pb-3.5 mt-3.5'>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full' src='images/list1.png' />
                </div>
                <div>
                    <h3 className='font-nunito font-bold text-xl'>Raghav</h3>
                    <p className='font-nunito font-semibold text-sm'>Wassup!</p>
                </div>
                <div>
                    <button className='font-nunito font-bold text-xl bg-button text-white py-2.5 px-5 rounded'>Join</button>
                </div>
            </div>
            <div className='flex gap-x-5 items-center border-b border-solid border-button pb-3.5 mt-3.5'>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full' src='images/list1.png' />
                </div>
                <div>
                    <h3 className='font-nunito font-bold text-xl'>Reunion</h3>
                    <p className='font-nunito font-semibold text-sm'>Dinner?</p>
                </div>
                <div>
                    <button className='font-nunito font-bold text-xl bg-button text-white py-2.5 px-5 rounded'>Join</button>
                </div>
            </div>
            <div className='flex gap-x-5 items-center border-b border-solid border-button pb-3.5 mt-3.5'>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full' src='images/list1.png' />
                </div>
                <div>
                    <h3 className='font-nunito font-bold text-xl'>Swathi</h3>
                    <p className='font-nunito font-semibold text-sm'>Guys!</p>
                </div>
                <div>
                    <button className='font-nunito font-bold text-xl bg-button text-white py-2.5 px-5 rounded'>Join</button>
                </div>
            </div>
            <div className='flex gap-x-5 items-center border-b border-solid border-button pb-3.5 mt-3.5'>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full' src='images/list1.png' />
                </div>
                <div>
                    <h3 className='font-nunito font-bold text-xl'>Frion</h3>
                    <p className='font-nunito font-semibold text-sm'>Wassup!</p>
                </div>
                <div>
                    <button className='font-nunito font-bold text-xl bg-button text-white py-2.5 px-5 rounded'>Join</button>
                </div>
            </div>
            <div className='flex gap-x-5 items-center border-b border-solid border-button pb-3.5 mt-3.5'>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full' src='images/list1.png' />
                </div>
                <div>
                    <h3 className='font-nunito font-bold text-xl'>Fsunion</h3>
                    <p className='font-nunito font-semibold text-sm'>Dinner?</p>
                </div>
                <div>
                    <button className='font-nunito font-bold text-xl bg-button text-white py-2.5 px-5 rounded'>Join</button>
                </div>
            </div>
            <div className='flex gap-x-5 items-center pb-3.5 mt-3.5'>
                <div>
                    <img className='w-[70px] h-[70px] rounded-full' src='images/list1.png' />
                </div>
                <div>
                    <h3 className='font-nunito font-bold text-xl'>Fdsn</h3>
                    <p className='font-nunito font-semibold text-sm'>Dinner?</p>
                </div>
                <div>
                    <button className='font-nunito font-bold text-xl bg-button text-white py-2.5 px-5 rounded'>Join</button>
                </div>
            </div>
        </div>
  )
}

export default Blockedusers;