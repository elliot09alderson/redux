import { configureStore } from '@reduxjs/toolkit'

import accountReducer from './slices/AccountSlice'
import bonusReducer from './slices/BonusSlice'

export const store = configureStore({
  reducer: {
         account : accountReducer,
         bonus : bonusReducer
  },

})