import { Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import UserCard from '../Card/UserCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../../redux/userSlice'
import { toast } from 'react-hot-toast'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://influencer-management-system-o1r1.onrender.com/'

const ListUsers = () => {
  const dispatch = useDispatch()

  const {data, searchValue, sortBy} = useSelector(state => state.user)

  const filteredData = data? 
  data.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase().trim()))
  .sort((a,b)=>{
    switch(sortBy){
      case "Name":
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;

      case "Highest followers":
        return b.followers - a.followers
      case "Lowest followers":
        return a.followers - b.followers
      case "Social media handler":
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      case "Default":
        return 0
      default:
        return 0
    }
  })
  :null

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
          {filteredData ? filteredData.map(user=>(
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