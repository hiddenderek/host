import {configureStore} from '@reduxjs/toolkit'
import pageScrollReducer from '../features/pageScroll/pageScroll-slice'
export const store = configureStore({
    reducer: {
        pageScroll: pageScrollReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>