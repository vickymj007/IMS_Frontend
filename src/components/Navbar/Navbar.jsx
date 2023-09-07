import {InputBase, Typography} from '@mui/material'
import {Menu, Close,Sort} from '@mui/icons-material';
import { Dropdown, MenuItem } from '@mui/base';
import { InputBox, StyledAppBar, StyledDropDownMenu, StyledMenuButton, StyledToolbar } from './navbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setSortBy } from '../../redux/userSlice';
import './navbar.css'


const Navbar = ({handleDrawer}) => {
  const {searchValue} = useSelector(state => state.user)
  
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    dispatch(setSearchValue(e.target.value))
  }

  const handleSort =(e)=>{
    dispatch(setSortBy(e.target.innerText))
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
              value={searchValue}
              onChange={handleChange}
            />
            <Close color='action' onClick={()=>dispatch(setSearchValue(""))}/>
          </InputBox>

          <Dropdown>
            <StyledMenuButton>Sort <Sort/></StyledMenuButton>
            <StyledDropDownMenu>
              <MenuItem value='name' onClick={handleSort}>Name</MenuItem>
              <MenuItem value='social-media' onClick={handleSort}>Social media handler</MenuItem>
              <MenuItem value='highest-followers' onClick={handleSort}>Highest followers</MenuItem>
              <MenuItem value='highest-followers' onClick={handleSort}>Lowest followers</MenuItem>
              <MenuItem value='default' onClick={handleSort}>Default</MenuItem>
            </StyledDropDownMenu>
          </Dropdown>

        </StyledToolbar>
      </StyledAppBar> 
    </div>
  )
}

export default Navbar