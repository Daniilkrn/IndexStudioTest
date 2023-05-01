import { createSlice } from '@reduxjs/toolkit'

export const oriantationSlice = createSlice({
  name: 'oriantationSlice',
  initialState: {
    flagFirstOriantaion: true,
    flagSecondOriantaion: false,
  },
  reducers: {
    setDefaultFO(state,action){
      state.flagFirstOriantaion = action.payload
    },
    setDefaultSO(state,action){
      state.flagSecondOriantaion = action.payload
    },
  },
})

export default oriantationSlice.reducer

export const {setDefaultFO, setDefaultSO} = oriantationSlice.actions