import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import { api_options } from '../utils/constants'

const usePopularMovies = () => {
 
        //fetch data fromTMDB and store update
        const dispatch = useDispatch();

        const getPopular =async ()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
            api_options);
            const dataJSON =  await data.json();
            dispatch(addPopularMovies(dataJSON.results));
        }

        useEffect(()=>{
            getPopular();
        },[])
  
}


export default usePopularMovies;