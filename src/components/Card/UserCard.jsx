import React from 'react'
import image from '../../assets/avatar/Avatar-1.png'
import { DeleteOutline, EditNote, Face, Face3 } from '@mui/icons-material'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { deleteInfluencer } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = async (id)=>{
        try {
            await axios.delete(`/api/user/${id}`)
            dispatch(deleteInfluencer(id))
            toast.success("Successfully deleted influencer👍")
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    const handleEdit = (id)=>{
        navigate(`/edit-influencer/${id}`)
    }

  return (
    <Card sx={{maxWidth:300,width:"100%"}}>
        <CardHeader
            avatar={
            <Avatar>{user.name[0].toUpperCase()}</Avatar>
            }
            action={
            <IconButton onClick={()=>handleDelete(user._id)}>
                <DeleteOutline/>
            </IconButton>
            }
            title={user.name}
            subheader={user.socialMedia}
        />
        <CardMedia
            sx={{objectFit:'contain'}}
            component='img'
            height={194}
            alt='avatar'
            image={image}
        />
        <CardContent>
            <Typography 
                variant="body1" 
                color="text.primary"
                sx={{
                    "& svg":{
                        verticalAlign:'middle',
                        marginRight:1
                    }
                }}
            >
            {user.gender === "male"? <Face/> : <Face3/>}
            {user.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {user.followers.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Followers
            </Typography>
        </CardContent>
        <CardActions>
            <Button 
                onClick={()=>handleEdit(user._id)}
                sx={{background:"#31263e"}}
                endIcon={<EditNote/>} 
                variant='contained' 
                disableElevation
            >
                Edit
            </Button>
        </CardActions>
    </Card>
  )
}

export default UserCard