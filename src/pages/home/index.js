import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Search from '../../components/Search';
import GroupList from '../../components/GroupList';
import FriendRequest from '../../components/FriendRequest';
import Friends from '../../components/Friends';
import Mygroups from '../../components/Mygroups';
import Userlists from '../../components/Userlists';
import Blockedusers from '../../components/Blockedusers';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../slices/userSlice';

const Home = () => {

  const navigate = useNavigate();
  let auth = getAuth();
  const dispatch = useDispatch();

  let [verify, setVerify] = useState(false);

  let data = useSelector((state) => state.userLoginInfo.userInfo);

  onAuthStateChanged(auth, (user) => {
    if (auth.currentUser.emailVerified) {
      setVerify(true);
      dispatch(userLoginInfo(user));
      localStorage.setItem("userInfo", JSON.stringify(user));
    }
  });

  useEffect(() => {
    if (!data) {
      navigate('/login');
    }
  }, []);

  return (
    <div className='flex gap-x-6'>
      {verify ? (
        <>
          <div className='w-[186px] pl-2.5'>
            <Sidebar />
          </div>
          <div className='w-[427px]'>
            <Search />
            <GroupList />
            <FriendRequest />
          </div>
          <div className='w-[344px]'>
            <Friends />
            <Mygroups />
          </div>
          <div className='w-[344px]'>
            <Userlists />
            <Blockedusers />
          </div></>
      ) : (
        <div className='w-full h-screen flex justify-center items-center'>
          <h1 className='font-nunito font-bold text-5xl bg-button text-white p-5'>Please First Verify Your Email!</h1>
        </div>
      )}

    </div>
  )
}

export default Home;