import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data:null,
    loading:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload
        },
        deleteInfluencer:(state,action)=>{
            state.data = state.data.filter(user => user._id !== action.payload)
        }
    }
})

export const {setData, deleteInfluencer} = userSlice.actions
export default userSlice.reducer