import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const BaseLayout = () => {


  return (
    <div className='w-full h-screen bg-gray-50 flex'>

      <Outlet />
    </div>
  )
}

export default BaseLayout