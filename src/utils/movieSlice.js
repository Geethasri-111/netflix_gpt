import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movieList",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addUpcomingMovies :(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies  :(state,action)=>{
            state.popularMovies = action.payload;
        }
    }
})


export const {addNowPlayingMovies,addUpcomingMovies , addTrailerVideo ,addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer; 