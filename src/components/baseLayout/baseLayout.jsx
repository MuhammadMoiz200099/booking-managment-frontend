import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import PrimaryButton from "../buttons/primaryButton";
import { FaPowerOff, FaBars, FaHome, FaCalendarCheck, FaHistory } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Avatar from "../avatar/avatar";
import useLayoutHook from '../../hook/layout.hook';
import { logout } from '../../redux/slices/auth.slice';

const DEFAULT_IMAGE = 'https://amaxfireandsecurity.co.uk/wp-content/uploads/2023/12/profile-pic-MD.jpg';

const BaseLayout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const isSmall = useLayoutHook();
  const user = useSelector((state) => state.auth.user);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleOpenCloseDrawer = () => {
    setIsDrawerOpen((prev) => !prev)
  }

  const navigateTo = (location) => navigation(location);

  const handleLogout = (name) => {
    dispatch(logout())
    dispatch({ type: 'session/end' })
    navigation('/login')
  }

  return (
    <div className='w-full h-screen bg-gray-50'>
      <div className='flex'>
        <div className={`${isDrawerOpen ? isSmall ? "w-16 flex" : "w-64" : isSmall ? "w-0 hidden" : "w-16"} h-screen bg-violet-600 shadow flex flex-col justify-between`}>

          <div className={`${isDrawerOpen ? isSmall ? 'p-2' : 'p-4' : 'p-3'} mt-6 flex flex-col gap-10`}>
            {isDrawerOpen && !isSmall ? (
              <PrimaryButton title="Home" icon={<FaHome />} fullWidth="true" onClick={() => navigateTo('/booking/home')} />
              ) : (
              <PrimaryButton icon={<FaHome />} onClick={() => navigateTo('/booking/home')} />
            )}
            {isDrawerOpen && !isSmall ? (
              <PrimaryButton title="Booking" icon={<FaCalendarCheck />} fullWidth="true" onClick={() => navigateTo('/booking/create')} />
              ) : (
                <PrimaryButton icon={<FaCalendarCheck />} onClick={() => navigateTo('/booking/create')} />
            )}
            {isDrawerOpen && !isSmall ? (
              <PrimaryButton title="History" icon={<FaHistory />} fullWidth="true" onClick={() => navigateTo('/booking/history')} />
              ) : (
                <PrimaryButton icon={<FaHistory />} onClick={() => navigateTo('/booking/history')} />
            )}

          </div>
          <div className={`${isDrawerOpen ? isSmall ? 'p-2' : 'p-4' : 'p-3'} mb-5`}>
            {isDrawerOpen && !isSmall ? (
              <PrimaryButton title="Logout" icon={<FaPowerOff />} fullWidth="true" onClick={handleLogout} />
              ) : (
              <PrimaryButton icon={<FaPowerOff />} onClick={handleLogout} />
            )}
          </div>
        </div>
        <div className={`w-full h-screen flex flex-col ${isSmall ? 'p-4' : 'p-8' }`}>
          <div className='flex justify-center'>
          <div className='text-2xl tracking-widestmore font-extrabold'>
              <span className='text-5xl text-violet-500 italic'>H</span>enna <span className='text-5xl text-violet-500 italic'>C</span>lub
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <button className='bg-white-50 p-2 hover:bg-slate-200 rounded' onClick={handleOpenCloseDrawer}>
              <FaBars size={32} color='#4a4a4a' />
            </button>
            
            <div>
              <Avatar src={user?.profilePicture} firstname={user?.firstName} lastname={user?.lastName} />
            </div>
          </div>
          <div className='calc-height w-full mt-2 mx-2'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseLayout