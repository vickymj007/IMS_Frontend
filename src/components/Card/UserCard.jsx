import React from 'react'
import image from '../../assets/avatar/Avatar-1.png'
import { DeleteOutline, EditNote, Face, Face3 } from '@mui/icons-material'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'

const UserCard = ({user}) => {
  return (
    <Card sx={{maxWidth:300,width:"100%"}}>
        <CardHeader
            avatar={
            <Avatar>{user.name[0].toUppercase}</Avatar>
            }
            action={
            <IconButton>
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
                12,8767 Followers
            </Typography>
        </CardContent>
        <CardActions>
            <Button 
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