import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {InputBase} from '@mui/material'
import {Menu, Close,Sort} from '@mui/icons-material';
import { Dropdown, MenuItem } from '@mui/base';
import { InputBox, StyledAppBar, StyledDropDownMenu, StyledMenuButton, StyledToolbar } from './navbarStyles';


const Navbar = ({handleDrawer}) => {
  const [searchText,setSearchText]= useState("") 

  return (
    <div>
      <StyledAppBar position="static">
        <StyledToolbar>
          <div>
            <Menu onClick={handleDrawer}/>
            <h1>IMS</h1>
          </div>
          <InputBox>
            <InputBase 
              placeholder='Search...' 
              fullWidth={true} 
              value={searchText} 
              onChange={(e)=>setSearchText(e.target.value)}
            />
            <Close color='action' onClick={()=>setSearchText("")}/>
          </InputBox>
          <Dropdown>
            <StyledMenuButton>Sort <Sort/></StyledMenuButton>
            <StyledDropDownMenu>
              <MenuItem>Name</MenuItem>
              <MenuItem>Social media handler</MenuItem>
              <MenuItem>Highest followers</MenuItem>
              <MenuItem>Lowest followers</MenuItem>
            </StyledDropDownMenu>
          </Dropdown>
        </StyledToolbar>
      </StyledAppBar> 
      <Outlet/>
    </div>
  )
}

export default Navbar