import { NavigateBefore } from '@mui/icons-material'
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import {AddCircleOutline,ContactSupport,Info,Subject} from '@mui/icons-material';
import React from 'react'
import { drawerStyles } from './sideDrawerStyles';
import { useNavigate } from 'react-router-dom';

const drawerListItems = [
    {
        text:'Home',
        icon:<Subject/>,
        path:'/'
    },
    {
        text:'Add Influencer',
        icon:<AddCircleOutline/>,
        path:'/add-influencer'
    },
    {
        text:'About',
        icon:<Info/>,
        path:'/about'
    },
    {
        text:'Contact',
        icon:<ContactSupport/>,
        path:'/contact'
    },
]

const SideDrawer = ({openDrawer,setOpenDrawer}) => {
    const navigate = useNavigate()

    const handleClick = (path)=>{
        setOpenDrawer(false)
        navigate(path)
    }
  return (

    <div>
        <Drawer 
            open={openDrawer}
            anchor='left'
            ModalProps={{
                keepMounted:false
            }}
            variant='temporary'
            sx={drawerStyles.drawer}
        >
            <Box sx={drawerStyles.box}>
                <Typography variant='h5'>IMS</Typography>
                <NavigateBefore 
                    onClick={()=>setOpenDrawer(false)}
                    sx={drawerStyles.close_icon}
                />
            </Box>

            <List
                subheader={
                    <ListSubheader component="div">
                    Navigate to
                    </ListSubheader>
                }
            >
                {drawerListItems.map(item =>(
                    <ListItemButton key={item.text} onClick={()=>handleClick(item.path)}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    </div>
  )
}

export default SideDrawer