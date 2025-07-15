import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieListReducer from './movieSlice';

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movieList:movieListReducer,
    }
})

export default appStore;