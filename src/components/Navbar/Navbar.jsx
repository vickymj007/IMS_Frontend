import React, { useState } from 'react'
import { InputBase, Typography} from '@mui/material'
import {Menu, Close,Sort} from '@mui/icons-material';
import { Dropdown, MenuItem } from '@mui/base';
import { InputBox, StyledAppBar, StyledDropDownMenu, StyledMenuButton, StyledToolbar } from './navbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/userSlice';


const Navbar = ({handleDrawer}) => {
  const {searchValue} = useSelector(state => state.user)
  const [searchVal, setSearchVal] = useState(searchValue)
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    setSearchVal(e.target.value)
    dispatch(setSearchValue(e.target.value))
  }


  return (
    <div>
      <StyledAppBar position="static">
        <StyledToolbar>

          <div>
            <Menu onClick={handleDrawer}/>
            <Typography variant='h5'>IMS</Typography>
          </div>

          <InputBox>
            <InputBase 
              placeholder='Search...' 
              fullWidth={true} 
              value={searchVal}
              onChange={handleChange}
            />
            <Close color='action' onClick={()=>dispatch(setSearchValue(""))}/>
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
    </div>
  )
}

export default Navbar