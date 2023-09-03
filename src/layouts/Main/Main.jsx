import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

const Main = () => {
    const [openDrawer, setOpenDrawer]= useState(false)

    const handleDrawer = ()=>{
        setOpenDrawer(prev => !prev)
    }

  return (
    <div>
        <Navbar handleDrawer={handleDrawer}/>
        <SideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
    </div>
  )
}

export default Main