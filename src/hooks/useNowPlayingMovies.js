import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { api_options } from '../utils/constants'

const useNowPlayingMovies = () => {
 
        //fetch data fromTMDB and store update
        const dispatch = useDispatch();

        const nowPlaying  = useSelector(store => store.movieList.nowPlayingMovies);

        const getNowPlaying =async ()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
            api_options);
            const dataJSON =  await data.json();
            dispatch(addNowPlayingMovies(dataJSON.results));
        }

        useEffect(()=>{
            !nowPlaying && getNowPlaying();
        },[])
  
}


export default useNowPlayingMovies;