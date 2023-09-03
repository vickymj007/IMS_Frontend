import { NavigateBefore } from '@mui/icons-material'
import { Drawer } from '@mui/material'
import React from 'react'

const SideDrawer = ({openDrawer,setOpenDrawer}) => {
  return (
    <div>
        <Drawer 
            open={openDrawer}
            anchor='left'
            ModalProps={{
                keepMounted:false
            }}
            variant='temporary'
            sx={{
            "& .MuiDrawer-paper":{
                marginTop:"64px",
                boxShadow:'none',
                width:"250px",
                background:"#31263e",
                height:"calc(100vh - 64px)"
                }
            }}
        >
            <div>
                <NavigateBefore 
                    onClick={()=>setOpenDrawer(false)} 
                    sx={{
                        color:"#fff",
                        marginRight:'auto',
                        width:'100%',
                    }}/>
            </div>
            <div>
                <p>Add Influencer</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </Drawer>
    </div>
  )
}

export default SideDrawer