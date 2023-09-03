import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import UserCard from '../Card/UserCard'
import { data } from './data'


const ListUsers = () => {

  
  return (
    <div>
      <Typography my={3} variant='h5' gutterBottom align='center'>INFLUENCER MANAGEMENT SYSTEM</Typography>
      <Container sx={{marginBottom:5}}>
        <Stack 
          direction='row' 
          spacing={{xs:1,sm:2,lg:3}} 
          useFlexGap 
          flexWrap='wrap'
          justifyContent='center'
        >
          {data.map(user=>(
            <UserCard key={user._id} user={user}/>
          ))}
        </Stack>
      </Container>
    </div>
  )
}

export default ListUsers