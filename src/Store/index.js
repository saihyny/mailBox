import {configureStore} from '@reduxjs/toolkit'
import emailSilice from './emailSilice'
export const store = configureStore({
    reducer:{
        email:emailSilice,
    }
})
