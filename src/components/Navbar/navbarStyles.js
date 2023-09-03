import styled from "@emotion/styled"
import { AppBar, Box, Toolbar } from "@mui/material"
import { MenuButton, Menu as DropDownMenu } from '@mui/base';


export const StyledAppBar = styled(AppBar)({
    background:"#31263e",
    boxShadow:"none"
})
  
export const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    "& > div":{
      display:"flex",
      alignItems:"center",
      gap:"10px"
    }
})
  
export const InputBox = styled(Box)({
    background:"#44355b",
    padding:'0 5px',
    maxWidth:'380px',
    width:"100%",
    "& input":{
      color:"#fff",
    }
})

export const StyledMenuButton = styled(MenuButton)({
    background:"#44355b",
    border:"none",
    outline:'none',
    color:'#fff',
    borderRadius:'5px',
    padding:'5px 6px',
    fontSize:"16px",
    "& svg":{
        verticalAlign:'middle',
        fontSize:'16px'
    }
})

export const StyledDropDownMenu = styled(DropDownMenu)({
    background:"#44355b",
    marginTop:"20px",
    borderRadius:'5px',
    "& li":{
        cursor:'pointer',
        listStyle:'none',
        padding:'4px 6px',
        color:"#fff"
    },
    "& li:hover":{
        background:"#31263e"
    }
})
  
  