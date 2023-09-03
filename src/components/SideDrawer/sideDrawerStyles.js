export const drawerStyles = {
    drawer:{
        "& .MuiDrawer-paper":{
            boxShadow:'none',
            width:"250px",
            }
        },
    box:{
        display:'flex',
        width:'100%',
        padding:'0 16px',
        height:'64px',
        justifyContent:'space-between',
        alignItems:'center'
    },
    close_icon:{
        borderRadius:'50%',
        fontSize:'34px',
        "&:hover":{
            background:"#F5F5F5"
        }
    }
}