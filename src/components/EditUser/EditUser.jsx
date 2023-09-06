import React, { useState } from 'react'
import { Close, Edit } from '@mui/icons-material'
import { Box, Button, Container, FormControl,  InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material'
import '../AddUser/adduser.css'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'



const EditUser = () => {
  const navigate = useNavigate()
  const {data} = useSelector(state => state.user)
  const {id} = useParams()

  const [user,setUser] = useState(data.find(user => user._id === id))

  const {name,socialMedia,category,gender,followers} = user

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(name === "" || gender ==="" || socialMedia === "" || followers === "" || category === "") return toast.error("Please fill in all the fields")
    if(socialMedia === "@" || socialMedia[0] !== "@" ) return toast.error("Please enter a valid Social Media handler")
    
    try {
      await axios.put(`/api/user/${id}`,user)

      toast.success("Updated Influencer details👍")
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  return (
    <Container 
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <form className='form add-user' onSubmit={handleSubmit} noValidate>
        <Typography variant='h6'>Edit Influencer</Typography>
        <TextField 
          label='Name' 
          color='secondary' 
          required 
          variant='outlined' 
          fullWidth
          value={name}
          onChange={handleChange}
          name='name'
        />
        <TextField 
          label='Social Media Handler' 
          required color='secondary' 
          variant='outlined'
          fullWidth
          value={socialMedia}
          onChange={handleChange}
          name='socialMedia'
        />
        <TextField 
          label='Followers' 
          required 
          color='secondary' 
          variant='outlined' 
          type='number' 
          fullWidth
          value={followers}
          onChange={handleChange}
          name='followers'
        />

        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select label='Category' name='category' value={category} onChange={handleChange}>
            <MenuItem value='Fitness'>Fitness</MenuItem>
            <MenuItem value='Fashion'>Fashion</MenuItem>
            <MenuItem value='Food'>Food</MenuItem>
            <MenuItem value='Sports'>Sports</MenuItem>
            <MenuItem value='Travel'>Travel</MenuItem>
            <MenuItem value='Content Creator'>Content Creator</MenuItem>
            <MenuItem value='Youtuber'>Youtuber</MenuItem>
            <MenuItem value='Vlogger'>Vlogger</MenuItem>
            <MenuItem value='Biker'>Biker</MenuItem>
            <MenuItem value='Actor'>Actor</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select label='Gender' name='gender' value={gender} onChange={handleChange}>
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
            <MenuItem value='other'>Other</MenuItem>
          </Select>
        </FormControl>

        <Box
          sx={{
            display:'flex',
            gap:"20px"
          }}
        >
          <Button 
            type='submit' 
            variant='contained' 
            color='secondary' 
            endIcon={<Edit/>}
            disableElevation
          >
            Update
          </Button>

          <Button  
            variant='contained' 
            color='error' 
            endIcon={<Close/>}
            disableElevation
            onClick={()=>navigate('/')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Container>
  )
}

export default EditUser