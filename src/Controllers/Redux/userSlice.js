import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Cody Sullivan"})
            state.push({name:"Kacy Johnson"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;