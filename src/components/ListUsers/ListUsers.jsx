import { Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import UserCard from '../Card/UserCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../../redux/userSlice'
import { toast } from 'react-hot-toast'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:9000/'

const ListUsers = () => {
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.user)

  useEffect(()=>{
    axios.get('api/user')
    .then(response=>{
      dispatch(setData(response.data))
    })
    .catch(error=>{
      toast.error(error.response.data.msg)
    })
  },[dispatch])

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
          {data ? data.map(user=>(
            <UserCard key={user._id} user={user}/>
          ))
          :
          <Typography>Loading...</Typography>}
        </Stack>
      </Container>
    </div>
  )
}

export default ListUsers