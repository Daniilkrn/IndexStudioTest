import { createSlice } from '@reduxjs/toolkit'

export const seenSlice = createSlice({
  name: 'seenSlice',
  initialState: {
    seenFlag: false,
  },
  reducers: {
    setDefaultSeen(state,action){
      state.seenFlag = action.payload
    },
  },
})

export default seenSlice.reducer

export const {setDefaultSeen, } = seenSlice.actions