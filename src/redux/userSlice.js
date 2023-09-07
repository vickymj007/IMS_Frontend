import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data:null,
    searchValue:"",
    sortBy:"Default"
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload
        },
        setSearchValue :(state,action)=>{
            state.searchValue = action.payload
        },
        deleteInfluencer:(state,action)=>{
            state.data = state.data.filter(user => user._id !== action.payload)
        },
        setSortBy:(state,action)=>{
            state.sortBy = action.payload
        }
    }
})

export const {setData, deleteInfluencer, setSearchValue, setSortBy} = userSlice.actions
export default userSlice.reducer