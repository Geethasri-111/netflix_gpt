import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieListReducer from './movieSlice';
import searchReducer from './searchSlice';
import configReducer from './configSlice';

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movieList:movieListReducer,
        search: searchReducer,
        config:configReducer
    }
})

export default appStore;