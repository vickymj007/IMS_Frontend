import React from 'react'
import femaleImg from '../../assets/avatar/Avatar-1.png'
import maleImg from '../../assets/avatar/Avatar-2.png'
import { DeleteOutline, EditNote, Face, Face3, FacebookRounded, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { deleteInfluencer } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { colors } from './colors'

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
    <Card sx={{maxWidth:280,width:"100%"}}>
        <CardHeader
            avatar={
            <Avatar sx={{
                background:colors[user.category]
            }}>{user.name[0].toUpperCase()}</Avatar>
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
            height={184}
            alt='avatar'
            image={user.gender === 'male'? maleImg : femaleImg}
        />
        <CardContent 
            sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}
        >
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
        <CardActions
            sx={{
                display:'flex',
                justifyContent:'space-between'
            }}
        >
            <Box>
                <IconButton color='primary'>
                    <FacebookRounded/>
                </IconButton>
                <IconButton color='secondary'>
                    <Instagram/>
                </IconButton>
                <IconButton color='primary'>
                    <Twitter/>
                </IconButton>
                <IconButton color='error'>
                    <YouTube/>
                </IconButton>
            </Box>
            <Button
                onClick={()=>handleEdit(user._id)}
                sx={{
                    background:"#31263e",
                    "&:hover":{
                        background:"#44355b"
                    }
                }}
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