import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      currentUser: null,
    },
    reducers: {
      setCurrentUser: (state, action) => {
        return {
            ...state,
            currentUser: action.payload 
        }
        
      },
      removeCurrentUser: (state ) => {
       return {
        ...state,
        currentUser:null
       }
        
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setCurrentUser, removeCurrentUser } = userSlice.actions
  
  export default userSlice.reducer