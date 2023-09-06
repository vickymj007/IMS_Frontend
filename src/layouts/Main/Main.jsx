import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import { Outlet } from 'react-router-dom'

const Main = () => {
    const [openDrawer, setOpenDrawer]= useState(false)

    const handleDrawer = ()=>{
        setOpenDrawer(prev => !prev)
    }

  return (
    <div>
        <Navbar handleDrawer={handleDrawer}/>
        <SideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
        <Outlet/>
    </div>
  )
}

export default Main