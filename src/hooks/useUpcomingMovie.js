import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies} from '../utils/movieSlice'
import { api_options } from '../utils/constants'

const useUpcomingMovie = () => {
 
        //fetch data fromTMDB and store update
        const dispatch = useDispatch();

        const getUpcoming =async ()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
            api_options);
            const dataJSON =  await data.json();
            dispatch(addUpcomingMovies(dataJSON.results));
        }

        useEffect(()=>{
            getUpcoming();
        },[])
  
}


export default useUpcomingMovie;